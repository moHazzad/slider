import { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import SliderTowProduct from "./SliderTowProduct"; // Your ProductCard component
import keyBoardImage from "../../assets/keybaod.jpg";

const SliderTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const pageSize = 3; // Number of products per slide

  useEffect(() => {
    // Replace with the actual path to your products JSON
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setAllProducts(data.products);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  const maxIndex = Math.ceil(allProducts.length / pageSize) - 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (maxIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + (maxIndex + 1)) % (maxIndex + 1)
    );
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  const displayedProducts = allProducts.slice(
    currentIndex * pageSize,
    (currentIndex + 1) * pageSize
  );

  return (
    <>
      <section className="flex flex-col md:flex-row  gap-3 h-[400px]">
        <div className="md:w-[60%]">
          <img className="h-full w-full" src={keyBoardImage} alt="" />
        </div>
        <div className="relative md:w-[40%] px-4">
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
          >
            <FaAngleLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
          >
            <FaAngleRight />
          </button>

          <div className="flex flex-col">
            <div className="flex justify-between  ">
              <div className="border-b-2 border-orange-500 pr-5">
                <p className="font-bold">BRST SELLER</p>
              </div>
              <div className="flex space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    className={`block w-2 h-2 rounded-full ${
                      currentIndex === index
                        ? "bg-orange-500 w-6"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden">
            {displayedProducts.map((product, index) => (
              <SliderTowProduct
                key={index}
                product={product}
                className="w-full flex-none"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderTwo;
