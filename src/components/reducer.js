const reducer =(state,action)=>{
    if(action.type==="mode"){
        return {
            ...state,
            color:action.payload.color
        
            
        }
    };
    if(action.type==="MESSAGE"){
    return {
        ...state,
       message:action.payload.message
    }
}
}

export default reducer