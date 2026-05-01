import Link from "next/link";
import BanIm from "@/assets/book-banner.png"
import BanImr from "@/assets/fall-book.png"
import Image from "next/image";

const Banner = () => {
    return (
        <section className="bg-linear-to-r from-red-100 to-purple-300 py-20 px-6 rounded-lg relative mt-20 mb-10">
            <Image src={BanIm} alt="banner" className="w-[400px] absolute top-1 -right-30  z-10"></Image>
            <Image src={BanImr} alt="banner" className="w-[400px] absolute -bottom-16 -left-2 z-10 "></Image>


            <div className="max-w-6xl mx-auto text-center">

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                    Find Your Next Read
                </h1>

                {/* Subtext */}
                <p className="mt-4 text-gray-600 text-lg md:text-xl">
                    Discover thousands of books from different genres and authors.
                </p>

                {/* Button */}
                <div className="mt-8">
                    <Link href="/books">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
                            Browse Now
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Banner;