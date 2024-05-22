import Header from "../components/Header/Header";

const Base = (props) => (
  <>
    <Header />
    <div className={'container '+ props.className}>
      {props.children}
    </div>
  </>
)

export default Base;