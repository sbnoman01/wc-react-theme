<?php 


function load_admin_scripts( $admin_page ){

    $asset_file = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

    if ( ! file_exists( $asset_file ) ) {
        return;
    }

    $asset = include $asset_file;
    
    wp_enqueue_style( 'wp_react_admin', get_template_directory_uri() . '/build/index.css' );
    if( !\Elementor\Plugin::$instance->preview->is_preview_mode() ){
        wp_enqueue_script( 'wp_react_admin', get_template_directory_uri() . '/build/index.js', $asset['dependencies'], $asset['version'], true );
    }
}
add_action( 'wp_enqueue_scripts', 'load_admin_scripts' );

add_action('after_setup_theme', function(){
    register_nav_menus([
        'main-menu' => esc_html__('Main Menu', 'wp-react'),
    ]);
});


$menu = wp_get_nav_menu_object( 'main-menu' );


function at_rest_init()
{
    // route url: domain.com/wp-json/$namespace/$route
    $namespace = 'wp-react/v1';
    $route     = 'settings';

    register_rest_route($namespace, $route, array(
        'methods'   => 'GET',
        'callback'  => 'wpreact_settings'
    ));
}

add_action('rest_api_init', 'at_rest_init');

function wpreact_settings(){

    $settings = [];

    $settings['elementor_edit'] = \Elementor\Plugin::$instance->preview->is_preview_mode();

    return $settings;
}