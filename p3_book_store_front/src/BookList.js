import React from 'react';
import Card from "./BookCard";

const BookList = ({books}) => {
    return (
        <div>
            {
                books.map((book, i) => {
                    return (<Card
                        key={i}
                        title={books[i].title}
                        author={books[i].author}
                    />
                    );
                })
            }
        </div>
    );

};

export default BookList
