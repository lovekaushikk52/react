import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const [userData,setUserData]=useState([])
  const [index,setIndex]=useState(1)

  const getData=async ()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data)
      
    }

    useEffect(function(){
      getData()
    },[index])


    let printUserData=<h3 className='text-gray-400 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading........</h3>

    if(userData.length>0){
      printUserData=userData.map(function(elem,idx){

        
        return <div key={idx}>
          {/* importing card */}
          <Card elem={elem}/>
        </div>
      })
    
  }
  return (
    <div className='bg-black h-screen text-white overflow-auto p-4 scrollbar-none'>

    <div className='flex flex-wrap gap-4 p-5'>
      {printUserData}
    </div >
      <div className='flex justify-center items-center gap-4 m-5 p-5 '>

        <button style={{opacity:index==1?0.5:1}}
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])

          }
        }}
         className='bg-amber-500 text-sm cursor-pointer text-black rounded px-4 py-2 font-semibold active:scale-95 hover:bg-white  '>prev
         </button>

         <h4>page {index}</h4>

      <button 
      onClick={()=>{
        setIndex(index+1)
        setUserData([])

      }}
      className='bg-amber-500 text-sm cursor-pointer text-black rounded px-4 py-2 font-semibold active:scale-95 hover:bg-white '>next</button>
      </div>
    </div>
  )
}

export default App




/*
========================================================
              PROJECT WORKFLOW / REVISION
========================================================

1. App component starts.
   ↓
2. userData is initially an empty array [].
   index is initially 1.
   ↓
3. useEffect() runs when the component loads.
   ↓
4. useEffect calls getData().
   ↓
5. getData() sends an Axios GET request to Picsum API.
   It asks for:
      - page = current index
      - limit = 30 images
   ↓
6. API sends back an array of 30 photo objects.
   ↓
7. setUserData(response.data) stores those photos in state.
   ↓
8. React re-renders App because state changed.
   ↓
9. userData.length > 0 becomes true.
   ↓
10. map() loops through every photo.
   ↓
11. For every photo, <Card elem={elem}/> is created.
   ↓
12. The photo object is passed from App.jsx to Card.jsx
    through props.
   ↓
13. Card.jsx displays:
       - image
       - author name
       - link to the original photo
   ↓
14. User clicks NEXT.
   ↓
15. index increases by 1.
   userData is cleared using setUserData([]).
   ↓
16. Because index changed, useEffect runs again.
   ↓
17. getData() requests the next page.
   ↓
18. New data is stored in userData.
   ↓
19. React re-renders and new cards appear.

PREVIOUS BUTTON:
   ↓
If index > 1:
   index decreases by 1
   ↓
userData is cleared
   ↓
useEffect runs
   ↓
previous page data is fetched
   ↓
cards appear again.

========================================================
*/