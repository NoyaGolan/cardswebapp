import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Sign-in";
import SignUp from "./components/Sign-up";
import Footer from "./components/Footer";

import FavoriteList from "./components/FavoriteList";
import SignOut from "./components/Sign-out";
import ProtectedRout from "./common/ProtectedRoute";

import CreateCard from "./components/Create-card";
import MyCards from "./components/MyCards";
import EditCard from "./components/EditCard";
import { useAuth } from "./context/auth.context";
import BusinessPage from "./components/BusinessPage";
import About from "./components/About";
function App() {
  const { checked } = useAuth();

  return (
    <div className={`App ${checked ? "" : `bg-dark`} `}>
      <Header />
      <div style={{ minHeight: "90vh" }}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-up-biz" element={<SignUp isBusiness />} />

          <Route
            path="create-card"
            element={
              <ProtectedRout onlyBiz>
                <CreateCard />
              </ProtectedRout>
            }
          />
          <Route
            path="edit-card/:id"
            element={
              <ProtectedRout onlyBiz>
                <EditCard />
              </ProtectedRout>
            }
          />
          <Route
            path="/favorites"
            element={
              <ProtectedRout>
                <FavoriteList />
              </ProtectedRout>
            }
          />
          <Route
            path="/my-cards"
            element={
              <ProtectedRout onlyBiz>
                <MyCards />
              </ProtectedRout>
            }
          />

          <Route path="/sign-out" element={<SignOut />} redirect="/" />
          <Route path="/business-page/:id" element={<BusinessPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;