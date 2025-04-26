# Ikalas API - JavaScript/Node.js Examples

This document contains JavaScript and Node.js specific examples for using the Ikalas API.

## Installation

Install the npm library:

```javascript
npm install @ikalasdev/ikalas
```

## Basic Usage

Import the Ikalas library in your script:

```javascript
const ikalas = require("ikalasdev/ikalas");
```

Configure your API key:

```javascript
ikalas.setApiKey("Put your API key here");
```

Execute a request:

```javascript
let qrcode = await ikalas.execute("generate-qrcode", {
  qrCodeData: "https://ikalas.com",
});
```

## Authentication Examples

### Using the npm library

```javascript
const ikalas = require("ikalasdev/ikalas");
ikalas.setApiKey("Put your API key here");
let qrcode = await ikalas.execute("generate-qrcode", {
  qrCodeData: "https://ikalas.com",
});
```

### HTTP POST request with axios

```javascript
var axios = require("axios");

var config = {
  method: "post",
  url: "https://ikalas.com/api/v1/generate-random-emails",
  headers: {
    ApiKey: "YOUR API KEY HERE",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```
