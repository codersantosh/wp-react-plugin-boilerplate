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
     * The Rest route namespace.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $namespace    The Rest route namespace.
     */
    private $namespace = 'wp-react-plugin-boilerplate-setting-api/';

    /**
     * The rest version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $rest_version    The rest version of this plugin..
     */
    private $rest_version = 'v1';

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

    /**
     * Register the CSS/JavaScript Resources for the admin area.
     *
     * Use Condition to Load it Only When it is Necessary
     *
     * @since    1.0.0
     */
    public function enqueue_resources() {

        /**
         * This function is provided for demonstration purposes only.
         *
         * An instance of this class should be passed to the run() function
         * defined in Wp_React_Plugin_Boilerplate_Loader as all of the hooks are defined
         * in that particular class.
         *
         * The Wp_React_Plugin_Boilerplate_Loader will then create the relationship
         * between the defined hooks and the functions defined in this
         * class.
         */

        $screen              = get_current_screen();
        $admin_scripts_bases = array( 'toplevel_page_' . $this->plugin_name );
        if ( ! ( isset( $screen->base ) && in_array( $screen->base, $admin_scripts_bases ) ) ) {
            return;
        }
        $dependency = array( 'lodash', 'wp-api-fetch', 'wp-i18n', 'wp-components', 'wp-element');

        wp_enqueue_script( $this->plugin_name, WP_REACT_PLUGIN_BOILERPLATE_URL . 'build/index.js', $dependency, $this->version, true );

        wp_enqueue_style( $this->plugin_name, WP_REACT_PLUGIN_BOILERPLATE_URL . 'build/style-index.css', array('wp-components'), $this->version );

        $localize = array(
            'version' => $this->version,
            'root_id' => $this->plugin_name,
            'rest'    => array(
                'namespace' => $this->namespace,
                'version'   => $this->rest_version,
            ),
        );
        wp_set_script_translations( $this->plugin_name, $this->plugin_name );
        wp_localize_script( $this->plugin_name, 'wpReactPluginBoilerplateBuild', $localize );
    }

    /**
     * Register REST API route.
     *
     * @since    1.0.0
     */
    public function api_init() {
        $namespace = $this->namespace . $this->rest_version;

        register_rest_route(
            $namespace,
            '/set_settings',
            array(
                array(
                    'methods'             => \WP_REST_Server::EDITABLE,
                    'callback'            => array( $this, 'set_settings' ),
                    'permission_callback' => function () {
                        return current_user_can( 'manage_options' );
                    },
                ),
            )
        );

        register_rest_route(
            $namespace,
            '/get_settings',
            array(
                array(
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_settings' ),
                    'permission_callback' => function () {
                        return current_user_can( 'manage_options' );
                    },
                ),
            )
        );
    }

    /**
     * Set Plugin Settings.
     *
     * @since 1.0.0
     *
     * @param WP_REST_Request $request Full details about the request.
     *
     * @return array|WP_REST_Response Plugin Settings.
     */
    public function set_settings( \WP_REST_Request $request ) {
        $params = $request->get_params();
        if ( isset( $params['settings'] ) ) {
            wp_react_plugin_boilerplate_delete_options();
            wp_react_plugin_boilerplate_set_options( $params['settings'] );
        }
        return rest_ensure_response( wp_react_plugin_boilerplate_get_options() );

    }

    /**
     * Get settings
     *
     * @since 1.0.0
     *
     * @param WP_REST_Request $request Full details about the request.
     *
     * @return array|WP_REST_Response Plugin Settings.
     */
    public function get_settings( \WP_REST_Request $request ) {
        return rest_ensure_response( wp_react_plugin_boilerplate_get_options() );
    }
}
