<?php
/**
 * Plugin Name:       Openseadragon Block
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       openseadragon-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_openseadragon__block_block_init() {
	register_block_type( __DIR__ . '/build/openseadragon-block' );
}
add_action( 'init', 'create_block_openseadragon__block_block_init' );

// function openseadragon_enqueue_view_assets() {
//     wp_enqueue_script(
//         'openseadragon-view',
//         plugins_url( 'build/openseadragon-block/view.js', __FILE__ ),
//         array(),
//         filemtime( plugin_dir_path( __FILE__ ) . 'build/openseadragon-block/view.js' ),
//         true
//     );
//
//     // Pass PHP values into JS
//     wp_localize_script( 'openseadragon-view', 'OSDBlock', array(
//         'imagesUrl' => plugins_url( 'src/openseadragon-block/osd-icons/', __FILE__ ),
//         'defaultImageUrl' => get_the_post_thumbnail_url( null, 'full' ), // Featured image fallback
//     ) );
// }
// add_action( 'enqueue_block_assets', 'openseadragon_enqueue_view_assets' );
//
// function openseadragon_enqueue_editor_assets() {
//     wp_enqueue_script(
//         'openseadragon-editor',
//         plugins_url( 'src/openseadragon-block/edit.js', __FILE__ ), // path to your edit.js / index.js
//         array( 'wp-blocks', 'wp-element', 'wp-block-editor' ),
//         filemtime( plugin_dir_path( __FILE__ ) . 'src/openseadragon-block/edit.js' ),
//         true
//     );
//
//     wp_enqueue_style(
//         'openseadragon-editor-style',
//         plugins_url( 'index.css', __FILE__ ),
//         array(),
//         filemtime( plugin_dir_path( __FILE__ ) . 'index.css' )
//     );
// }
// add_action( 'enqueue_block_editor_assets', 'openseadragon_enqueue_editor_assets' );
