/*WordPress*/
import {useContext} from "@wordpress/element";
import {__} from "@wordpress/i18n";
import {Notice, Popover} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext.js';

const SettingsNotice = () => {
    const { useNotice, useHasError, useUpdateState } = useContext(SettingsContext);
    return (
        <Popover
            className="wp-react-plugin-boilerplate-popover"
        >
            <Notice
                className="wp-react-plugin-boilerplate-notice"
                onRemove={() =>
                    useUpdateState({
                        notice : '',
                        hasError : false,
                    })
                }
                status={useHasError?'error':'success'}
            >
                <p>
                    {useNotice}
                </p>
            </Notice>
        </Popover>
    )
};

export default SettingsNotice;