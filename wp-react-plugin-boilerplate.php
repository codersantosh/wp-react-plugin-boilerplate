<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://www.acmeit.org/
 * @since             1.0.0
 * @package           Wp_React_Plugin_Boilerplate
 *
 * @wordpress-plugin
 * Plugin Name:       WP React Plugin Boilerplate - WordPress Setting via React and Rest API
 * Plugin URI:        https://www.addonspress.com/wordpress-starter-plugins/wp-react-plugin-boilerplate
 * Description:       WordPress Setting via React and Rest API.
 * Version:           1.0.0
 * Author:            codersantosh
 * Author URI:        https://www.acmeit.org/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wp-react-plugin-boilerplate
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Current plugin path.
 * Current plugin url.
 * Current plugin version.
 * Current plugin name.
 * Current plugin option name.
 */
define( 'WP_REACT_PLUGIN_BOILERPLATE_PATH', plugin_dir_path( __FILE__ ) );
define( 'WP_REACT_PLUGIN_BOILERPLATE_URL', plugin_dir_url( __FILE__ ) );
define( 'WP_REACT_PLUGIN_BOILERPLATE_VERSION', '1.0.0' );
define( 'WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME', 'wp-react-plugin-boilerplate' );
define( 'WP_REACT_PLUGIN_BOILERPLATE_OPTION_NAME', 'wp-react-plugin-boilerplate' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-activator.php
 */
function wp_react_plugin_boilerplate_activate() {
	require_once WP_REACT_PLUGIN_BOILERPLATE_PATH . 'includes/class-activator.php';
	Wp_React_Plugin_Boilerplate_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-deactivator
 */
function wp_react_plugin_boilerplate_deactivate() {
	require_once WP_REACT_PLUGIN_BOILERPLATE_PATH . 'includes/class-deactivator';
	Wp_React_Plugin_Boilerplate_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'wp_react_plugin_boilerplate_activate' );
register_deactivation_hook( __FILE__, 'wp_react_plugin_boilerplate_deactivate' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require WP_REACT_PLUGIN_BOILERPLATE_PATH . 'includes/main.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_wp_react_plugin_boilerplate() {

	$plugin = new Wp_React_Plugin_Boilerplate();
	$plugin->run();
}
run_wp_react_plugin_boilerplate();
