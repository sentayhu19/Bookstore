import React from "react";
import Book from "./Book";
import AddBooks from "./AddBooks";

const Books = () =>{
    const books1 = [];

    return (
        <>
        <section className="books-list-section">
            { books1.map((book) =>{
                
           return  <Book bookinfo={book} />
            })};
         
          <button type="button">Remove</button>
    </section>
    <section className="add-book-section">
        <AddBooks/>
    </section>
    </>
   );
}
export default Books;