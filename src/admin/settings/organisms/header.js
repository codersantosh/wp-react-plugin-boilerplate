/*WordPress*/
import {useContext} from "@wordpress/element";
import {__} from "@wordpress/i18n";
import {CardHeader} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext';

/*Inbuilt Components*/
import SettingsNotice from "../molecules/notice";
import Navlist from "../molecules/navlist";

const SettingsHeader = () => {
    const { useIsPending, useNotice } = useContext(SettingsContext);
    return (
        <>
            <CardHeader style={{overflow: 'hidden',height: '70px'}}>
                <h1>{__( 'Settings','wp-react-plugin-boilerplate' )}</h1>
                {useNotice && !useIsPending && <SettingsNotice />}
            </CardHeader>
            <Navlist />
        </>

    );
};

export default SettingsHeader;