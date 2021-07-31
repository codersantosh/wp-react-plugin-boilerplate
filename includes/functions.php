<?php
/**
 * Get the Plugin Default Options.
 *
 * @since WP React Setting 1.0.0
 *
 * @param null
 *
 * @return array Default Options
 *
 * @author     codersantosh <codersantosh@gmail.com>
 *
 */
if ( ! function_exists( 'wp_react_plugin_boilerplate_default_options' ) ) :
	function wp_react_plugin_boilerplate_default_options() {
		$default_theme_options = array(
			'setting_1' => esc_html__( 'Default Setting 1', 'wp-react-plugin-boilerplate' ),
			'setting_2' => esc_html__( 'Default Setting 2', 'wp-react-plugin-boilerplate' ),
			'setting_3' => false,
			'setting_4' => true,
			'setting_5' => 'option-1',
		);

		return apply_filters( 'wp_react_plugin_boilerplate_default_options', $default_theme_options );
	}
endif;

/**
 * Get the Plugin Saved Options.
 *
 * @since WP React Setting 1.0.0
 *
 * @param string $key optional option key
 *
 * @return mixed All Options Array Or Options Value
 *
 * @author     codersantosh <codersantosh@gmail.com>
 *
 */

if ( ! function_exists( 'wp_react_plugin_boilerplate_get_options' ) ) :
	function wp_react_plugin_boilerplate_get_options( $key = '' ) {
		$options         = get_option( 'wp_react_plugin_boilerplate_options' );
		$default_options = wp_react_plugin_boilerplate_default_options();

		if ( ! empty( $key ) ) {
			if ( isset( $options[ $key ] ) ) {
				return $options[ $key ];
			}
			return isset( $default_options[ $key ] ) ? $default_options[ $key ] : false;
		} else {
			if ( ! is_array( $options ) ) {
				$options = array();
			}
			return array_merge( $default_options, $options );
		}
	}
endif;

/**
 * Delete the Plugin Saved Options.
 *
 * @since WP React Setting 1.0.0
 *
 * @param string $key optional option key
 *
 * @return boolean after delete or update option
 *
 * @author     codersantosh <codersantosh@gmail.com>
 *
 */
if ( ! function_exists( 'wp_react_plugin_boilerplate_delete_options' ) ) :

	function wp_react_plugin_boilerplate_delete_options( $key = '' ) {
		if ( ! empty( $key ) ) {
			$options = wp_react_plugin_boilerplate_get_options();
			if ( isset( $options[ $key ] ) ) {
				unset( $options[ $key ] );
				return update_option( 'wp_react_plugin_boilerplate_options', $options );
			}
		} else {
			return delete_option( 'wp_react_plugin_boilerplate_options' );
		}
	}
endif;

/**
 * Set/Saved the Plugin Options to Database.
 *
 * @since WP React Setting 1.0.0
 *
 * @param array $settings all options of the plugin to be saved.
 *
 * @return boolean after update option
 *
 * @author     codersantosh <codersantosh@gmail.com>
 *
 */
if ( ! function_exists( 'wp_react_plugin_boilerplate_set_options' ) ) :
	function wp_react_plugin_boilerplate_set_options( $settings ) {
		$setting_keys = array_keys( wp_react_plugin_boilerplate_default_options() );
		$options      = array();
		foreach ( $settings as $key => $value ) {
			if ( in_array( $key, $setting_keys ) ) {
				if (
					'setting_1' == $key
				) {
					$value = sanitize_text_field( $value );
				} elseif (
					'setting_2' == $key
				) {
					$value = sanitize_text_field( $value );
				} elseif (
					'setting_3' == $key
				) {
                    $value =  (bool) $value;
				} elseif (
					'setting_4' == $key
				) {
                    $value =  (bool) $value;
                } else {
					$value = sanitize_key( $value );
				}
				$options[ $key ] = $value;
			}
		}
		update_option( 'wp_react_plugin_boilerplate_options', $options );
	}
endif;
