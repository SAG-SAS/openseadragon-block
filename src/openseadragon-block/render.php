<?php
$post_id = get_the_ID() ?: 0;

    if ( $post_id ) {
        $image_url = $attributes['imageUrl'] ?? get_the_post_thumbnail_url( $post_id, 'full' );
    } else {
        // FSE / template editor fallback
        $image_url = plugins_url( 'images/placeholder.jpg', __FILE__ );
    }

?>
<div <?php echo get_block_wrapper_attributes() ?>>
	<div className="osd-container" style="width: 100%, height: 500px" data-image-url="<?php echo $image_url ?>"></div>
</div>

