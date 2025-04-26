# API

# Ikalas - Documentation

## Quick Start

This article explains how to quickly get started with the Ikalas API.

- Sign up on Ikalas to get an API key. An API key is necessary to run requests on the Ikalas API. You can create up to 3 API keys for free without paying for a subscription. [Signup link here][signup]
- Once you've registered, [go to the dashboard][page_api] to manage your API keys. You can view, add, delete, or edit them.
- Now that you have an API key, you can execute requests. You have two options: use HTTP REST requests or use the official Ikalas npm library.
- In this quick start guide, we'll use the npm library.

- Install the npm library

```
npm install @ikalasdev/ikalas
```

- Import the Ikalas library in your script

```
const ikalas = require("ikalasdev/ikalas")
```

- Configure your API key

```
ikalas.setApiKey("Put your API key here");
```

- Execute a request

```
let qrcode = await ikalas.execute("generate-qrcode", {qrCodeData: "https://ikalas.com"});
```

That's it! You're done!
Now that you know how to execute a request, you can explore the documentation and find the API methods you need for your project.
Using the Ikalas API, you can really accelerate your development and be more productive.

## Overview

### About the Ikalas API

Developers shouldn't need to constantly produce new code in their projects. Or download and configure multiple libraries that they need to learn to use and maintain.
By offering a wide catalog of API methods, Ikalas allows developers to quickly use the functionalities they need without developing new code, by calling a single API they know well.
The Ikalas API can be used with HTTP REST requests or with the npm library. We recommend using the npm library if you're coding in JavaScript.

### API Version

The Ikalas API is currently in version 1.0.0, commonly called v1.
We do not plan, in the medium term, to move to a higher version, in order to maintain consistent and lasting documentation for developers.
No headaches wondering which version to use - that's the comfort we want for our developers.

### Access

All API requests are made via HTTPS from `https://ikalas.com/api/v1`. All data is sent and received in JSON format.

### Authentication

All requests require authentication with an API key that must be included in the header (for HTTP REST requests) or configured with the npm library.

#### Authentication example for a request executed with the npm library

```
const ikalas = require("ikalasdev/ikalas")
ikalas.setApiKey("Put your API key here");
let qrcode = await ikalas.execute("generate-qrcode", {qrCodeData: "https://ikalas.com"});
```

#### Authentication example for an HTTP POST request executed with the axios library

```
var axios = require('axios');

var config = {
  method: 'post',
  url: 'https://ikalas.com/api/v1/generate-random-emails',
  headers: {
    'ApiKey': "YOUR API KEY HERE"
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

#### An invalid authentication returns a 403 error

```
{
    "success": false,
    "message": "Unauthorized. You must include a valid api key in the headers."
}
```

## Pricing

**start**: free plan that allows you to execute a few requests and get familiar with the Ikalas API
**standard**: paid plan for individuals or small startups
**pro**: paid plan that suits small teams well
**business**: unlimited plan for large organizations

|                               | Start  | Standard | Pro     | Business  |
| ----------------------------- | ------ | -------- | ------- | --------- |
| Number of requests per day    | 200    | 1000     | 10000   | Unlimited |
| Size limit for file transfers | 100 MB | 500 MB   | 1000 MB | Unlimited |
| Number of API keys            | 3      | 5        | 10      | Unlimited |
| Email support response time   | 48h    | 24h      | 8h      | 2h        |

## Frequently Asked Questions

#### Are other data formats used besides JSON?

No, only JSON is used for all data sent and received by the API.

#### Is OAuth2 authentication used?

No, requests are authenticated only by an API key sent in the header or configured with the npm package.

#### Is there a subscription for students?

There is no specific subscription for students, but please contact us if you need a discount.

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[signup]: https://ikalas.com/app/signup
[page_api]: https://dashboard.ikalas.com/_api
