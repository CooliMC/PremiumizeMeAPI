/**
 * The JavaScript file index.js
 *
 * @file    index.js
 * @author  CooliMC
 * @version 1.0
 * @since   2019-05-30
 */


//Use strict-mode for better code and optimisation
'use strict';

//Libraries used in the project
const Axios = require('axios');
const Request = require('request');
const fs = require('fs');

//Classes and functions
class PremiumizeMeAPI
{
    //Set baseURL
    static baseURL = "https://www.premiumize.me/api";

    /**
     * @constructor
     * @param {String} apikey
     */
    constructor(apikey)
    {
        //Checks for apikey
        if((typeof apikey) !== 'string')
            throw new Error("API-Key must be a string.");
        if(apikey.length === 0)
            throw new Error("API-Key can't be an empty string.");

        //Set API-Key
        this.apikey = apikey;
    }

    /**
     * @getFolderList
     * @param {String} [folder_id]
     * @return {Promise}
     */
    getFolderList(folder_id)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/folder/list"),
                false,
                {
                    apikey : this.apikey,
                    id: folder_id
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @createFolder
     * @param {String} folder_name
     * @param {String} [parent_id]
     * @return {Promise}
     */
    createFolder(folder_name, parent_id)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/folder/create"),
                true,
                {
                    apikey : this.apikey,
                    name : folder_name,
                    parent_id : parent_id
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @renameFolder
     * @param {String} folder_id
     * @param {String} folder_name
     * @return {Promise}
     */
    renameFolder(folder_id, folder_name)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/folder/rename"),
                true,
                {
                    apikey : this.apikey,
                    id : folder_id,
                    name : folder_name
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @pasteToFolder
     * @param {String} folder_id
     * @param {String|String[]} [toPasteFolderIds]
     * @param {String|String[]} [toPasteFileIds]
     * @return {Promise}
     */
    pasteToFolder(folder_id, toPasteFolderIds, toPasteFileIds)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/folder/paste"),
                true,
                {
                    apikey : this.apikey,
                    id : folder_id,
                    folders : (
                        Array.isArray(toPasteFolderIds) ?
                            toPasteFolderIds :
                            [toPasteFolderIds]
                    ),
                    files : (
                        Array.isArray(toPasteFileIds) ?
                            toPasteFileIds :
                            [toPasteFileIds]
                    )
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @deleteFolder
     * @param {String} folder_id
     * @return {Promise}
     */
    deleteFolder(folder_id)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/folder/delete"),
                true,
                {
                    apikey : this.apikey,
                    id : folder_id
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @uploadToFolder
     * @param {String} [folder_id]
     * @return {Promise}
     */
    uploadToFolder(folder_id)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/folder/uploadinfo"),
                true,
                {
                    apikey : this.apikey,
                    id : folder_id
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @deleteFile
     * @param {String} file_id
     * @return {Promise}
     */
    deleteFile(file_id)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/item/delete"),
                true,
                {
                    apikey : this.apikey,
                    id : file_id
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @renameFile
     * @param {String} file_id
     * @param {String} file_name
     * @return {Promise}
     */
    renameFile(file_id, file_name)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/item/rename"),
                true,
                {
                    apikey : this.apikey,
                    id : file_id,
                    name : file_name
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @fetchFileDetails
     * @param {String} file_id
     * @return {Promise}
     */
    fetchFileDetails(file_id)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/item/details"),
                true,
                {
                    apikey : this.apikey,
                    id : file_id
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @createTransfer
     * @param {String|ReadStream} src_address_file
     * @param {String} [folder_id]
     * @return {Promise}
     */
    createTransfer(src_address_file, folder_id)
    {
        //Temporary variable for the type check
        let tempStringCheck = ((typeof src_address_file) !== "string");

        //Default function code
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/transfer/create"),
                true,
                (
                    tempStringCheck ? {
                        "file" : src_address_file,
                        "apikey" : this.apikey,
                        "folder_id" : (folder_id || "")

                    } : {
                        apikey : this.apikey,
                        src : src_address_file,
                        folder_id : (folder_id || "")
                    }
                ),
                tempStringCheck
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @createDirectDownload
     * @param {String} src_address
     * @return {Promise}
     */
    createDirectDownload(src_address)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/transfer/directdl"),
                true,
                {
                    apikey : this.apikey,
                    src : src_address
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @createDirectDownload
     * @return {Promise}
     */
    getTransferList()
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/transfer/list"),
                false,
                {
                    apikey : this.apikey
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @clearTransferList
     * @return {Promise}
     */
    clearTransferList()
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/transfer/clearfinished"),
                true,
                {
                    apikey : this.apikey
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @deleteTransfer
     * @param {String} transfer_id
     * @return {Promise}
     */
    deleteTransfer(transfer_id)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/transfer/delete"),
                true,
                {
                    apikey : this.apikey,
                    id : transfer_id
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @getAccountInfo
     * @return {Promise}
     */
    getAccountInfo()
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/account/info"),
                true,
                {
                    apikey : this.apikey
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    //Not working properly, zips whole root folder

    /**
     * @createZipDownload
     * @param {String|String[]} file_id
     * @param {String|String[]} folder_id
     * @return {Promise}
     */
    createZipDownload(file_id, folder_id)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/zip/generate"),
                true,
                {
                    apikey : this.apikey,
                    files : (
                        Array.isArray(file_id) ?
                            file_id :
                            [file_id]
                    ),
                    folders : (
                        Array.isArray(folder_id) ?
                            folder_id :
                            [folder_id]
                    )
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    //NO IDEA HOW OR IF ITS WORKING:

    /**
     * @checkHosterAvailability
     * @param {String|String[]} src_address
     * @return {Promise}
     */
    checkHosterAvailability(src_address)
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/cache/check"),
                true,
                {
                    apikey : this.apikey,
                    items : (
                        Array.isArray(src_address) ?
                            src_address :
                            [src_address]
                    ),
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * @getServiceList
     * @return {Promise}
     */
    getServiceList()
    {
        return new Promise((resolve, reject) => {
            request(
                (PremiumizeMeAPI.baseURL + "/services/list"),
                true,
                {
                    apikey : this.apikey
                }
            ).then((param) => {
                resolve(param);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

// TODO: FOR LATER USE IN OBJECT BASED API
/*class PremiumizeMeFolder
{

}

class PremiumizeMeFile
{

}

class PremiumizeMeTransfer
{

}*/

function request(url, isPostRequest, parameterJson, isFormData)
{
    return new Promise((resolve, reject) => {
        if(isPostRequest)
        {
            //Do a post request
            if(isFormData)
            {
                Request({
                    url: url,
                    method: "POST",
                    formData : parameterJson,
                    headers: { "Content-Type": "multipart/form-data" }
                }, function (err, res, body) {
                    if(err) console.log(err);
                    console.log(body);
                });
            } else {
                Axios.post(url, null, { params : parameterJson }).then((res) => {
                    //Check for a bad response code
                    if((res.statusCode !== 200) && (res.status !== 200))
                    {
                        //Reject the invalid response code
                        reject("Invalid status code <" + (res.statusCode || res.status) + ">");
                    }

                    //Resolve the data
                    resolve(res.data);
                }).catch((error) => {
                    //Reject the error
                    reject(error);
                });
            }
        } else {
            //Do a get request
            Axios.get(url, { params : parameterJson }).then((res) => {
                //Check for a bad response code
                if((res.statusCode !== 200) && (res.status !== 200))
                {
                    //Reject the invalid response code
                    reject("Invalid status code <" + (res.statusCode || res.status) + ">");
                }

                //Resolve the data
                resolve(res.data);
            }).catch((error) => {
                //Reject the error
                reject(error);
            });
        }
    });
}


// TODO: Remove default for the next major release
module.exports = PremiumizeMeAPI;
module.exports.default = PremiumizeMeAPI;
