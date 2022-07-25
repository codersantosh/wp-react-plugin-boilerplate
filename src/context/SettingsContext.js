/*WordPress*/
import {
    createContext,
    useEffect,
    useReducer
} from "@wordpress/element";

/*Library*/
import {
    isEqual,
} from "lodash";


/*Inbuilt APIs*/
import {
    fetchSettings,
    updateSettings
} from '../api/settings';

/*Inbuilt Reducer for Settings*/
import SettingsReducer from "../reducer/settings-reducer";

/*Create Context for Settings*/
export const SettingsContext = createContext();

/*Component SettingsContextProvider*/
const SettingsContextProvider = (props) => {
    /*Initial States Reducer*/
    /*
    fetchedSettings
    All Fetch Settings from Api

    stateSettings
    All State Settings

    isPending
    If is pending api process

    notice
    Notice string

    hasError
    If has error

    canSave
    If can save or can click save setting
    */
    const initialState = {
        fetchedSettings:{},
        stateSettings:{},
        isPending: true,
        notice: '',
        hasError: '',
        canSave: false,
    };

    const [state, dispatch] = useReducer(SettingsReducer, initialState);

    /*Wrapper Function for dispatch*/
    const useDispatch = (args) => {
        /*Reducer state on args*/
        dispatch(args);
    };

    /*Update Settings*/
    const useUpdateSettings = async () => {

        /*Reducer state on UPDATE_SETTINGS_BEFORE*/
        dispatch({
            type: 'UPDATE_SETTINGS_BEFORE',
            payload: {
                isPending: true,
            },
        });

        const updatedSettings = await updateSettings(state.stateSettings);

        /*Reducer state on UPDATE_SETTINGS*/
        dispatch({
            type: 'UPDATE_SETTINGS',
            payload: {
                fetchedSettings : updatedSettings,
                stateSettings : updatedSettings,
            },
        });
    };

    /*Fetch Settings*/
    const useFetchSettings = async () => {
        const gotSettings = await fetchSettings();

        /*Reducer state on FETCH_SETTINGS*/
        dispatch({
            type: 'FETCH_SETTINGS',
            payload: {
                fetchedSettings : gotSettings,
                stateSettings : gotSettings,
            },
        });
    };

    /*Update State*/
    const useUpdateState = async (data) => {
        /*Reducer state on UPDATE_STATE*/
        dispatch({
            type: 'UPDATE_STATE',
            payload: data,
        });
    };

    /*Update State Settings*/
    const useUpdateStateSettings = async (key, val) => {
        let newSetting = Object.assign({}, state.stateSettings ),
            canSave;

        newSetting[key] = val;

        if( isEqual(newSetting, state.fetchedSettings)){
            canSave = false;
        }
        else{
            canSave = true;
        }

        useUpdateState({
            stateSettings:newSetting,
            canSave: canSave,
        })
    };

    /*Call once*/
    useEffect(() => {
        useFetchSettings();
    }, []);


    let allContextValue = {
        useDispatch,
        useUpdateSettings,
        useFetchSettings,
        useUpdateState,
        useUpdateStateSettings,
        useSettings:state.stateSettings,
        useIsPending:state.isPending,
        useNotice:state.notice,
        useHasError:state.hasError,
        useCanSave:state.canSave,
    };
    return (
        <SettingsContext.Provider
            value={allContextValue}
        >
            {props.children}
        </SettingsContext.Provider>
    );
}

export default SettingsContextProvider;