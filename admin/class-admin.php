<?php // phpcs:ignore Class file names should be based on the class name with "class-" prepended.
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://www.acmeit.org/
 * @since      1.0.0
 *
 * @package    Wp_React_Plugin_Boilerplate
 * @subpackage Wp_React_Plugin_Boilerplate/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Wp_React_Plugin_Boilerplate
 * @subpackage Wp_React_Plugin_Boilerplate/admin
 * @author     codersantosh <codersantosh@gmail.com>
 */
class Wp_React_Plugin_Boilerplate_Admin {

	/**
	 * Menu info.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      array    $menu_info    Admin menu information.
	 */
	private $menu_info;

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
	 * Add Admin Page Menu page.
	 *
	 * @access public
	 *
	 * @since    1.0.0
	 */
	public function add_admin_menu() {

		$white_label     = wp_react_plugin_boilerplate_include()->get_white_label();
		$this->menu_info = $white_label['admin_menu_page'];

		add_menu_page(
			$this->menu_info['page_title'],
			$this->menu_info['menu_title'],
			'manage_options',
			$this->menu_info['menu_slug'],
			array( $this, 'add_setting_root_div' ),
			$this->menu_info['icon_url'],
			$this->menu_info['position'],
		);
	}

	/**
	 * Add Root Div For React.
	 *
	 * @access public
	 *
	 * @since    1.0.0
	 */
	public function add_setting_root_div() {
		echo '<div id="' . esc_attr( WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME ) . '"></div>';
	}

	/**
	 * Register the CSS/JavaScript Resources for the admin area.
	 *
	 * @access public
	 * Use Condition to Load it Only When it is Necessary
	 *
	 * @since    1.0.0
	 */
	public function enqueue_resources() {

		$screen              = get_current_screen();
		$admin_scripts_bases = array( 'toplevel_page_' . WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME );
		if ( ! ( isset( $screen->base ) && in_array( $screen->base, $admin_scripts_bases, true ) ) ) {
			return;
		}

		/* Atomic CSS */
		wp_enqueue_style( 'atomic' );

		/*Scripts dependency files*/
		$deps_file = WP_REACT_PLUGIN_BOILERPLATE_PATH . 'build/admin/admin.asset.php';

		/*Fallback dependency array*/
		$dependency = array();
		$version    = WP_REACT_PLUGIN_BOILERPLATE_VERSION;

		/*Set dependency and version*/
		if ( file_exists( $deps_file ) ) {
			$deps_file  = require $deps_file;
			$dependency = $deps_file['dependencies'];
			$version    = $deps_file['version'];
		}

		wp_enqueue_script( WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME, WP_REACT_PLUGIN_BOILERPLATE_URL . 'build/admin/admin.js', $dependency, $version, true );

		wp_enqueue_style( 'google-fonts-open-sans', WP_REACT_PLUGIN_BOILERPLATE_URL . 'assets/library/fonts/open-sans.css', '', $version );
		wp_enqueue_style( WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME, WP_REACT_PLUGIN_BOILERPLATE_URL . 'build/admin/admin.css', array( 'wp-components' ), $version );

		/* Localize */
		$localize = apply_filters(
			'wp_react_plugin_boilerplate_admin_localize',
			array(
				'version'     => $version,
				'root_id'     => WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME,
				'nonce'       => wp_create_nonce( 'wp_rest' ),
				'store'       => WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME,
				'rest_url'    => get_rest_url(),
				'white_label' => wp_react_plugin_boilerplate_include()->get_white_label(),
			)
		);

		wp_set_script_translations( WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME, WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME );
		wp_localize_script( WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME, 'WpReactPluginBoilerplateLocalize', $localize );
	}

	/**
	 * Get settings schema
	 * Schema: http://json-schema.org/draft-04/schema#
	 *
	 * Add your own settings fields here
	 *
	 * @access public
	 *
	 * @since 1.0.0
	 *
	 * @return array settings schema for this plugin.
	 */
	public function get_settings_schema() {
		$setting_properties = apply_filters(
			'wp_react_plugin_boilerplate_options_properties',
			array(
				'type'       => 'object',
				'properties' => array(
					/*Settings -> Settings1*/
					'setting1'  => array(
						'type' => 'string',
					),
					'setting2'  => array(
						'type' => 'string',
					),
					/*Settings -> Settings2*/
					'setting3'  => array(
						'type' => 'boolean',
					),
					'setting4'  => array(
						'type' => 'boolean',
					),
					'setting5'  => array(
						'type'              => 'string',
						'sanitize_callback' => 'sanitize_key',
					),
					/*Settings -> Advanced*/
					'deleteAll' => array(
						'type' => 'boolean',
					),
				),
			),
		);

		return array(
			'type'       => 'object',
			'properties' => $setting_properties,
		);
	}

	/**
	 * Register settings.
	 * Common callback function of rest_api_init and admin_init
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function register_settings() {
		$defaults = wp_react_plugin_boilerplate_default_options();

		register_setting(
			'wp_react_plugin_boilerplate_settings_group',
			WP_REACT_PLUGIN_BOILERPLATE_OPTION_NAME,
			array(
				'type'         => 'object',
				'default'      => $defaults,
				'show_in_rest' => array(
					'schema' => $this->get_settings_schema(),
				),
			)
		);
	}
}

if ( ! function_exists( 'wp_react_plugin_boilerplate_admin' ) ) {
	/**
	 * Return instance of  Wp_React_Plugin_Boilerplate_Admin class
	 *
	 * @since 1.0.0
	 *
	 * @return Wp_React_Plugin_Boilerplate_Admin
	 */
	function wp_react_plugin_boilerplate_admin() {//phpcs:ignore
		return Wp_React_Plugin_Boilerplate_Admin::get_instance();
	}
}
