---
title: Deploying Sapper To Deta.sh
date: '2021-09-03'
tags: ['deta', 'sapper', 'svelte', 'express']
summary: You get free cloud, SSR and PWA. What else do you need?
image: '/images/sapper-deta.png'
layout: blog
---

## Table Of Contents

[Deta.sh](https://deta.sh) is a cloud platform that lets you run Python or Node applications for **free**. They also offer other products such as deta base, a NoSQL-based database, and deta drive for hosting files.

> Hoping the `Golang` support comes to deta sooner. I'm a big fan of the service.

Why Sapper?

[Sapper](https://sapper.svelte.dev) is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. It is the predecessor of [Sveltekit](https://kit.svelte.dev/).

You can quickly deploy svelte to deta. But it does not provide server-side rendering. So when deta is providing a fully-fledged nodejs environment, why miss out on using SSR? Besides, SSR gives you other benefits like SEO, etc.

> I tried working on a sveltekit adapter, didn't reach anywhere. However, Sapper is production-ready, and the basic template gives you PWA too.

## Template

[github.com/amalshaji/sapper-deta-template](https://github.com/amalshaji/sapper-deta-template)

## Demo

[rzl8na.deta.dev](https://rzl8na.deta.dev)

## Basic Setup

If you already have a basic template running, you can skip this part. Otherwise, create a sapper application as the official documentation says,

```bash
npx degit "sveltejs/sapper-template#rollup" my-app
cd my_app
npm install
```

Sapper, by default, uses [polka](https://github.com/lukeed/polka) as the server. I decided to use [express](https://github.com/expressjs/express) instead.

```bash
npm uninstall polka sirv
npm install express
```

## Modify the server

The server setup is defined in `src/server.js`. Replace the polka with express and modify to support both dev and prod environment.

```js
import express from 'express'
import compression from 'compression'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

const app = express()
app.use(compression({ threshold: 0 }), express.static('static'), sapper.middleware())

if (dev) {
  app.listen(PORT || 3000)
} else {
  module.exports = app
}
```

During development, i.e., when you run the application using `npm run dev`, sapper expects the server to run. That's why we run the express app in dev. In production, we'll export the app so another script can import it.

Before deploying to data, we need to build the application.

## Build the application

```bash
npm run build
```

Sapper builds the application into the `__sapper__` directory. Next, inspect the server code in `__sapper__/build/server/server.js`. Especially the last few lines.

```js
const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

const app = express__default['default']()
app.use(
  compression__default['default']({ threshold: 0 }),
  express__default['default'].static('static'),
  middleware()
)

if (dev) {
  app.listen(PORT || 3000)
} else {
  module.exports = app
}
```

At this point, this looks like a hack to make the code work. If you have a better solution, please let me know.

## Prepare to deploy

> For Deta to run your code, you need to call your app instance app, and it has to be in a file called index.js, which is the only required file for a Node Micro. You also need to export the app. Of course, you could add more files and folders. - Deta Docs

Create a new `index.js` in the root of the project.

```js
const app = require('./__sapper__/build/server/server')

module.exports = app
```

## Fix the image problem

To serve images properly in a NodeJS micro, add the following to a `.env` file and update the micro.

```env
BINARY_CONTENT_TYPES=image/*
```

If you haven't already, create a new micro and update the env file. Your sapper application should be running now.