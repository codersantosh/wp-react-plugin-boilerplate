/*WordPress*/
import {useContext} from "@wordpress/element";
import {__} from "@wordpress/i18n";
import {
    CardFooter,
    Button
} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext';

const SettingsFooter = () => {
    const { useUpdateSettings, isPending, useCanSave } = useContext(SettingsContext);
    return (
        <CardFooter>
            <Button
                className="button"
                onClick={() =>
                    useUpdateSettings()
                }
                isPrimary
                disabled={isPending || !useCanSave}
            >
                {useCanSave?__( 'Save Settings','wp-react-plugin-boilerplate' ):__( 'Saved','wp-react-plugin-boilerplate' )}
                {isPending?<Spinner />:''}
            </Button>
        </CardFooter>
    );
};

export default SettingsFooter;