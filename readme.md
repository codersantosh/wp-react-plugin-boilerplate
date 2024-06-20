WP React Plugin Boilerplate is a starter WordPress plugin to develop WordPress Plugin via React and Rest API.

# WP React Plugin Boilerplate

> `WP React Plugin Boilerplate` is a starter WordPress plugin to develop WordPress Plugin via React and Rest API. The Plugin Settings was added by React, Gutenberg Components and Rest API

## Description

This boilerplate provides a foundation for building modern WordPress plugins.

## Table of contents

- [WP React Plugin Boilerplate](#wp-react-plugin-boilerplate)
    - [Description](#description)
    - [Table of contents](#table-of-contents)
    - [Features](#features)
    - [Getting Started](#getting-started)
    - [Installation](#1-installation)
    - [Development Setup](#2-development-setup)
    - [Renaming the Plugin](#3-renaming-the-plugin)
    - [Activate the Plugin](#4-activate-the-plugin)
    - [Folder Information](#folder-information)
    - [Changelog](#changelog)
    - [Contributing](#contributing)
    - [Authors](#authors)
    - [License & Attribution](#license--attribution)

## Features

- **Easy Renaming:** Simplify renaming of plugin files, constants, variables, classes, text-domain, and functions.

  - Edit the `initial-rename.js` file in the .bin directory.
  - Adjust the naming strings.
  - Run `npm run initial-rename`

- **Language File Creation:** Generates .pot files from both JavaScript and PHP code.

- **Deployment Command:**

  - Run `npm run deploy` to create a production-ready deploy folder.
  - Rename and upload this folder to your WordPress site or WordPress.org after thorough testing.

## GETTING STARTED

### 1. Installation

- Clone the repository to /wp-content/plugins/:

  ```sh
  git clone https://github.com/codersantosh/wp-react-plugin-boilerplate.git
  ```

  Or download and upload the plugin files to /wp-content/plugins/wp-react-plugin-boilerplate.

- Rename the folder name wp-react-plugin-boilerplate to your plugin folder.

### 2. Development Setup

<details>
 <summary> Don't have <code>Node.js</code> + <code>npm</code> installed? You have to install them first. (CLICK TO EXPAND)</summary>

Go to the Node's site [download + install](https://nodejs.org/en/download/) Node on your system. This will install both `Node.js` and `npm`, i.e., node package manager — the command line interface of Node.js.

You can verify the install by opening your terminal app and typing...

```sh
node -v
# Results into 7.19.1 — or installed version.

npm -v
# Results into v14.15.1 — or installed version.
```

</details>

Follow the following steps to add your functionalities to the plugin:

1. Navigate to plugin files `/wp-content/plugins/your-renamed-plugin-folder`, open terminal app.
2. Run the `npm install` command to install npm dependencies, wait sometimes to complete it.
3. Run `npm run start` command to initialize development of React JS, Development can be done any time. Use it in the development environment.
4. Run the `npm run build` command to finalize the development and be ready for production. The command creates production files. After building the production file move it to the production level.

### 3. Renaming the Plugin

You need to rename the plugin folder and file names. Additionally, you should update the constants, variables, classes, text-domain, and functions within the plugin to align with your plugin name. For instance, if your plugin is named 'react-settings', then:

#### i. Renaming using command

In the plugin folder, navigate to .bin and open initial-rename.js. Make the following changes:

- `your-renamed-plugin`,
- `your_renamed_plugin`,
- `YOUR_RENAMED_PLUGIN`,
- `YOUR-RENAMED-PLUGIN`,
- `Your-Renamed-Plugin`,
- `Your_Renamed_Plugin`,
- `YourRenamedPlugin`

With:

- `react-settings`,
- `react_settings`,
- `REACT_SETTINGS`,
- `REACT-SETTINGS`,
- `React-Settings`,
- `React_Settings`,
- `ReactSettings`

now Run `npm run initial-rename`

#### ii. OR Manual rename

- rename folder from `wp-react-plugin-boilerplate` to `react-settings`
- rename all files from `wp-react-plugin-boilerplate` to `react-settings` PHP,JS and CSS
- change `wp_react_plugin_boilerplate` to `react_settings`
- change `wp-react-plugin-boilerplate` to `react-settings`
- change `Wp_React_Plugin_Boilerplate` to `React_Settings`
- change `WP_REACT_PLUGIN_BOILERPLATE` to `REACT_SETTINGS`

### 4. Activate the Plugin:

It's safe to activate the plugin at this point. Activate the plugin through the 'Plugins' screen in WordPress

Go to WordPress Dashboard => React Settings and View the Default Settings of the Plugin.

## Folder Information

<strong>WP React Plugin Boilerplate</strong> Folder Information

```sh
INSIDE: /wp-installatioon-folder/wp-content/plugins/your-renamed-plugin-folder

├── .babelrc
├── .gitignore
├── LICENSE.txt
├── index.php
├── package-lock.json (auto created via NPM)
├── package.json
├── readme.md
├── README.txt
├── uninstall.php
├── your-renamed-plugin.php
|
├── .bin
|  ├── copy.js
|  ├── initial-rename.js
|  └── make-string.js
|
├── admin
|  ├── class-admin.php
|  └── index.php
|
├── build (auto created via NPM)
|  └── admin
|     ├── admin-rtl.css
|     ├── admin.asset.php
|     ├── admin.css
|     └── admin.js
├── build (auto created via NPM)
|  ├── admin
|  |  ├── admin-rtl.css
|  |  ├── admin.asset.php
|  |  ├── admin.css
|  |  └── admin.js
|  |
|  └── public
|     ├── public-rtl.css
|     ├── public.asset.php
|     ├── public.css
|     └── public.js
|
├── includes
|  ├── api
|  |  ├── class-api-settings.php
|  |  ├── class-api.php
|  |  └── index.php
|  ├── class-activator.php
|  ├── class-deactivator.php
|  ├── class-i18n.php
|  ├── class-include.php
|  ├── class-loader.php
|  ├── functions.php
|  ├── index.php
|  └── main.php
|
├── languages
|  └── your-renamed-plugin.pot
|
├── public
|  ├── class-public.php
|  └── index.php
|
└── src
   ├── admin
   |  └── components
   |  |  ├── atoms
   |  |  |   ├── index.js
   |  |  |   └── save-settings.js
   |  |  ├── molecules
   |  |  |   ├── docs-title.js
   |  |  |   └── index.js
   |  |  └── organisms
   |  |      ├── admin-header.js
   |  |      └── index.js
   |  └── pages
   |  |  ├── landing
   |  |  |   └── index.js
   |  |  └── settings
   |  |      ├── pages
   |  |      |  ├── advanced.js
   |  |      |  ├── index.js
   |  |      |  ├── settings1.js
   |  |      |  └── settings2.js
   |  |      └── routes.js
   |  ├── admin.scss
   |  └── routes.js
   |
   ├── public
   |  ├── public.js
   |  └── public.scss
   ├── _mixins.scss
   ├── admin.js
   ├── prefix-vars.scss
   └── public.js
```

## Changelog

### 2.0.0

### Major Update

- Rewritten: Whole plugin.
- Added: phpcs:ignore Class file names should be based on the class name with "class-" prepended.
- Added: [Atrc (atrc) - Atomic React Components](https://github.com/codersantosh/atrc)
- Added: [Atomic CSS](https://github.com/codersantosh/atomic-css)
- Added: npm admin and public scripts
- Added: npm makepot and copy scripts
- Added: npm deploy script
- Added: npm initial-rename script
- Updated: UI and UX
- Updated: Custom settings API
- Removed: [Uses Inbuilt WordPress Settings API](https://github.com/codersantosh/wp-react-plugin-boilerplate/issues/8)

### 1.0.1

#### Major Update

- Added: Uses React Router, Context, and Reducer
- Added: Atomic Design Methodology
- Added: [AT Grid](https://github.com/codersantosh/at-grid)
- Added: Uses Inbuilt WordPress Settings API
- Added: Settings via register_setting
- Updated: UI and UX
- Removed: Custom API and Custom Sanitization Functions

### 1.0.0

- Initial Release

## Contributing

Thank you for your interest in contributing to Project WP React Plugin Boilerplate. To submit your changes, please follow the steps outlined below.

1. **Fork the Repository:** Click on the "Fork" button on the top right corner of the repository page to create your fork.

2. **Clone your Fork:** Clone your forked repository to your local machine using the following command:

   ```sh
   git clone https://github.com/your-username/wp-react-plugin-boilerplate.git
   ```

3. **Create a Feature Branch:** Create a new branch for your feature or bug fix:

   ```sh
   git checkout -b my-new-feature
   ```

4. **Make Changes:** Add your changes to the project. You can use the following command to stage all changes:

   ```sh
   git add .
   ```

5. **Commit Changes:** Commit your changes with a descriptive commit message:

   ```sh
   git commit -a m 'Add some feature'
   ```

6. **Push to your Branch:** Push your changes to the branch you created on your fork:

   ```sh
   git push origin my-new-feature
   ```

7. **Submit a Pull Request:** Go to the Pull Requests tab of the original repository and click on "New Pull Request." Provide a clear title and description for your changes, and submit the pull request.

Thank you for contributing to this project!

## Authors

- **Santosh Kunwar** - [codersantosh](https://twitter.com/codersantosh)

See also the list of [contributors](https://github.com/codersantosh/wp-react-plugin-boilerplate/graphs/contributors) who participated in this project.

## License & Attribution

- GPLv2 or later © [Santosh Kunwar](https://twitter.com/codersantosh).

I would like to thanks all the React.js team, Gutenberg Team, WordPress Core Contributors, WordPress Plugin Boilerplate teams and My friends to motivate me to create the starter plugin.

## About Me

<strong>I just love WordPress more…</strong>

- [![CoderSantosh on Twitter](https://img.shields.io/twitter/follow/codersantosh.svg)](https://twitter.com/codersantosh/)
- <a href="https://profiles.wordpress.org/codersantosh/" target="_blank"><img src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png" width="50" height="50" />WordPress Profile</a>

### Recent Projects

<a href="https://wordpress.org/plugins/gutentor/" target="_blank"><img src="https://ps.w.org/gutentor/assets/icon.svg" width="50" height="50" />Gutentor - WordPress Page Building Blocks - Page Builder for Gutenberg</a>
