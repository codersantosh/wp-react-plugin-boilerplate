<?php // phpcs:ignore Class file names should be based on the class name with "class-" prepended.
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://www.acmeit.org/
 * @since      1.0.0
 *
 * @package    Wp_React_Plugin_Boilerplate
 * @subpackage Wp_React_Plugin_Boilerplate/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Wp_React_Plugin_Boilerplate
 * @subpackage Wp_React_Plugin_Boilerplate/public
 * @author     codersantosh <codersantosh@gmail.com>
 */
class Wp_React_Plugin_Boilerplate_Public {

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
	 * Register the JavaScript and stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_public_resources() {
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
		/* Atomic CSS */
		wp_enqueue_style( 'atomic' );
		wp_style_add_data( 'atomic', 'rtl', 'replace' );

		$version = WP_REACT_PLUGIN_BOILERPLATE_VERSION;

		wp_enqueue_style( WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME, WP_REACT_PLUGIN_BOILERPLATE_URL . 'build/public/index.css', array(), $version );
		wp_style_add_data( WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME, 'rtl', 'replace' );

		/*Scripts dependency files*/
		$deps_file = WP_REACT_PLUGIN_BOILERPLATE_PATH . 'build/public/index.asset.php';

		/*Fallback dependency array*/
		$dependency = array();

		/*Set dependency and version*/
		if ( file_exists( $deps_file ) ) {
			$deps_file  = require $deps_file;
			$dependency = $deps_file['dependencies'];
			$version    = $deps_file['version'];
		}

		wp_enqueue_script( WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME, WP_REACT_PLUGIN_BOILERPLATE_URL . 'build/public/index.js', $dependency, $version, true );
		wp_set_script_translations( WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME, WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME );

		$localize = apply_filters(
			'wp_react_plugin_boilerplate_public_localize',
			array(
				'WP_REACT_PLUGIN_BOILERPLATE_URL' => WP_REACT_PLUGIN_BOILERPLATE_URL,
				'site_url'                        => esc_url( home_url() ),
				'rest_url'                        => get_rest_url(),
				'nonce'                           => wp_create_nonce( 'wp_rest' ),
			)
		);

		wp_add_inline_script(
			WP_REACT_PLUGIN_BOILERPLATE_PLUGIN_NAME,
			sprintf(
				"var WpReactPluginBoilerplateLocalize = JSON.parse( decodeURIComponent( '%s' ) );",
				rawurlencode(
					wp_json_encode(
						$localize
					)
				),
			),
			'before'
		);
	}
}

if ( ! function_exists( 'wp_react_plugin_boilerplate_public' ) ) {
	/**
	 * Return instance of  Wp_React_Plugin_Boilerplate_Public class
	 *
	 * @since 1.0.0
	 *
	 * @return Wp_React_Plugin_Boilerplate_Public
	 */
	function wp_react_plugin_boilerplate_public() {//phpcs:ignore
		return Wp_React_Plugin_Boilerplate_Public::get_instance();
	}
}
