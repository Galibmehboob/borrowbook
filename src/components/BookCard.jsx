import Image from "next/image";

const BookCard = ({ book }) => {
    console.log(book.image_url);

    return (
        <div className="border rounded-xl shadow-md p-4 hover:shadow-xl transition">
            <Image
                src={book.image_url}
                alt={book.title}
                height={30}
                width={30}
                className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="text-lg font-bold mt-3">{book.title}</h2>
            <p className="text-sm text-gray-600">by {book.author}</p>
            <p className="text-sm mt-2 line-clamp-2">
                {book.description}
            </p>

            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                View Details
            </button>
        </div>
    );
};

export default BookCard;