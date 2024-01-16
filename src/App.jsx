import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import TaskBoard from "./components/Task/TaskBoard";

const App = () => {
  return (
    <>
    <NavBar/>
    <div className="flex flex-col justify-center items-center">
    <HeroSection/>
    <TaskBoard/>
    </div>
    <Footer/>
    </>
  );
};

export default App;