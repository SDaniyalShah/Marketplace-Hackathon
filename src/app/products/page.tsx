"use client"
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import '@/app/css/satoshi.css'

// Adding key prop in star array
let star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
];

interface Iproducts {
    image: string;
    discountPercent: number;
    isNew: boolean;
    name: string;
    description: string;
    price: number;
    _id: string;
}

export default function Product() {
    const [products, setProducts] = useState<Iproducts[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await client.fetch(
                    `*[_type == 'product' && category == 'tshirt']{
                        "image": image.asset->url,
                        category,
                        discountPercent,
                        isNew,
                        name,
                        description,
                        price,
                        _id
                    }[0...4]`
                );
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <div className="w-full h-full mt- lg:mt-6 max-w-screen-xl mx-auto">
                <div className="flex justify-center items-center font-bold text-[32px] leading-[38.4px] w-[296px] h-[38px] pt-[50px] pb-[32px] mx-auto md:w-[403px] md:h-[58px] md:text-5xl md:leading-[57.6px] md:pt-[72px] md:pb-[55px]">
          
          <h1 style={{fontFamily:"integral"}}>NEW ARRIVALS</h1>
        </div>
                <div className="relative mt-10 overflow-x-auto flex space-x-5 px-8">
                    {products.length > 0 ? (
                        products.map((data) => {
                            return (
                                <div key={data._id} className="flex-shrink-0">
                                    <Link href={`/products/${data._id}`}>
                                        <div className="w-[200px] md:w-[283px] h-[200px] md:h-[290px] bg-[#F0EEED] rounded-[20px]">
                                            {data.image && (
                                                <Image
                                                    src={urlFor(data.image).url()}
                                                    alt={data.name}
                                                    className="w-full h-full rounded-[20px]"
                                                    width={100}
                                                    height={100}
                                                />
                                            )}
                                        </div>
                                    </Link>
                                    <div className="pl-2">
                                        <p className="text-lg mt-2 font-bold">{data.name}</p>
                                        <div className="flex text-yellow-400">
                                            {star.map((icon, index) => (
                                                <span key={index}>{icon}</span>
                                            ))}
                                        </div>
                                        <p className="font-bold mt-1">
                                            {data.price}{" "}
                                            <span className="text-gray-400 font-bold line-through">
                                                {data.discountPercent}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-center text-gray-500 w-full">
                            No products available at the moment. Please try again later.
                        </p>
                    )}
                </div>
            </div>
            <div className="flex justify-center items-start mt-5">
                <Link href="/casual">
                    <Button
                        variant={"outline"}
                        className="sm:mt-0 w-[80%] sm:w-[200px] rounded-[20px]"
                    >
                        View all
                    </Button>
                </Link>
            </div>
        </>
    );
}