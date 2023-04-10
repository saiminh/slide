import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({ className: 'slide' }) }>
			<InnerBlocks
        allowedBlocks={['core/video', 'core/image', 'core/paragraph']}
        template={[
          [ 'core/video', { autoplay: true, loop: true, playinline: true, muted: true, controls: false } ]
        ]}
      />
		</div>
	);
}
