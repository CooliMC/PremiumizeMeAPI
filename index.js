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
const axios = require('axios');


//Classes and functions
class PremiumizeMeAPI
{
    //Set baseURL
    static baseURL = "https://www.premiumize.me/api";


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
     * @param {String} [toPasteFolderIds]
     * @param {String} [toPasteFileIds]
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

function request(url, isPostRequest, parameterJson)
{
    return new Promise((resolve, reject) => {
        if(isPostRequest)
        {
            //Do a post request
            axios.post(url, null, { params : parameterJson }).then((res) => {
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
        } else {
            //Do a get request
            axios.get(url, { params : parameterJson }).then((res) => {
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