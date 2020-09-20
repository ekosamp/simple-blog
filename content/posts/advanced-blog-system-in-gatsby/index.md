---
draft: false
date: 2020-08-16
title: Advanced blog system in Gatsby
description: Create a complete blog from scratch in Gatsby with pagination, categories, featured post, author, SEO and navigation.
category: Gatsbyjs
tags: [Gatsbyjs, Tips]
thumbnail: ./gatsbyjs.png
---


## What’s Gatsby.js?

Today, static site generators are one of the most popular ways to build websites. You get a complete build done quickly without complications, hosted cheaply or even for free. That’s why the community started creating different ways to build static site generators

The React community has a couple of tools/frameworks that can generate a static website. My favorite, and yours probably too, is Gatsby: “a free and open-source framework based on React that helps developers build blazing-fast websites and apps.”

## What will we build?

I suppose you know enough about Gatsby, so I won’t go into detail on how basic things like query/StaticQuey, layout, and pages work. My goal here is to show you how I implemented a complete blog `from scratch` only using `gatsby-node.js` and its `pageContext API`.

So, let’s try to solve the following problems:

- Pagination;
- Category and tag pages (with pagination);
- Category list (with navigation);
- Featured post;
- Author page;
- Next and previous post;
- SEO component.

## How does Gatsby meet the content?
First of all, we need to tell Gatsby where your content is and what it needs to do with these files. So let’s open the `gatsby-config.js` file and install a few plugins:

```js:title=gatsby-config.js

module.exports = {
  ...
  plugins: [
  ...
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
        ],
      },
    },
  ],
}

```

