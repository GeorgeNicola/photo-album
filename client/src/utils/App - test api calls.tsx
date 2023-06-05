import { useState, useEffect } from 'react'

function App() {
  const [usersList, setUsersList] = useState([])

  const getAllUsersMongo = async () => {
    let data = await fetch("http://localhost:8080/usermongo/getAllUsers");
    let result = await data.json()
    
    setUsersList(result)
    console.log("MongoDB:", result)
  }

  const getAllUsers = async () => {
    let data = await fetch("http://localhost:8080/user/getAllUsers");
    let result = await data.json()
    
    console.log("PostgreSQL", result)
  }

  useEffect(() => {
    getAllUsers().catch(console.error);
    getAllUsersMongo().catch(console.error);
  }, [])

  return (
    <div className="App">
      { 
        usersList.map((user, i) => {
          return(
            <p key={i}> <b>{user._id}</b> {user.name} {user.email} {user.age}</p>
          )
        })
      }
    </div>
  )
}

export default App
