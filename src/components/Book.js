import React from "react";

let Book = ({title,author}) => {
return (<>
<h2 className="title">{title}</h2>
<p className="author">{author}</p>
</>
);
}
export default Book;