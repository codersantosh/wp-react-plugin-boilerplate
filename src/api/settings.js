/*WordPress*/
import apiFetch from "@wordpress/api-fetch";
import {addQueryArgs} from "@wordpress/url";

export const fetchSettings = async () => {
    let path = 'wp/v2/settings',
        options ={};

    try {
        options = await apiFetch({
            path: path,
            method : 'GET'
        });
    } catch (error) {
        console.log('fetchSettings Errors:', error);
    }
    if( options.wp_react_plugin_boilerplate_options){
        return options.wp_react_plugin_boilerplate_options;
    }
    return options;
};

export const updateSettings = async (data) => {
    let path = 'wp/v2/settings',
        options ={};

    let queryArgs = {
        wp_react_plugin_boilerplate_options : data
    }

    path = addQueryArgs(path, queryArgs);

    try {
        options = await apiFetch({
            path: path,
            method : 'POST'
        });
    } catch (error) {
        console.log('updateSettings Errors:', error);
    }
    if( options.wp_react_plugin_boilerplate_options){
        return options.wp_react_plugin_boilerplate_options;
    }
    return options;
};