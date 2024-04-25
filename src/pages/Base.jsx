import Header from "../components/Header/Header";

const Base = (props) => (
  <>
    <Header />
    <div className="container">
        <h1>
            {props.titulo}
        </h1>

        {props.children}
    </div>
  </>
)

export default Base;