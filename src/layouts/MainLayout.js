import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="main">
        <Header />
        {children}
      </div>
    </>
  );
}

export default MainLayout;
