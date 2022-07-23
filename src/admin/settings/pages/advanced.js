/*WordPress*/
import {
    useContext,
    Fragment
} from "@wordpress/element";
import {__} from "@wordpress/i18n";
import {
    CardBody,
    CardDivider,
    BaseControl,
    ToggleControl,
    SelectControl
} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext.js';

const Advanced = () => {
    const { useSettings, useUpdateStateSettings } = useContext(SettingsContext);

    return (
        <Fragment>
            <CardBody>
                <BaseControl
                    label={__('Setting 3 Toggle','wp-react-plugin-boilerplate') }
                >
                    <ToggleControl
                        label={ __('Check to enable','wp-react-plugin-boilerplate')  }
                        checked={ (useSettings && useSettings['setting_3'])}
                        onChange={ () => {
                            useUpdateStateSettings('setting_3', !(useSettings && useSettings['setting_3']))
                        } }
                    />
                </BaseControl>
            </CardBody>
            <CardDivider />
            <CardBody
                isShady
            >
                <BaseControl
                    label={__('Setting 4 Toggle','wp-react-plugin-boilerplate') }
                >
                    <ToggleControl
                        label={ __('Check to enable','wp-react-plugin-boilerplate')  }
                        checked={ (useSettings && useSettings['setting_4'])}
                        onChange={ () => {
                            useUpdateStateSettings('setting_4', !(useSettings && useSettings['setting_4']))
                        } }
                    />
                </BaseControl>
            </CardBody>
            <CardDivider />

            <CardBody>
                <SelectControl
                    label={ __('Setting 5 Select','wp-react-plugin-boilerplate')  }
                    value={useSettings && useSettings['setting_5']}
                    options={[
                        {
                            label: __('Option 1','wp-react-plugin-boilerplate'),
                            value: 'option-1'
                        },
                        {
                            label: __('Option 2','wp-react-plugin-boilerplate'),
                            value: 'option-2'
                        },
                    ]}
                    onChange={newVal =>
                        useUpdateStateSettings('setting_5',newVal)
                    }
                />
            </CardBody>
            <CardDivider />
        </Fragment>
    )
}

export default Advanced;