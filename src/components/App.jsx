import React, {useState} from "react";
import List from "../components/List";

function App(props) {

const [inputName, setInputName] = useState("");
const [addName, setAddName]= useState("");
const newArray= [...addName];

function handleChange(event){
  const value = event.target.value;
setInputName(value);
//console.log(value);
}
function handleClick(event) {
setAddName(preValue => [...preValue, inputName])
setInputName("");
}
//console.log(addName);
//console.log(newArray);

//createIteam(sathish){
// return 
// <List listName = {addName} />;
//}

function submit(nameNum) {
  return (<List listName={nameNum} />
  );
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputName} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        
          {newArray.map(submit)}
        </ul>
      </div>
    </div>
  );
}

export default App;
