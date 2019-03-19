import {ADD_LIST_ITEM,DELETE_LIST_ITEM,CHANGE_INPUT_VALUE} from "./actions_types"
const defaultvalue = {
    name:"生命周期组件",
    inputVal:"",
    list:["list1","list2","lsit4"]
}
export default (state=defaultvalue,action)=>{
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputVal = action.value;        
        return newState;
    }
    if(action.type === ADD_LIST_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal); 
        newState.inputVal = '';
        return newState;
    }
    if(action.type === DELETE_LIST_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        var index = action.index;
        newState.list.splice(index,1); 
        return newState;
    }
    return state;
}
// export const getAddItemAction=()=>({
//     type:DELETE_LIST_ITEM,
// })