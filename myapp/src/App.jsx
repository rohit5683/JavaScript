import React, {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState({}) 
  const [loading, setLoading] = useState(true)
      useEffect(()=>{
          const fetchRequest = async ()=> {
            try {
              const response = await fetch('https://api.publicapis.org/entries')
              const result = await response.json()
              setData(result.entries)
              setLoading(false)
            } catch (error) {
              console.log('Failed to Fetch Data',error);
              setLoading(false)
            }
          }
          fetchRequest()
      },[])
  return (
    <>
    <div className="apiCalls">
    <h1>Data</h1>
      {loading?(<p>Loading...</p>):(
        <div>
          <ul>
            {
              data?.map((api, index)=>(
                <li key={index}>
                <p>Sl. No.{index}</p>
                <strong>{api.API}</strong> - {api.Description} - <p>{api.Category}</p>
              </li>
              ))
            }
          </ul>
        </div>
      )}
    </div>
    </>
  )
}

export default App;
