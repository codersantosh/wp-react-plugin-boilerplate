/* WordPress */
import { useContext } from '@wordpress/element';

/* Library */
import { cloneDeep } from 'lodash';

/*Atrc*/
import { AtrcLandingTemplate1 } from 'atrc';

/* Inbuilt */
import { AtrcReduxContextData } from '../../routes';

/* Local */
const Landing = () => {
	const data = useContext(AtrcReduxContextData);
	const { lsSettings, lsSaveSettings } = data;
	const { white_label: dynamicWhitelabel } = WpReactPluginBoilerplateLocalize;
	const { dashboard, landingPage } = dynamicWhitelabel;

	const whiteLabel = {};
	/* Notice */
	if (dashboard.notice) {
		whiteLabel.notice = {
			on: lsSettings.gs1,
			text: dashboard.notice,
			onRemove: () => {
				const localStorageClone = cloneDeep(lsSettings);
				localStorageClone.gs1 = !localStorageClone.gs1;
				lsSaveSettings(localStorageClone);
			},
		};
	}

	if (landingPage) {
		if (landingPage.banner) {
			/*Banner */
			whiteLabel.banner = landingPage.banner;
		}
		if (landingPage.identity) {
			/*Identity */
			whiteLabel.identity = landingPage.identity;
		}
		if (landingPage.contact) {
			/*Contact */
			whiteLabel.contact = landingPage.contact;
		}
		if (landingPage.bannerColumns) {
			/*Banner columns */
			whiteLabel.bannerColumns = landingPage.bannerColumns;
		}
		if (landingPage.normalColumns) {
			/*Normal columns */
			whiteLabel.normalColumns = landingPage.normalColumns;
		}
		if (landingPage.topicLinks) {
			/*Topic links and columns */
			whiteLabel.topicLinks = landingPage.topicLinks;
		}
		if (landingPage.changelog) {
			/*Topic links and columns */
			whiteLabel.changelog = landingPage.changelog;
		}
	}

	return <AtrcLandingTemplate1 {...whiteLabel} />;
};

export default Landing;
