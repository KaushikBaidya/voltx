import { useEffect, useState } from 'react'
import './App.css'
import { db } from './firebaseConfig'
import { collection, getDocs } from '@firebase/firestore'

function App() {
  const [users, setUsers] = useState([])
  const userCollection = collection(db, 'users')
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollection)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers()
  }, [userCollection])
  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div>
            <p>Name: {user.name} </p>
            <p>age: {user.age} </p>
          </div>
        )
      })}
    </div>
  )
}

export default App
