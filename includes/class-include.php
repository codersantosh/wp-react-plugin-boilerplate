<?php // phpcs:ignore Class file names should be based on the class name with "class-" prepended.
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The common bothend functionality of the plugin.
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://github.com/codersantosh
 * @since      1.0.0
 *
 * @package    Wp_React_Plugin_Boilerplate
 * @subpackage Wp_React_Plugin_Boilerplate/includes
 */

/**
 * The common bothend functionality of the plugin.
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @since      1.0.0
 * @package    Wp_React_Plugin_Boilerplate
 * @subpackage Wp_React_Plugin_Boilerplate/includes
 * @author     codersantosh <codersantosh@gmail.com>
 */
class Wp_React_Plugin_Boilerplate_Include {

	/**
	 * Gets an instance of this object.
	 * Prevents duplicate instances which avoid artefacts and improves performance.
	 *
	 * @static
	 * @access public
	 * @return object
	 * @since 1.0.0
	 */
	public static function get_instance() {
		// Store the instance locally to avoid private static replication.
		static $instance = null;

		// Only run these methods if they haven't been ran previously.
		if ( null === $instance ) {
			$instance = new self();
		}

		// Always return the instance.
		return $instance;
	}
	/**
	 * Get the settings with caching.
	 *
	 * @access public
	 * @param string $key optional meta key.
	 * @return array|null
	 */
	public function get_settings( $key = '' ) {
		static $cache = null;
		if ( ! $cache ) {
			$cache = wp_react_plugin_boilerplate_get_options();
		}
		if ( ! empty( $key ) ) {
			return isset( $cache[ $key ] ) ? $cache[ $key ] : false;
		}

		return $cache;
	}

	/**
	 * Get options related to white label.
	 *
	 * @access public
	 * @return array|null
	 */
	public function get_white_label() {
		static $cache = null;
		if ( ! $cache ) {
			$cache = wp_react_plugin_boilerplate_get_white_label();
		}

		return $cache;
	}

	/**
	 * Register scripts and styles
	 *
	 * @since    1.0.0
	 * @access   public
	 * @return void
	 */
	public function register_scripts_and_styles() {
		/* Atomic css */
		wp_register_style( 'atomic', WP_REACT_PLUGIN_BOILERPLATE_URL . 'assets/library/atomic-css/atomic.min.css', array(), WP_REACT_PLUGIN_BOILERPLATE_VERSION );
	}
}

if ( ! function_exists( 'wp_react_plugin_boilerplate_include' ) ) {
	/**
	 * Return instance of  Wp_React_Plugin_Boilerplate_Include class
	 *
	 * @since 1.0.0
	 *
	 * @return Wp_React_Plugin_Boilerplate_Include
	 */
	function wp_react_plugin_boilerplate_include() {//phpcs:ignore
		return Wp_React_Plugin_Boilerplate_Include::get_instance();
	}
}
