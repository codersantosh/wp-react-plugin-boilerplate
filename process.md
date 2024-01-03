# WP React Plugin Boilerplate

WP React Plugin Boilerplate is a starter WordPress plugin to develop WordPress Plugin via React and Rest API.

## Self Introduction
![Santosh Kunwar](https://avatars.githubusercontent.com/u/7057447?s=48&v=4?raw=true)

Santosh Kunwar, Founder/CEO at [Acme Themes](https://www.acmethemes.com/ ), [Acme Information Technology](https://www.acmeit.org/ ), and a popular Gutenberg Page Builder - [Gutentor]( https://wordpress.org/plugins/gutentor/  ) creator, who loves working on WordPress Themes, Plugins and recently on [Gutenberg Templates]( https://templateberg.com/gutenberg-templates/  ). A dynamic person who evolving with WordPress and has more than a decade of experience working with WordPress.
WordPress Profile of [codersantosh](https://profiles.wordpress.org/codersantosh/)
In short, I just love WordPress more…

## Output of Project
![WP React Plugin Boilerplate output](https://raw.githubusercontent.com/codersantosh/wp-react-plugin-boilerplate/master/assets/img/output.jpg)

## Basic Introduction to WordPress plugin

A WordPress plugin is a piece of software that extends or enhances the functionality of a WordPress website. It is a set of PHP, HTML, CSS, and possibly JavaScript files that can be easily added to a WordPress site to introduce new features or modify existing ones. WordPress plugins are designed to be modular and customizable, allowing users to tailor the functionality of their websites without directly modifying the core WordPress code.

[Reference: Plugin Handbook](https://developer.wordpress.org/plugins/)

## Basic Introduction to ReactJS

- ReactJS is a component-based front-end JavaScript library.
- It is open-source.
- Components: A small and isolated piece of code. Build Complex UIs combining “components”. Components are reusable.
- JSX (JavaScript XML): Markup syntax, similar to HTML.
- React component “STATE”: An object that determines how that component renders & and behaves. Use “state” to create dynamic and interactive components.
- Created by Jordan Walke, who was a software engineer at Facebook. Introduced in 2011 on Facebook's News Feed, and open-sourced in 2013.

[Reference: ReactJS]( https://reactjs.org/)

## Basic Introduction to WordPress Rest API

- An interface or communication protocol for sending and receiving data as JSON (JavaScript Object Notation) objects between the client site and server site.
- Released on the core in version 4.7 in December 2016.
- Provide an application platform for WordPress.
- Rest Route: URI which can be mapped to different HTTP methods for Request and Get Response.

[Reference: REST API Handbook]( https://developer.wordpress.org/rest-api/)

## Development Process

### Install Activate and Basic Introduction of the Plugin
```sh
git checkout 1basicplugin
```

### Setting Plugin Default Options, Getting Options, Deleting Options, and Setting Options 
```sh
git checkout 2optionsfunctions
```
- https://github.com/codersantosh/wp-react-plugin-boilerplate/blob/master/includes/functions.php

### Adding WordPress Admin Menu for Our Plugin
```sh
git checkout 3adminmenu
```
- https://github.com/codersantosh/wp-react-plugin-boilerplate/blob/master/includes/class-wp-react-plugin-boilerplate.php#L169
- https://github.com/codersantosh/wp-react-plugin-boilerplate/blob/master/admin/class-wp-react-plugin-boilerplate-admin.php#L60

#### Reference:
- https://developer.wordpress.org/reference/hooks/admin_menu/
- https://developer.wordpress.org/reference/functions/add_menu_page/ 


### Adding ReactJS to our Plugin
Should have Installed Node.js + npm (https://nodejs.org/en/download/)
```sh
git checkout 4initreact
npm install
npm run start
```
- https://github.com/codersantosh/wp-react-plugin-boilerplate/blob/master/admin/class-wp-react-plugin-boilerplate-admin.php#L99
- https://github.com/codersantosh/wp-react-plugin-boilerplate/blob/master/admin/class-wp-react-plugin-boilerplate-admin.php#L109
- https://github.com/codersantosh/wp-react-plugin-boilerplate/tree/master/src


#### Reference:
- https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/
- https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/ 
- https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/ 

### Implementing ReactJS on the WordPress Admin Menu
```sh
git checkout 5ReactOnWpMenu
```
#### Reference:
- https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/
- https://developer.wordpress.org/reference/functions/get_current_screen/
- https://developer.wordpress.org/reference/functions/wp_enqueue_script/
- https://developer.wordpress.org/reference/functions/wp_enqueue_style/
- https://developer.wordpress.org/reference/functions/wp_set_script_translations/
- https://developer.wordpress.org/reference/functions/wp_localize_script/ 

### Adding Default Gutenberg Components
```sh
git checkout 6GutenbergComponents
```
#### Reference:
- https://developer.wordpress.org/block-editor/reference-guides/components/ 

### State and Lifecycle to Components
```sh
git checkout 7StateLifecycle
```
#### Reference:
- https://reactjs.org/docs/state-and-lifecycle.html 
- https://reactjs.org/docs/hooks-state.html  


### Custom Components
```sh
git checkout 8CustomComponents
```
#### Reference:
- https://developer.wordpress.org/block-editor/reference-guides/components/tab-panel/

### Using Rest API to get Plugin Options and Setting it on React Component Setting Fields
```sh
git checkout 9RestApiGetOptions
```
- https://github.com/codersantosh/wp-react-plugin-boilerplate/blob/master/admin/class-wp-react-plugin-boilerplate-admin.php#L151


#### Reference:
- https://developer.wordpress.org/reference/hooks/rest_api_init/
- https://developer.wordpress.org/reference/functions/register_rest_route/ 
- https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/ 

### Using Rest API to set Plugin Options and Setting it on the Database ( WordPress Option Table )
```sh
git checkout 10RestApiSetOptions
```
- https://github.com/codersantosh/wp-react-plugin-boilerplate/blob/master/admin/class-wp-react-plugin-boilerplate-admin.php#L154
- https://github.com/codersantosh/wp-react-plugin-boilerplate/blob/master/admin/class-wp-react-plugin-boilerplate-admin.php#L192

### Real-Time Use of Option
```sh
git checkout 10RestApiSetOptions
```
- https://github.com/codersantosh/wp-react-plugin-boilerplate

### Finalization
```sh
git checkout master
```
- https://github.com/codersantosh/wp-react-plugin-boilerplate

### Queries?
Any queries?

### Exercise to create new fields

- Create Each New Field on Each General and Advanced Tab
- Rename Existing Tab
- Add New Tab with New Settings

### Thanks
