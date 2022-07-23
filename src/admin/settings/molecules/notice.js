/*WordPress*/
import {useContext} from "@wordpress/element";
import {__} from "@wordpress/i18n";
import {Notice} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext.js';

const SettingsNotice = () => {
    const { useHasError, useUpdateState } = useContext(SettingsContext);
    return (
        <Notice
            onRemove={() =>
                useUpdateState({
                    notice : '',
                    useHasError : false,
                })
            }
            status={useHasError?'error':'success'}
        >
            <p>
                {useHasError && __( 'An error occurred.','wp-react-plugin-boilerplate' ) }
                {!useHasError && __( 'Saved Successfully.','wp-react-plugin-boilerplate' ) }
            </p>
        </Notice>
    )
};
export default SettingsNotice;