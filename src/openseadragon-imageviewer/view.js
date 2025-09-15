/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

import OpenSeadragon from "openseadragon";

document.addEventListener("DOMContentLoaded", () => {
	document
		.querySelectorAll(".wp-block-myplugin-openseadragon-block .osd-container")
		.forEach((el) => {
			const imageUrl = el.dataset.imageUrl;
			if (imageUrl) {
				OpenSeadragon({
					element: el,
					// WordPress automatically exposes the correct URL for block assets in /build or plugin root
					prefixUrl: `${window.wp?.blockLibrary?.url || ""}../static/images/`,
					tileSources: {
						type: "image",
						url: imageUrl,
					},
				});
			}
		});
});
