/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/*Code goes here
* Output : build/index.js
* */

const {
	__
} = wp.i18n;

const {
	render
} = wp.element;

const {
	Card,
	CardHeader,
	CardBody,
	CardDivider,
	CardFooter,
	Button,
	TextControl,
} = wp.components;

const AddSettings = () => {

	return (
		<Card>
			<CardHeader style={{overflow: 'hidden',height: '70px'}}>
				<h1>{__( 'Settings','wp-react-plugin-boilerplate' )}</h1>
			</CardHeader>

			<CardBody>
				<TextControl
					label={__('Setting 1','wp-react-plugin-boilerplate')}
					placeholder={__('Enter Text','wp-react-plugin-boilerplate')}
					value={'Setting Value 1'}
					onChange={newVal =>{
						console.log(newVal)
					}}
				/>
			</CardBody>
			<CardDivider />
			<CardBody
				isShady
			>
				<TextControl
					label={__('Setting 2','wp-react-plugin-boilerplate')}
					placeholder={__('Enter Another Text','wp-react-plugin-boilerplate')}
					value={'Setting Value 2'}
					onChange={newVal =>{
						console.log(newVal)
					}}
				/>
			</CardBody>
			<CardDivider />
			<CardFooter>
				<Button
					className="button"
					onClick={() =>{
						console.log('Save Setting')
					}}
					isPrimary
				>
					{__( 'Save Settings','wp-react-plugin-boilerplate' )}
				</Button>
			</CardFooter>
		</Card>
	)
}
document.addEventListener('DOMContentLoaded', () => {
	if ('undefined' !== typeof document.getElementById(wpReactPluginBoilerplateBuild.root_id) && null !== document.getElementById(wpReactPluginBoilerplateBuild.root_id)) {
		render(<AddSettings />, document.getElementById(wpReactPluginBoilerplateBuild.root_id));
	}
});