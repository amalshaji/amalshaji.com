---
title: FakeAPI
description: FakeAPI is the predecessor of Mockend. FakeAPI let's you generate fake data by sending a JSON payload 
    via POST request.
image: /images/fakeapi.png
link: https://fakeapi.amalshaji.com
github: https://github.com/amalshaji/website
index: 3
layout: project
---


## ✨ FakeAPI is upgraded to [Mockend](https://mockend.in), which supports much more cool features. You can still use FakeAPI.

## Base URL

- [https://fakeapi.amalshaji.com/](https://fakeapi.amalshaji.com/)


## API Endpoints

- [GET] /api/types

  - Returns all the supported fake data types.

- [POST] /api/

  > Make sure you include the trailing `/`. It is `/api/` not `/api`

  - Generates fake data based on the JSON payload.

  - Example,

  ### Simple Payload

<table>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
<tr>
<td>

```json
{
    "name": "name",
    "address": "address",
    "ip address": "ipv4",
    "company": "company"
}
```
</td>
<td>

```json
{
    "name": "Michael Tate",
    "address": "2671 Thomas Roads\nSouth Craigview, TX 15642",
    "ip address": "165.127.37.25",
    "company": "Tran-Lopez"
}
```

</td>
</tr>
</table>

  Where the `keys` in JSON payload are the identifiers(set whatever you want) and the `values` are the `fake datatypes` to generate.

  ### Complex Payload

<table>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
<tr>
<td>

```json
{
	"name": "name",
	"company": "company",
	"moto": "company_catch_phrase",
	"job": "job",
	"contact": {
		"phone": "phone",
		"email": "email",
		"address": {
			"country": "country",
			"city": "city",
			"street": "street_address"
		}
	},
	"bank details": {
		"account number": "bank_account_number",
		"credit card number": "cc_number"
	}
}
```

</td>
<td>

```json
{
  "name": "Sabrina Nelson",
  "company": "Vaughan Ltd",
  "moto": "Programmable bandwidth-monitored emulation",
  "job": "Early years teacher",
  "contact": {
    "phone": "718.130.0044x9491",
    "email": "isaacblackburn@morgan.com",
    "address": {
      "country": "Aruba",
      "city": "Ashleyland",
      "street": "1619 Wilson Burg Suite 518"
    }
  },
  "bank details": {
    "account number": "BEKA13539455367456",
    "credit card number": "4676224780749769"
  }
}
```

</td>
</tr>
</table>

### Repeat data using the _repeat_ key. 

The `repeat` keyword supports upto `10` items. Beyond that, it defaults to `10`.

<table>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
<tr>
<td>

```json
{
	"name": "name",
	"company": "company",
	"moto": "company_catch_phrase",
	"job": "job",
	"repeat": 3
}	
```

</td>
<td>

```json
[
  {
    "name": "Logan Green",
    "company": "Glover Inc",
    "moto": "Virtual upward-trending installation",
    "job": "Scientist, forensic"
  },
  {
    "name": "Kenneth Baldwin",
    "company": "Evans Ltd",
    "moto": "Networked client-driven function",
    "job": "Chemical engineer"
  },
  {
    "name": "Christian Peterson",
    "company": "Brady-Ayala",
    "moto": "Up-sized zero tolerance protocol",
    "job": "Sales professional, IT"
  }
]
```

</td>
</tr>
</table>

You can also repeat complex payload.

<table>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
<tr>
<td>

```json
{
	"name": "name",
	"company": "company",
	"moto": "company_catch_phrase",
	"job": "job",
	"contact": {
		"phone": "phone",
		"email": {
			"username": "username",
			"ip address": "ipv4",
			"repeat": 2
		}
	},
	"repeat": 2
}	
```

</td>
<td>

```json
[
  {
    "name": "Sarah Watson",
    "company": "Smith, Torres and Brown",
    "moto": "Fully-configurable intermediate application",
    "job": "Research scientist (life sciences)",
    "contact": {
      "phone": "143-378-8816x191",
      "email": [
        {
          "username": "hwilson",
          "ip address": "79.207.29.231"
        },
        {
          "username": "jared34",
          "ip address": "86.196.8.169"
        }
      ]
    }
  },
  {
    "name": "Randy Charles",
    "company": "Morris, Thomas and Gardner",
    "moto": "Centralized hybrid array",
    "job": "Food technologist",
    "contact": {
      "phone": "+1-078-376-5158x20776",
      "email": [
        {
          "username": "ecollins",
          "ip address": "25.4.169.5"
        },
        {
          "username": "ashleybailey",
          "ip address": "36.198.135.21"
        }
      ]
    }
  }
]
```

</td>
</tr>
</table>

## Data Types

All the fake data are generated using **Faker**. The fakes(datatypes) changed for convenience are listed below, 

| datatype | description |
|---|---|
| i_bank_account_number  | International Bank account Number |
| cc_expire  | Credit Card expire |
| cc_data | Credit Card data |
| cc_number | Credit Card Number |
| cc_provider | Credit Card Provider |