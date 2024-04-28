import Header from "../components/Header/Header";
import Rodape from "../components/Rodape/Rodape";

const Base = (props) => (
  <>
    <Header />
    <div className="container">
      {props.children}
    </div>
    <Rodape />
  </>
)

export default Base;