import "./index.css";

function Item(props) {
  return (
    <>
      <li className="nav-item">{props.sort}: {props.img}</li>
    </>
  );
}

export default Item;
