import Topbar from "./components/topbar/Topbar";
import './app.css';
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Newuser from "./pages/newuser/Newuser";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Footer from "./components/footer/Footer";
import Mail from "./pages/mail/Mail";
import Login from "./pages/register/Login";
import Signup from "./pages/register/Signup";
import Transactions from "./pages/transactions/Transactions";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="main-container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <UserList />
            </Route>
            <Route exact path="/user/:Id">
              <User />
            </Route>
            <Route exact path="/newuser">
              <Newuser />
            </Route>
            <Route exact path="/productlist">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route exact path="/newproduct">
              <NewProduct />
            </Route>
            <Route exact path="/transactions">
              <Transactions />
            </Route>
            <Route exact path="/mail/composemail">
              <Mail />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
