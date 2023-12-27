import  { useState, useEffect } from 'react';
import ProductsCard from './ProductsCard'; 
import { FaAngleRight,FaAngleLeft} from "react-icons/fa6";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (allProducts.length / 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (allProducts.length / 4)) % (allProducts.length / 4));
  };

  const displayedProducts = allProducts.slice(currentIndex * 4, (currentIndex + 1) * 4);
  const sliderStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <section>
    <div className="relative w-[98%] mx-auto">
      <button onClick={prevSlide} className="absolute left-0 top-1/2 z-10 h-10 w-10 bg-white drop-shadow-lg rounded-full flex items-center justify-center hover:text-[#F97316] text-md"><FaAngleLeft /></button>
      <div className='  w-full md:h-screen grid grid-cols-2 gap-3 slide-transition overflow-hidden' >
        
        {displayedProducts.map((product, index) => (
          <ProductsCard key={index} product={product} />
        ))}
        
      </div>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 z-10 h-10 w-10 bg-white drop-shadow-lg rounded-full flex items-center justify-center hover:text-[#F97316] text-md "><FaAngleRight /></button>
    </div>
    </section>
  );
};

export default Slider;
