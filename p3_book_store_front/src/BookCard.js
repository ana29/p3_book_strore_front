import React from 'react'

const BookCard = (props) => {
    return (

        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <img alt='book' src={`https://robohash.org/${props.title}?200x200`}/>
            <div>
                <h2>{props.title}</h2>
                <p>{props.author}</p>
            </div>
        </div>
    );

};

export default BookCard
