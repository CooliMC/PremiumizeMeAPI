# PremiumizeMeAPI

[![NPM Version](https://badge.fury.io/js/premiumize-me-api.svg)](//npmjs.com/package/premiumize-me-api)
[![Github All Releases](https://img.shields.io/github/downloads/CooliMC/PremiumizeMeAPI/total.svg)]()

## Description

A simple JS-Wrapper for the official [PremiumizeMe-API](https://app.swaggerhub.com/apis-docs/premiumize.me/api/1.4).

## Features

- Includes all official API-Calls
- Works with NodeJS Version 12.4.0 or higher
- Uses Promises to return the json data
- Supports .nzb and .torrent files to create a transfer
- Authentication through an API-Key

## Install

```
npm install premiumize-me-api
```

## Usage

### Node

```js
const PremiumizeMeAPI = require('premiumize-me-api')

let testAPI = new remiumizeMeAPI("YOUR_API_KEY");

testAPI.getFolderList("FolderID").then(console.log);
testAPI.getTransferList().then(console.log);
testAPI.getAccountInfo().then(console.log);
```
The result for the ``` getFolderList("FolderID") ``` command looks like this:

```json
{
  "status": "string",
  "content": [
    {
      "id": "string",
      "name": "string",
      "type": "file",
      "size": 0,
      "created_at": 0,
      "link": "string",
      "stream_link": "string",
      "breadcrumbs": [
        {
          "id": "string",
          "name": "string",
          "parent_id": "string"
        }
      ]
    }
  ],
  "name": "string",
  "parent_id": "string"
}
```

The result for the ``` getTransferList() ``` command looks like this:

```json
{
  "status": "string",
  "transfers": [
    {
      "id": "string",
      "name": "string",
      "message": "string",
      "status": "waiting",
      "progress": 0,
      "target_folder_id": "string",
      "folder_id": "string",
      "file_id": "string"
    }
  ]
}
```

The result for the ``` getAccountInfo() ``` command looks like this:

```json
{
  "status": "success",
  "customer_id": 0,
  "premium_until": 0,
  "limit_used": 0,
  "space_used": 0
}
```

## License

[MIT](LICENSE.md)
