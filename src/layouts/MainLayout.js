import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import PopupVip from "../pages/PopupVip/PopupVip";
import PopupNotification from "../pages/PopupNotification/PopupNotification";

function MainLayout({ children }) {
  return (
    <>
      <PopupNotification />
      <PopupVip />
      <Navbar />
      <div className="main">
        <Header />
        {children}
      </div>
    </>
  );
}

export default MainLayout;
