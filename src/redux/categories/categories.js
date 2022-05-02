const COMPLETED = bookstore/categories/COMPLETED;

export default categoriesReducer = (state={}, action) =>{
    switch(action.type){
        case COMPLETED:
            return "Under construction";
            default:
                return state;
    }

}
export const checkStatus = () =>{
    return{
        type:COMPLETED
    }
}