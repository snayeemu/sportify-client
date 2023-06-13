import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import SimpleSlider from "../Slider/MySlider";

const Home = () => {
  return (
    <div>
      <SimpleSlider></SimpleSlider>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
