import "./App.css";
import Slider from "./componets/Slider/Slider";
import SliderTwo from "./componets/sliderTwo/SliderTwo";

function App() {
  return (
    <>
      <div>
        <Slider />
      </div>
      <div className="py-10 ">
        <SliderTwo />
      </div>
    </>
  );
}

export default App;
