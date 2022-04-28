import React from "react";

const AddBooks = () =>{
    return (
            <form>
                <input type="text" placeholder="Title" className="title" />
                <input type="text" placeholder="author" className="Author" />
                <button className="Addbook">Add Book</button>
            </form>
    )
}
export default AddBooks;