import Gallery from "../Gallery/Gallery";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";
import MySlider from "../Slider/MySlider";
import SimpleSlider from "../Slider/MySlider";

const Home = () => {
  return (
    <div className="text-white">
      <MySlider />
      <div className="max-w-screen-xl mx-auto">
        <PopularClasses></PopularClasses>
        <Gallery />
        <PopularInstructors></PopularInstructors>
      </div>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
