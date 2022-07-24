/*Reducer for Settings*/
const SettingsReducer = (state, action) => {

    let newState = Object.assign({}, state);
    console.log(action)

    switch (action.type) {

        case 'FETCH_SETTINGS':
            newState.fetchedSettings = action.payload.fetchedSettings;
            newState.stateSettings = action.payload.stateSettings;
            newState.isPending = false;
            newState.canSave = false;
            break;

        case 'UPDATE_SETTINGS':
            newState.fetchedSettings = action.payload.fetchedSettings;
            newState.stateSettings = action.payload.stateSettings;
            newState.isPending = false;
            newState.canSave = false;
            newState.canSave = false;
            break;

        case 'UPDATE_STATE':
            if( action.payload.fetchedSettings){
                newState.fetchedSettings = action.payload.fetchedSettings;
            }
            if( action.payload.stateSettings){
                newState.stateSettings = action.payload.stateSettings;
            }
            if( typeof action.payload.isPending !== 'undefined' ){
                newState.isPending = action.payload.isPending;
            }
            if( action.payload.notice){
                newState.notice = action.payload.notice;
            }
            if( typeof action.payload.hasError !== 'undefined' ){
                newState.hasError = action.payload.hasError;
            }

            if( typeof action.payload.canSave !== 'undefined'){
                newState.canSave = action.payload.canSave;
            }
            break;
    }
    return newState;
};
export default SettingsReducer;