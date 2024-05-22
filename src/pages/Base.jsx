import Header from "../components/Header/Header";

const Base = (props) => (
  <>
    <Header />
    <div className="container">
        <h1>
            <span>
                {props.titulo}
            </span>
        </h1>

        {props.children}
    </div>
  </>
)

export default Base;
