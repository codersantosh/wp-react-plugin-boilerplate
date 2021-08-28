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
	render,
	useState
} = wp.element;

const {
	apiFetch
} = wp;

const {
	TabPanel,
	Card,
	CardHeader,
	CardBody,
	CardDivider,
	CardFooter,
	Button,
} = wp.components;

import {
	GetTab,
	RenderTab
} from "./components/tabs";


import {
	useComponentDidMount,
	useComponentDidUpdate,
	useComponentWillUnmount
} from "./utils/components";

const AddSettings = () => {

	const [ allSetting, setInitialSetting ] = useState({});

	async function getSettings(){
		let data = await apiFetch({
			path: wpReactPluginBoilerplateBuild.rest.namespace+ wpReactPluginBoilerplateBuild.rest.version+'/get_settings'
		});
		if( data){
			setInitialSetting( data );
		}
		else {
			setInitialSetting( {} );
		}
	}

	const setStateSettings = (key, val) => {
		let newSetting = Object.assign({}, allSetting );
		newSetting[key] = val;
		setInitialSetting( newSetting );
	}

	useComponentDidMount(() => {
		getSettings()
	});

	useComponentDidUpdate(() => {
		/*Nothing for now*/
	});

	useComponentWillUnmount(() => {
		/*Nothing for now*/
	});

	return (
		<Card>
			<CardHeader style={{overflow: 'hidden',height: '70px'}}>
				<h1>{__( 'Settings','wp-react-plugin-boilerplate' )}</h1>
			</CardHeader>
			<CardBody >
				<TabPanel
					className="wp-react-plugin-boilerplate"
					activeClass="wp-react-plugin-boilerplate-tab-active"
					tabs={ GetTab()}
				>
					{ ( tab ) => <RenderTab tab={tab} settings={allSetting} setSetting ={setStateSettings} /> }
				</TabPanel>
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