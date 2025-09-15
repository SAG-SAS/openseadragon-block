/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { useEffect, useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import OpenSeadragon from 'openseadragon';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {

	const osdRef = useRef(null);

	const featuredImage = useSelect((select) => {
		const imageId = select('core/editor').getEditedPostAttribute('featured_media');
		if (!imageId) return null;
		return select('core').getMedia(imageId);
	}, []);

	useEffect(() => {
		if (featuredImage && osdRef.current) {
			const viewer = OpenSeadragon({
				element: osdRef.current,
				prefixUrl: `${window.wp?.blockLibrary?.url || ""}../static/images/`,
				tileSources: {
					type: 'image',
					url: featuredImage.source_url,
				},
			});

			return () => {
				viewer.destroy();
			};
		}
	}, [featuredImage]);

	const blockProps = useBlockProps({
		style: { width: '100%', height: '500px', background: '#eee' },
	});

	return (
		<div {...blockProps}>
			<div ref={osdRef} style={{ width: '100%', height: '100%' }} />
			{!featuredImage && <p>No featured image set</p>}
		</div>
	);
}
