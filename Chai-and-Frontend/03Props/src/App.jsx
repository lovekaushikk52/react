import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);
  let myObj={
    name:"love sharma",
    age:21,
  }
  let newArr=[1,2,3]

  return (
    <>
      <h1 className="text-xl font-bold underline bg-green-400 p-5 text-black rounded-xl ">
        Tailwind test
      </h1>
      <p className="text-md tracking-tight mt-3 p-10 bg-gray-400 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        quaerat amet enim, accusantium qui voluptatum sequi odit similique?
        Perspiciatis, placeat?
      </p>
        <Card name="chaiaurcode" someobj={myObj} btntext="click me" />
        <Card name="bubu"/>
    </>
  );
}

export default App;
