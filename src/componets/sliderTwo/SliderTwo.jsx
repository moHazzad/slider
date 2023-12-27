import  { useState, useEffect } from 'react';
import ProductCardTow from './productCardTow';
import { FaAngleRight,FaAngleLeft} from "react-icons/fa6";

const SliderTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // You should replace '/public/products.json' with the actual path to your products JSON
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setAllProducts(data.products);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []);

  // Assuming that your products.json structure is an array of product objects
  const pageSize = 3; // Number of products per slide
  const maxIndex = Math.ceil(allProducts.length / pageSize) - 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const jumpToSlide = (index) => {
    setCurrentIndex(index);
  };

  // This will calculate the subset of products to display
  const displayedProducts = allProducts.slice(
    currentIndex * pageSize,
    (currentIndex + 1) * pageSize
  );

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {displayedProducts.map((product, index) => (
          <div key={index} className="w-full flex-none">
            {/* Render your ProductCard component */}
            <ProductCardTow product={product} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2">
      <FaAngleLeft />
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2">
      <FaAngleRight />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`block w-2 h-2 rounded-full ${currentIndex === index ? 'bg-orange-400' : 'bg-black'}`}
            onClick={() => jumpToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SliderTwo;
