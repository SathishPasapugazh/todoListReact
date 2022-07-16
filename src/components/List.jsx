import React from "react";

function List(props) {
  return <li>{props.listName === "" ? "A Item" : props.listName}</li>
  //console.log(props.listName);
}

export default List;
