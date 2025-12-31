import Menu from "../components/Menu";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
