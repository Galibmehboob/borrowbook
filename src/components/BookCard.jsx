import { Button, Chip } from "@heroui/react";
import Image from "next/image";

const BookCard = ({ book }) => {
    console.log(book);


    return (
        <div className="border  rounded-xl shadow-md w-64 p-4 hover:shadow-xl transition space-y-2">
            <div className=" flex justify-center items-center">
                <div className="  relative  w-40 h-60">
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        loading="eager"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className=" object-cover rounded-xl shadow-lg"
                    />
                    <Chip size="sm" className="absolute right-2 top-1 ">{book.category}</Chip>
                </div>
            </div>

            <h2 className="text-xl font-semibold mt-3">{book.title}</h2>
            <p className="text-sm text-gray-600">by {book.author}</p>
            <p className="text-sm mt-2 line-clamp-2">
                {book.description}
            </p>

            <Button variant="outline" className="mt-4 w-full font-bold   py-2 rounded-lg hover:bg-blue-600 hover:text-white">
                View Details
            </Button>
        </div>
    );
};

export default BookCard;