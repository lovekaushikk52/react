import React from 'react'
import axios from 'axios'

const App = () => {

    const [data, setData] = useState([])

     const getData = async () => {
    
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data)

     }


// const getData=async ()=>{
//   const response= await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   console.log(response)
// }

/*

async function getData(){

  //js behaves async when calling api so when we call an api it will come little bit late and will be shw in later respnse so to overcome tht
  //we will make our function aysnchronous using async keyword and fetch await so function will wait until api is fetched

  const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')

  console.log(response.json())
}

*/

  return (
    <div>
      <button onClick={getData}>get data</button>
      <div>
        {data.map(function(elem,idx){

          return <h3>Hello, {elem.author} {idx}</h3>
        })}
        
      </div>
    </div>
  )
}

export default App
