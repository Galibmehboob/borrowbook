import BookCard from "@/components/BookCard";


const AllBooks = async () => {

    const res = await fetch('http://localhost:3000/data.json');
    const books = await res.json();

    console.log(books);



    return (
        <div>

            <h2>All Books</h2>

            <div className="grid lg:grid-cols-4 gap-4">
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>



        </div>
    );
};

export default AllBooks;