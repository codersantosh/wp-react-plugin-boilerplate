const {
	__
} = wp.i18n;

const {
	Fragment
} = wp.element;

const {
	CardBody,
	CardDivider,
	TextControl,
} = wp.components;

import {
	useComponentWillUnmount
} from "../../utils/components";

export const RenderGeneral = (props) => {
	const {
		settings,
		setSetting
	} = props.props;

	useComponentWillUnmount(() => {
		/*Run once*/
		/*Runs before the component output is removed from the DOM*/
		/*Good Place For Stop Timer*/
		console.log('General ComponentWillUnmount')
	});

	return (
		<Fragment>
			<CardBody>
				<TextControl
					label={__('Setting 1','wp-react-plugin-boilerplate')}
					placeholder={__('Enter Text','wp-react-plugin-boilerplate')}
					value={settings && settings['setting_1']}
					onChange={newVal =>
						setSetting('setting_1',newVal)
					}
				/>
			</CardBody>
			<CardDivider />
			<CardBody
				isShady
			>
				<TextControl
					label={__('Setting 2','wp-react-plugin-boilerplate')}
					placeholder={__('Enter Another Text','wp-react-plugin-boilerplate')}
					value={settings && settings['setting_2']}
					onChange={newVal =>
						setSetting('setting_2',newVal)
					}
				/>
			</CardBody>
			<CardDivider />
		</Fragment>
	)
}
