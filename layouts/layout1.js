import TopBar from "../components/TopBar";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <Header />
      <SideNav />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
