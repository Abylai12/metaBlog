import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
};
export default Layout;
