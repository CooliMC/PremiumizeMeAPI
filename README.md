# PremiumizeMeAPI

[![NPM Version](https://badge.fury.io/js/premiumize-me-api.svg)](//npmjs.com/package/premiumize-me-api)
[![NPM All Releases](https://img.shields.io/npm/dt/premiumize-me-api.svg)](//npmjs.com/package/premiumize-me-api)

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

let testAPI = new PremiumizeMeAPI("YOUR_API_KEY");
````


#### getFolderList(String folder_id)

```
testAPI.getFolderList(folder_id).then(console.log);
```

The result for the ``` getFolderList() ``` command looks like this:

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


#### createFolder(String folder_name, String parent_id)

```
testAPI.createFolder(folder_name, parent_id).then(console.log)
```

The result for the ``` createFolder() ``` command looks like this:

```json
{
  "status": "success",
  "id": "string"
}
```


#### renameFolder(String folder_id, String folder_name)

```
testAPI.renameFolder(folder_id, folder_name).then(console.log)
```

The result for the ``` renameFolder() ``` command looks like this:

```json
{
  "status": "success",
  "message": "string"
}
```


#### pasteToFolder(String folder_id, String|String[] toPasteFolderIds, String|String[] toPasteFileIds)

```
testAPI.pasteToFolder(folder_id, toPasteFolderIds, toPasteFileIds).then(console.log);
```

The result for the ``` pasteToFolder() ``` command looks like this:

```json
{
  "status": "success",
  "message": "string"
}
```


#### deleteFolder(String folder_id)

```
testAPI.deleteFolder(folder_id).then(console.log);
```

The result for the ``` deleteFolder() ``` command looks like this:

```json
{
  "status": "success",
  "message": "string"
}
```


#### uploadToFolder(String folder_id)

```
testAPI.uploadToFolder(folder_id).then(console.log);
```

The result for the ``` uploadToFolder() ``` command looks like this:

```json
{
  "status": "success",
  "token": "string",
  "url": "string"
}
```


#### deleteFile(String file_id)

```
testAPI.deleteFile(file_id).then(console.log);
```

The result for the ``` deleteFile() ``` command looks like this:

```json
{
  "status": "success",
  "message": "string"
}
```


#### renameFile(String file_id, String file_name)

```
testAPI.renameFile(file_id, file_name).then(console.log);
```

The result for the ``` renameFile() ``` command looks like this:

```json
{
  "status": "success",
  "message": "string"
}
```


#### fetchFileDetails(String file_id)

```
testAPI.fetchFileDetails(file_id).then(console.log);
```

The result for the ``` fetchFileDetails() ``` command looks like this:

```json
{
  "id": "string",
  "name": "string",
  "type": "file",
  "size": 0,
  "created_at": 0,
  "folder_id": "string",
  "link": "string",
  "stream_link": "string"
}
```


#### createTransfer(String|ReadStream src_address_file, String folder_id)

```
testAPI.createTransfer(src_address_file, folder_id).then(console.log);
```

The result for the ``` createTransfer() ``` command looks like this:

```json
{
  "status": "success",
  "id": "string",
  "name": "example.jpg"
}
```


#### createDirectDownload(String src_address)

```
testAPI.createDirectDownload(src_address).then(console.log);
```

The result for the ``` createDirectDownload() ``` command looks like this:

```json
{
  "status": "success",
  "location": "https://server.com/path/file.ext",
  "filename": "file.ext",
  "filesize": 123123123,
  "content": [
    {
      "path": "folder/file1.jpg",
      "size": 123123123,
      "link": "https://server.com/path/file.ext",
      "stream_link": "https://server.com/path/file.ext",
      "transcode_status": "finished"
    }
  ]
}
```


#### getTransferList()

```
testAPI.getTransferList().then(console.log);
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


#### clearTransferList()

```
testAPI.clearTransferList().then(console.log);
```

The result for the ``` clearTransferList() ``` command looks like this:

```json
{
  "status": "success",
  "message": "string"
}
```


#### deleteTransfer(String transfer_id)

```
testAPI.deleteTransfer(transfer_id).then(console.log);
```

The result for the ``` deleteTransfer() ``` command looks like this:

```json
{
  "status": "success",
  "message": "string"
}
```


#### getAccountInfo()

```
testAPI.getAccountInfo().then(console.log);
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


#### createZipDownload(String|String[] file_id, String|String[] folder_id)

```
testAPI.createZipDownload(file_id, folder_id).then(console.log);
```

The result for the ``` createZipDownload() ``` command looks like this:

```json
{
  "status": "success",
  "location": "string"
}
```


#### checkHosterAvailability(String|String[] src_address)

```
testAPI.checkHosterAvailability(src_address).then(console.log);
```

The result for the ``` checkHosterAvailability() ``` command looks like this:

```json
{
  "status": "success",
  "response": [
    true
  ],
  "transcoded": [
    true
  ],
  "filename": [
    "string"
  ],
  "filesize": [
    "string"
  ]
}
```


#### getServiceList()

```
testAPI.getServiceList().then(console.log);
```

The result for the ``` getServiceList() ``` command looks like this:

```json
{
  "directdl": [
    "string"
  ],
  "cache": [
    "string"
  ],
  "fairusefactor": {
    "service": 0
  },
  "aliases": {
    "service": [
      "string"
    ]
  },
  "regexpatterns": {
    "service": [
      "string"
    ]
  }
}
```


## License

[MIT](LICENSE.md)
