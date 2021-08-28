<?php

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
	 * The ID of this plugin.
     * Used on slug of plugin menu.
     * Used on Root Div ID for React too.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $plugin_name       The name of this plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;

	}

    /**
     * Add Admin Page Menu page.
     *
     * @since    1.0.0
     */
    public function add_admin_menu() {

        add_menu_page(
            esc_html__( 'React Setting', 'wp-react-plugin-boilerplate' ),
            esc_html__( 'React Setting', 'wp-react-plugin-boilerplate' ),
            'manage_options',
            $this->plugin_name,
            array( $this, 'add_setting_root_div' )
        );
    }

    /**
     * Add Root Div For React.
     *
     * @since    1.0.0
     */
    public function add_setting_root_div() {
        echo '<div id="' . $this->plugin_name . '"></div>';
    }
}
