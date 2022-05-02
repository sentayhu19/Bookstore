const ADDBOOK = bookstore/books/ADDBOOK;
const REMOVEBOOK = bookstore/books/REMOVEBOOK;

export default booksReducer = (state={},action) => {
switch(action.type)
{
    case ADDBOOK:
        return{ state = {
            title: 'ABC book',
            author: 'Demse',
        }}
    case REMOVEBOOK:
    return state={};
    default:
        return state;

}
}

export const addBook =()=> {
    return{
        type:ADDBOOK,
    }
}
export const removeBook = ()=>{
    return{
        type: REMOVEBOOK
    }
}