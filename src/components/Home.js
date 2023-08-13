import "./Home.css";
import Header from "./Header";
import Filters from "./Filters";
import Cart from "./Cart";

function Home() {
  return (
    <div className="main-layout">
      <Header />
      <div className="content">
        <Filters />
        <Cart />
      </div>
    </div>
  );
}

export default Home;
