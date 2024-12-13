import Header from "./components/header";
import Contact from "./pages/contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import Project from "./components/Project";
import Book from "./components/Book";
import Form from "./components/Form";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Work />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/query" element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
