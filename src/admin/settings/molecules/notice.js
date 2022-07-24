/*WordPress*/
import {useContext} from "@wordpress/element";
import {__} from "@wordpress/i18n";
import {Notice} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext.js';

const SettingsNotice = () => {
    const { useNotice, useHasError, useUpdateState } = useContext(SettingsContext);
    return (
        <Notice
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
    )
};
export default SettingsNotice;