import { handleActions } from 'redux-actions';
import Type from './actionTypes'
const handleSuggestions=(state,action,key,data)=>{

    let current_sequence = state.sequence;
    if(!current_sequence || current_sequence<action.meta.sequence)//old update, ignore
    {
        if(data)
            return Object.assign({}, state, {[key]:data,"sequence":action.meta.sequence});
        else
            return Object.assign({}, state, {[key]:[],"sequence":action.meta.sequence});
    }

}
export const map_reducers = handleActions({
    [Type.GEOCODING]: (state=[],action)=>{
        return Object.assign({},state,{"fetching":true});
    },
    [Type.GEOCODING_SUCCESS]: (state=[],action)=>{
        return Object.assign({},state,{"fetching":false,"lat":action.payload.lat,"lng":action.payload.lng});
    },
    [Type.GEOCODING_FAIL]: (state=[],action)=>{
        return Object.assign({},state,{"fetching":false});
    },
    [Type.SET_MAP_LOCATION]: (state=[],action)=>{
        return Object.assign({},state,{"location":action.payload});
    }
},{});
export const form_state_reducers = handleActions({

    [Type.SET_FORM_STATE]: (state=[],action)=>{
        return Object.assign({},state,{[action.payload.key]:action.payload.data});
    }
},{})
export const exit_page_reducers = handleActions({

    [Type.ONLEAVE_HOOK]: (state=[],action)=>{
        return Object.assign({},state,{[action.payload.key]:action.payload.data});
    },
    [Type.LEAVE_PAGE_CONFIRM]: (state=[],action)=>{
        return Object.assign({},state,{[action.payload.key]:action.payload.data});
    }
},{})
export const dialog_data_reducers = handleActions({
     [Type.SET_DIALOG_DATA]: (state=[],action) => {
         let _newState=  {[action.payload.key]:action.payload.data};

        return Object.assign({}, state, _newState);

    },
},{});
export const auto_suggest_reducers = handleActions({
    [Type.LOAD_SUGGESTIONS]: (state=[],action) => {
        return handleSuggestions(state,action,"default");

    },

},{

});


