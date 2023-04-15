import Recruiters from "./components/Jobs/Recruiters/Recruiters";
import Search from "./components/Jobs/SearchBar-Section/Search";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Recruiters />
      <Footer />
    </div>
  );
}

export default App;
