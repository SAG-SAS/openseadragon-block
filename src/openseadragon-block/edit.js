/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import OpenSeadragon from 'openseadragon';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */


export default function Edit({ attributes, setAttributes }) {
	const osdRef = useRef(null);

	const featuredImage = useSelect((select) => {
		const imageId = select('core/editor').getEditedPostAttribute('featured_media');
		if (!imageId) return null;
		return select('core').getMedia(imageId);
	}, []);

	useEffect(() => {
		if (featuredImage && osdRef.current) {
			setAttributes({ imageUrl: featuredImage.source_url });

			const viewer = OpenSeadragon({
				element: osdRef.current,
				prefixUrl:
					MyOSDBlock.imagesUrl,
				tileSources: {
					type: "image",
					url: featuredImage.source_url,
				},
			});

			return () => viewer.destroy();
		}
	}, [featuredImage]);

	return (
		<div {...useBlockProps({ style: { height: '400px' } })}>
			<div ref={osdRef} style={{ width: '100%', height: '100%' }} />
			{!featuredImage && <p>No featured image set</p>}
		</div>
	);
}

