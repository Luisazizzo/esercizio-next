import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./index.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
