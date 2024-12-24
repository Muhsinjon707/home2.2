import Item from "../Item"
import "./index.css"

function List() {
    return (
      <>
        <ul className="nav">
          <Item sort="It" img="🐶" />
          <Item sort="Mushuk" img="🐱" />
          <Item sort="Fil" img="🦁" />
          <Item sort="Sher" img="🦁" />
          <Item sort="Qush" img="🐦" />
        </ul>
      </>
    );
}

export default List;