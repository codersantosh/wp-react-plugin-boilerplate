WP React Plugin Boilerplate is a starter WordPress plugin to develop WordPress Plugin via React and Rest API.

# WP React Plugin Boilerplate

> `WP React Plugin Boilerplate` is a starter WordPress plugin to develop WordPress Plugin via React and Rest API. The Plugin Settings was added by React, Gutenberg Components and Rest API

## Description

This boilerplate provides a foundation for building modern WordPress plugins.

## Table of Contents

- [WP React Plugin Boilerplate](#wp-react-plugin-boilerplate)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [1. Installation](#1-installation)
    - [2. Development Setup](#2-development-setup)
    - [3. Renaming the Plugin](#3-renaming-the-plugin)
    - [4. Activate the Plugin](#4-activate-the-plugin)
    - [5. Start Customization and Coding](#5-start-customization-and-coding)
  - [Folder Information](#folder-information)
  - [Changelog](#changelog)
  - [Contributing](#contributing)
  - [Authors](#authors)
  - [Recommendations](#recommendations)
  - [License & Attribution](#license--attribution)

## Features

- **Easy Renaming:** Simplify renaming of plugin files, constants, variables, classes, text-domain, and functions.

  - Edit the `initial-rename.js` file in the .bin directory.
  - Adjust the naming strings.
  - Run `npm run initial-rename`

- **Language File Creation:** Generates `.pot` files from both JavaScript and PHP code.

- **Deployment Command:**

  - Run `npm run deploy` to create a production-ready deploy folder.
  - Rename and upload this folder to your WordPress site or WordPress.org after thorough testing.

- **Development Environment Setup:**

  - Includes `npm run start` command to initialize React JS development environment with a live development server.

- **Production Build:**

  - Provides `npm run build` command to generate optimized production files for the plugin.

- **REST API Integration:**

  - Utilizes WordPress REST API for backend interactions, found in includes/api directory.

- **[Utilizes Atrc (atrc) - Atomic React Components](https://github.com/codersantosh/atrc):**

  - ATRC, or Atomic React Components, is integrated into the WP React Plugin Boilerplate to provide a structured approach to building React components.
  - ATRC uses most of the features from core Gutenberg, enhancing compatibility and leveraging established Gutenberg functionality.
  - It promotes component reusability and maintainability by breaking down UI elements into smaller, atomic components such as molecules, controls, and templates.
  - It facilitates easy handling of WordPress API and data related to settings, posts, or any other data and API.

- **[Utilizes Atomic CSS](https://github.com/codersantosh/atomic-css):**

  - Atomic CSS is incorporated into the WP React Plugin Boilerplate to streamline the styling process.

- **[Atomic React Components](https://github.com/codersantosh/atrc) `atrc-prefix-atrc` text domain replacement command:**

  - Provides `npm run replaceAtrc` command to replace `atrc-prefix-atrc` text domain with your plugin's text domain.

- **Customization Encouraged:**

  - Since the WP React Plugin Boilerplate is designed to be highly customizable, developers are encouraged to modify and adapt both ATRC and Atomic CSS according to their specific project requirements.
  - Developers are encouraged to customize any aspect of the plugin's structure, styling, or functionality according to their needs. They can remove existing libraries and/or integrate additional React, CSS, or JavaScript libraries, including Gutenberg libraries, and modify them based on their preferences and expertise. It's important to view this plugin as a starting point only, allowing developers to tailor it precisely to their requirements and optimize its performance and user experience.

## Prerequisites

Before getting started with the WP React Plugin Boilerplate, ensure you have the following:

- **WordPress Installation:** The plugin requires a WordPress installation set up on your local machine.

- **Node.js and npm:** Make sure Node.js (which includes npm, the Node Package Manager) is installed on your development environment. You can download and install Node.js from [nodejs.org](https://nodejs.org/en/download/).

- **Code Editor:** Use your preferred code editor (e.g., Visual Studio Code, Sublime Text, Atom) to customize and develop the plugin.

- **Basic Understanding of React:** Familiarity with React.js is recommended as the plugin utilizes React components for its frontend development.

- **Basic Understanding of WordPress Coding:** Knowledge of WordPress concepts such as PHP coding, hooks, APIs (like REST API), and WordPress functions.

- **Command Line Interface (CLI):** Comfortable using the command line interface (CLI) for running npm commands and managing the plugin development workflow.

- **Git (Optional):** If you plan to clone the plugin repository or manage version control, Git should be installed on your system.

## GETTING STARTED

### 1. Installation

- Clone the repository to /wp-content/plugins/:

  ```sh
  git clone https://github.com/codersantosh/wp-react-plugin-boilerplate.git
  ```

  Or download and upload the plugin files to /wp-content/plugins/wp-react-plugin-boilerplate.

- Rename the folder name `wp-react-plugin-boilerplate` to your plugin folder.

### 2. Development Setup

<details>
 <summary> Don't have <code>Node.js</code> + <code>npm</code> installed? You have to install them first. (CLICK TO EXPAND)</summary>

Go to the Node's site [download + install](https://nodejs.org/en/download/) Node on your system. This will install both `Node.js` and `npm`, i.e., node package manager — the command line interface of Node.js.

You can verify the installation by opening your terminal app and typing...

```sh
node -v
# Results into 7.19.1 — or installed version.

npm -v
# Results into v14.15.1 — or installed version.
```

</details>

Follow the following steps to add your functionalities to the plugin:

1. Navigate to plugin files `/wp-content/plugins/your-renamed-plugin-folder`, and open the terminal app.
2. Run the `npm install` command to install npm dependencies, and wait sometimes to complete it.

### 3. Renaming the Plugin

You need to rename the plugin folder and file names. Additionally, you should update the constants, variables, classes, text-domain, and functions within the plugin to align with your plugin name. For instance, if your plugin is named `react-settings`, then:

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

Now Run `npm run initial-rename`

#### ii. OR Manual rename

- rename the folder from `wp-react-plugin-boilerplate` to `react-settings`
- rename all files from `wp-react-plugin-boilerplate` to `react-settings` PHP, JS and CSS
- change `wp_react_plugin_boilerplate` to `react_settings`
- change `wp-react-plugin-boilerplate` to `react-settings`
- change `Wp_React_Plugin_Boilerplate` to `React_Settings`
- change `WP_REACT_PLUGIN_BOILERPLATE` to `REACT_SETTINGS`

### 4. Rename the language file:

In the plugin folder, open `package.json` and modify the makepot command on line 17. Change `wp-react-plugin-boilerplate.pot` to `react-settings.pot` ( your plugin ).

### 5. Activate the Plugin:

It's safe to activate the plugin at this point. Activate the plugin through the `Plugins` screen in WordPress

Go to WordPress Dashboard => React Settings and View the Default Landing Page and Settings of the Plugin.

### 6. Start Customization and Coding

Since this is now your own plugin, feel free to customize using your preferred code editor and thoroughly test everything. You have the freedom to add, edit, remove, or update any files, folders, or code within the plugin. However, it's important to be knowledgeable about the changes you make. Follow these steps to begin your development:

1. Navigate to plugin files `/wp-content/plugins/your-renamed-plugin-folder`,and open a terminal app.
2. Run the `npm run start` command to initialize the development of React JS. This command sets up a development server, allowing you to see changes in real time. Use this in the development environment.
3. Once development is complete, run the `npm run build` command to finalize the development and prepare the plugin for production. This command creates production files. After building, move the production files to the appropriate production directory.
4. Run the `npm run deploy` command directly to create a production-ready deploy folder. This folder contains all the necessary files for deploying your plugin to a live WordPress site, skipping the need for `npm run build` beforehand.

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
|  ├── make-string.js
|  └── replace-atrc.js
|
├── admin
|  ├── class-admin.php
|  └── index.php
|
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

### 2.0.1

- Added: Command to replace the text domain of atrc.
- Updated: readme file.

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

## Recommendations

- [ATOMIC WP CUSTOM TABLE AND QUERY](https://github.com/codersantosh/atomic-wp-custom-table-and-query)
- [Atrc (atrc) - Atomic React Components](https://www.npmjs.com/package/atrc)
- [Atomic CSS](https://github.com/codersantosh/atomic-css)

## License & Attribution

- GPLv2 or later © [Santosh Kunwar](https://twitter.com/codersantosh).

I would like to thank all the React.js team, Gutenberg Team, WordPress Core Contributors, WordPress Plugin Boilerplate teams and My friends for motivating me to create the starter plugin.

## About Me

<strong>I just love WordPress more…</strong>

- [![CoderSantosh on Twitter](https://img.shields.io/twitter/follow/codersantosh.svg)](https://twitter.com/codersantosh/)
- <a href="https://profiles.wordpress.org/codersantosh/" target="_blank"><img src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png" width="50" height="50" />WordPress Profile</a>

### Recent Projects

<a href="https://wordpress.org/plugins/gutentor/" target="_blank"><img src="https://ps.w.org/gutentor/assets/icon.svg" width="50" height="50" />Gutentor - WordPress Page Building Blocks - Page Builder for Gutenberg</a>
