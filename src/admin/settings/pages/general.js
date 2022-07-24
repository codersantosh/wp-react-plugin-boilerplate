/*WordPress*/
import {
    useContext,
    Fragment
} from "@wordpress/element";
import {__} from "@wordpress/i18n";
import {
    CardBody,
    CardDivider,
    TextControl
} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext.js';

const General = () => {
    const { useSettings, useUpdateStateSettings } = useContext(SettingsContext);

    return (
        <Fragment>
            <CardBody>
                <TextControl
                    label={__('Setting 1','wp-react-plugin-boilerplate')}
                    placeholder={__('Enter Text','wp-react-plugin-boilerplate')}
                    value={useSettings && useSettings['setting_1']}
                    onChange={newVal =>
                        useUpdateStateSettings('setting_1',newVal)
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
                    value={useSettings && useSettings['setting_2']}
                    onChange={newVal =>
                        useUpdateStateSettings('setting_2',newVal)
                    }
                />
            </CardBody>
            <CardDivider />
        </Fragment>
    )
}

export default General;
