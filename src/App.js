import Courses from "./components/Sections/Courses/Courses";
import Main from "./components/Sections/Main-Content/Main";
import Recruiters from "./components/Sections/Recruiters/Recruiters";
import Search from "./components/Sections/SearchBar-Section/Search";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import Career from "./components/Sections/Career/Career";
import TechnoMore from "./components/Sections/technopark/TechnoMore";
import Blogs from "./components/Sections/Blogs/Blogs";
import Map from "./components/Sections/Map/Map";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Recruiters />
      <Main />
      <Courses />
      <Map/>
      <Career />
      <TechnoMore/>
      <Blogs/>
      <Footer />
    </div>
  );
}

export default App;
