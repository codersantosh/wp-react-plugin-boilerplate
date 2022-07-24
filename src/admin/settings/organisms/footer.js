/*WordPress*/
import {
    CardFooter
} from "@wordpress/components";

/*Inbuilt Components*/
import SaveBtn from "../atoms/save-btn";

const SettingsFooter = () => {
    return (
        <CardFooter>
            <SaveBtn />
        </CardFooter>
    );
};

export default SettingsFooter;