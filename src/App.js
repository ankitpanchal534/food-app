import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Menu from "./Components/Menu";
import Checkout from "./Components/Checkout";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="menu" element={<Menu />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
