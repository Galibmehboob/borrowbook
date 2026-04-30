import React from 'react';
import BookCard from './BookCard';

const BooksApi = async () => {
    const res = await fetch('https://borrowbook-three.vercel.app/data.json')
    const data = await res.json()
    // console.log(data);
    const topBooks = data.slice(0, 4)

    console.log(topBooks);

    return (
        <div>
            <h1 className='text-2xl font-bold mt-5'>Recommended</h1>

            <div className='grid grid-cols-4 gap-3'>
                {
                    topBooks.map(book =>
                        <BookCard key={book.id} book={book}></BookCard>
                    )
                }
            </div>
        </div>
    );
};

export default BooksApi;