import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Gallery } from "./Pages/Gallery/Gallery";
import { NftView } from "./Components/gallery/nft-view/NftView";
import { Explore } from "./Pages/Explore/Explore";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/gallery/:slug" element={<Gallery />}></Route>
            <Route path="/nft" element={<NftView />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
