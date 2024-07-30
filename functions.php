<?php 


function load_admin_scripts( $admin_page ){

    $asset_file = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

    if ( ! file_exists( $asset_file ) ) {
        return;
    }

    $asset = include $asset_file;
    
    wp_enqueue_style( 'wp_react_admin', get_template_directory_uri() . '/build/index.css' );
    wp_enqueue_script( 'wp_react_admin', get_template_directory_uri() . '/build/index.js', $asset['dependencies'], $asset['version'], true );
}
add_action( 'wp_enqueue_scripts', 'load_admin_scripts' );

add_action('after_setup_theme', function(){
    register_nav_menus([
        'main-menu' => esc_html__('Main Menu', 'wp-react'),
    ]);
});


$menu = wp_get_nav_menu_object( 'main-menu' );
