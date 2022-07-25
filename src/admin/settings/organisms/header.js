/*WordPress*/
import {useContext} from "@wordpress/element";
import {__} from "@wordpress/i18n";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext';

/*Inbuilt Components*/
import SettingsNotice from "../molecules/notice";
import Navlist from "../molecules/navlist";
import SaveBtn from "../atoms/save-btn";

const SettingsHeader = () => {
    const { useIsPending, useNotice } = useContext(SettingsContext);
    return (
        <>
            <header className="wp-react-plugin-boilerplate-header wp-react-plugin-boilerplate-header-sticky">
                <div className="at-flex at-align-items-center at-justify-content-between">
                        <div className="wp-react-plugin-boilerplate-title">
                            <h1>{__('Settings', 'wp-react-plugin-boilerplate')}</h1>
                        </div>
                        <div className="wp-react-plugin-boilerplate-button">
                            <SaveBtn />
                        </div>
                    </div>               
            </header>
            {useNotice && !useIsPending && <SettingsNotice />}
            <Navlist />
        </>
    );
};

export default SettingsHeader;