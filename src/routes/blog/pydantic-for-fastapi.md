---
title: Pydantic For FastAPI
date: '2021-06-07'
tags: ['python', 'fastapi', 'pydantic']
draft: false
summary: Check out the pydantic features with examples that makes your fastapi application better
layout: default
---


[FastAPI](https://fastapi.tiangolo.com/) is a modern async framework for Python. According to [Python developers survey 2020](https://www.jetbrains.com/lp/python-developers-survey-2020/), FastAPI is the 3rd most popular web framework for python.

## What makes FastAPI so popular?

- Async
- Fast
- Easy to Code and fast learning curve.
- **Data validation via Pydantic**
- Automatic docs

Take a look at all the [FastAPI features](https://fastapi.tiangolo.com/features/).

[Pydantic](https://github.com/samuelcolvin/pydantic) is a python library for data parsing and validation using [python type hints](https://docs.python.org/3/library/typing.html). It is the [fastest python data validation library](https://pydantic-docs.helpmanual.io/benchmarks/).

## Pydantic for FastAPI

### [BaseSettings](https://pydantic-docs.helpmanual.io/usage/settings/) for reading environment variables

This requires `python-dotenv` installed.

```bash
pip install python-dotenv
```

Dummy `.env` file:

```text
DB_NAME=postgres
DB_PASS=postgres
DB_URL=postgresql://postgres:postgres@127.0.0.1:5432/postgres

DEBUG=True
SEED=42
```

Now create a new `env.py` file to read the environment variables.

```python

from pydantic import BaseSettings, PostgresDsn


class Settings(BaseSettings):
    db_name: str
    db_pass: str
    db_url: PostgresDsn
    debug: bool
    seed: int

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
print(settings)
```

Output:

```bash
db_name='postgres' db_pass='postgres' db_url=PostgresDsn('postgresql://postgres:postgres@127.0.0.1:5432/postgres', scheme='postgresql', user='postgres', password='postgres', host='127.0.0.1', host_type='ipv4', port='5432', path='/postgres') debug=True seed=42
```

- The environment variables are automatically loaded by name.
- They are converted to the types specified by type hints.

> By default, all variables are case-insensitive.

You can also use an alias for loading env values. For example, your env variable is `DATABASE_URL`, but you need to load it as `db_url`.

```python
from pydantic import BaseSettings, Field, PostgresDsn

class Settings(BaseSettings):
    db_url: PostgresDsn = Field(..., env="DATABASE_URL")
```

Reading the `env` file is only required if the values are not in the system environment. This process is costly, especially when read for each request. So cache the values using `lru_cache`.

```python
from functools import lru_cache
# other imports


class Settings(BaseSettings):
    # All fields, yadayadayada

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
```

Every time the `get_settings` is called, the cached values are returned.

### [Validators](https://pydantic-docs.helpmanual.io/usage/validators/) for custom data validation

Validators are applied to [BaseModel](https://pydantic-docs.helpmanual.io/usage/models/#basic-model-usage) to perform custom validation.

Basic `BaseModel + FastAPI` usage:

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class User(BaseModel):
    email: str  # use EmailStr from pydantic
    username: str
    password: str


@app.post("/")
async def register(user: User):
    return user
```

Test it out using [httpie](https://httpie.io/):

```bash
➜ http POST 127.0.0.1:8000 email=test@test.com username=amal password=amal
HTTP/1.1 200 OK
content-length: 61
content-type: application/json
date: Wed, 19 May 2021 12:20:06 GMT
server: uvicorn

{
    "email": "test@test.com",
    "password": "amal",
    "username": "amal"
}
```

Let's use `@validator` from pydantic to perform some operation on the BaseModel before the view, `register`, receives it.

```python
from pydantic import BaseModel, validator

class User(BaseModel):
    email: str  # use EmailStr from pydantic
    username: str
    password: str

    @validator("password")
    def hash_the_password(cls, password: str):
        return f"Fast-Insecure-Hash-{password}"
```

```bash
➜ http POST 127.0.0.1:8000 email=test@test.com username=amal password=amal
HTTP/1.1 200 OK
content-length: 80
content-type: application/json
date: Wed, 19 May 2021 12:39:06 GMT
server: uvicorn

{
    "email": "test@test.com",
    "password": "Fast-Insecure-Hash-amal",
    "username": "amal"
}
```

You can also validate a particular field with the rest of the fields.

```python
@validator("password")
def hash_the_password(cls, password, values, **kwargs):
    print(values.keys())
    return password
```

This prints `dict_keys(['email', 'username'])` to stdout. The pydantic fields are validated in sequence, and the `values` dict carries the already validated fields.

In this case, since we are validating the `password` field, all the above fields are available to use.

Let's break this down further so you can understand better. Suppose you have the following schema:

```python
class Demo(BaseModel):
    a: str
    b: str
    c: str
    ...
    z: str

    @validator("c")
    def demo_validator(cls, c, values, **kwargs):
        # some validation logic.
```

Here the variable `c` carries the value `Demo.c` and the variable values carries all
the fields before `Demo.c`. So If you need another variable to be available for validation,
move the variable above `c`.

You can use [Root Validator](https://pydantic-docs.helpmanual.io/usage/validators/#root-validators) to use the entire model's data. By default, the root validator gets data after all the fields are validated(i.e., the default validation).

```python
@root_validator
def test_root_validator(cls, values):
    print(values.keys())
    return values
```

Output:

```bash
dict_keys(['email', 'username', 'password'])
```

Here you can get all the values only after the basic validation is performed.

### [Schema_extra](https://fastapi.tiangolo.com/tutorial/schema-extra-example/?h=sch#pydantic-schema_extra) for better documentation

With the previous example running, if you navigate to [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs), you could see the [interactive docs](https://fastapi.tiangolo.com/?h=intera#interactive-api-docs) by FastAPI.

![Interactive API docs by FastAPI](https://cdn.hashnode.com/res/hashnode/image/upload/v1622219694871/T_ymAxop6.jpeg)

Instead of `string` for all values, let's write some custom data for the examples.

```python
class User(BaseModel):
    email: str  # use EmailStr from pydantic
    username: str
    password: str

    class Config:
        schema_extra = {
            "example": {
                "email": "test@test.com",
                "username": "amal",
                "password": "amal",
            }
        }
```

![Interactive API docs with custom data](https://cdn.hashnode.com/res/hashnode/image/upload/v1622219722163/iq0ZwsRbo.jpeg)

You can also use fake data libraries like [Faker](https://faker.readthedocs.io/en/master/) to generate random data.

Setting the example data can also be achieved like so:

```python
class User(BaseModel):
    email: str = Field(..., example="test@test.com")
    username: str = Field(..., example="amal")
    password: str = Field(..., example="amal")
```
