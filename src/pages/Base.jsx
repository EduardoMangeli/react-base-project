import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Base = (props) => (
  <>
    <Header />
    <div className="container">
      {props.children}
    </div>
    <Footer />
  </>
)

export default Base;