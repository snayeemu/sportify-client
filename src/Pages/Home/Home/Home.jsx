import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";
import SimpleSlider from "../Slider/MySlider";

const Home = () => {
  return (
    <div>
      <SimpleSlider></SimpleSlider>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
