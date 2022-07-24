/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './scss/index.scss';

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

const { isEqual } = lodash;

const {
	apiFetch
} = wp;

const {
	TabPanel,
	Notice,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardDivider,
	CardFooter,
	Spinner
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
	const [allSetting, setInitialSetting] = useState({}),
		[isSaving, setIsSaving] = useState(false),
		[hasNotice, setNotice] = useState(false),
		[hasError, setError] = useState(false),
		[needSave, setNeedSave] = useState(false);

	const SettingNotice = () => (
		<Notice
			onRemove={() =>
				setNotice(false)
			}
			status={hasError ? 'error' : 'success'}
		>
			<p>
				{hasError && __('An error occurred.', 'wp-react-plugin-boilerplate')}
				{!hasError && __('Saved Successfully.', 'wp-react-plugin-boilerplate')}
			</p>
		</Notice>
	);

	async function getSettings() {
		let data = await apiFetch({
			path: wpReactPluginBoilerplateBuild.rest.namespace + wpReactPluginBoilerplateBuild.rest.version + '/get_settings'
		});
		if (data) {
			setInitialSetting(data);
		}
		else {
			setInitialSetting({});
		}
	}

	async function setSettings() {
		setIsSaving(true)
		let data = await apiFetch({
			path: wpReactPluginBoilerplateBuild.rest.namespace + wpReactPluginBoilerplateBuild.rest.version + '/set_settings',
			method: 'POST',
			data: {
				settings: allSetting,
			}
		});
		if (isEqual(allSetting, data)) {
			setError(false);
			setIsSaving(false);
			setNeedSave(false);
			setInitialSetting(data);
		}
		else {
			setIsSaving(false);
			setError(true);
			setNeedSave(true);
		}
		setNotice(true)
	}

	const setStateSettings = (key, val) => {
		let newSetting = Object.assign({}, allSetting);
		newSetting[key] = val;
		setInitialSetting(newSetting);
		setNeedSave(true);
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

	if (!Object.keys(allSetting).length) {
		return (
			<Spinner />
		)
	}
	return (
		<Card>
			<CardHeader style={{ overflow: 'hidden', height: '70px' }}>
				<h1>{__('Settings', 'wp-react-plugin-boilerplate')}</h1>
				{hasNotice && !isSaving && <SettingNotice />}
			</CardHeader>
			<CardBody >
				<TabPanel
					className="wp-react-plugin-boilerplate"
					activeClass="wp-react-plugin-boilerplate-tab-active"
					tabs={GetTab()}
				>
					{(tab) => <RenderTab tab={tab} settings={allSetting} setSetting={setStateSettings} />}
				</TabPanel>
			</CardBody>
			<CardDivider />
			<CardFooter>
				<Button
					className="button"
					onClick={() =>
						setSettings()
					}
					isPrimary
					disabled={isSaving || !needSave}
				>
					{needSave ? __('Save Settings', 'wp-react-plugin-boilerplate') : __('Saved', 'wp-react-plugin-boilerplate')}
					{isSaving ? <Spinner /> : ''}
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