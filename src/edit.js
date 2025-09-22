import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaPlaceholder,
	InspectorControls
} from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { imageUrl, useFeatured, height } = attributes;
	const blockProps = useBlockProps();

	const onSelectImage = (media) => {
		if (media?.url) {
			setAttributes({ imageUrl: media.url });
		}
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Viewer Settings', 'openseadragon-block')}>
					<ToggleControl
						label={__('Use Featured Image', 'openseadragon-block')}
						checked={useFeatured}
						onChange={(value) => setAttributes({ useFeatured: value })}
					/>
					<TextControl
						label={__('Height', 'openseadragon-block')}
						value={height}
						onChange={(value) => setAttributes({ height: value })}
						help={__('Any valid CSS height value (e.g., 400px, 50vh, 100%).', 'openseadragon-block')}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div
					style={{
						height: height || '400px',
						background: '#eee',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					{useFeatured ? (
						<p style={{ color: '#666' }}>
							{__('Featured image will be shown here', 'openseadragon-block')}
						</p>
					) : imageUrl ? (
						<img
							src={imageUrl}
							alt={__('Selected image', 'openseadragon-block')}
							style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
						/>
					) : (
						<MediaPlaceholder
							icon="format-image"
							labels={{
								title: __('Openseadragon Image', 'openseadragon-block'),
								instructions: __('Select an image.', 'openseadragon-block'),
							}}
							onSelect={onSelectImage}
							accept="image/*"
							allowedTypes={['image']}
						/>
					)}
				</div>
			</div>
		</>
	);
}
