// import Combined from "./Combined";
//  import Heading from "./Heading";
// import Assignment from "./Arrowbased";
//  import Quiz from "./Functionalcomponent";
//  import LabAssignment from "./classBased";
//  import MyComponent from "./images/image";
//  import Student from "./state";
// import Product from "./state2";
// import Apple from "./parametre";
// import Productz from "./prop";
// import Checkout from "./prop2";

import { Routes, Route } from "react-router-dom";
//  import Women from "./component/Women";

// import ProductDetail from "./component/ProductDetail";
// import Women from "./component/Women";
// import House from "./component/House";

// import Item from "./project/Item";

import Menu from "./bakery/Menu";
import Mywork from "./bakery/Mywork";
import Det from "./bakery/Det";
// import Bucket from "./bakery/Bucket"
import ContactUs from "./bakery/Contactus";
import PrivacyPolicy from "./bakery/privacypolicy";
import Myform from "./bakery/Myform";

import Login from "./bakery/Login";

import MyForm from "./bakery/Myform";
import ProductForm from "./bakery/ProductForm";
import SignupForm from "./bakery/signUp";
import Foot from "./bakery/Foot";
import Head from './bakery/Head'

function App() {
  return (
    <div>
      {/*  */}
      <Head />
      <Routes>
        <Route path="/" element={<Mywork />} />{" "}
        <Route path="" element={<Menu />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        // <Route path="/Myform" element={<MyForm />}></Route>
        // <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
        // <Route path="/Contactus" element={<ContactUs />}></Route>
        // <Route path="/Det" element={<Det />}></Route>
        <Route path="/add" element={<ProductForm />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
