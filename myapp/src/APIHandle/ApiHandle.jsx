import React, {useState, useEffect} from 'react'

const ApiHandle = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchRequest = async ()=>{
        try {
          const response = await fetch('https://api.publicapis.org/entries')
          const result = await response.json()
          setData(result.entries)
          setLoading(false)
        } catch (error) {
          console.log('Failed to Load Data from API', error);
          setLoading(false)
        }
      }
      fetchRequest()
  })
  return (
    <div>
      <h1>Data Loading</h1>
      {
        loading ? (<p>Loading Data...</p>) : (<div className='ApiDataDisplay'>
          <ul>
            {
              data?.map((api, index)=>(
                <li key={index}>
                  <strong>{api.API}</strong> - {api.Description}</li>
              ))
            }
          </ul>
        </div>)
      }
    </div>
  )
}

export default ApiHandle