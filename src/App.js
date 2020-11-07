import React,{useState,useEffect} from 'react'
import Card from './Card'
import db from './firebase'
import firebase from 'firebase'
import './App.css'

function App() {
  const [Name, setName] = useState("")
  const [Message, setMessage] = useState("")
  const [Arr, setArr] = useState([])


  useEffect(() => {
    db.collection('Messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setArr(snapshot.docs.map(doc=>doc.data()))
    })
  }, [])


  useEffect(() => {
    setName(prompt("Enter Name: "))
    }, [])


  const SendMessage = () =>{

    db.collection('Messages').add({
      Message: Message,
      Name: Name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage("")
  }
  return (
    <div>
      <div className="header">
          <h3>Welcome {Name}</h3>
          <div className= "field">
              
            <label>Message</label>
            <input value={Message} onChange={event=>setMessage(event.target.value)}>
            </input>
            
            <button onClick={SendMessage} disabled={ !Message}>Send</button>
          </div>
      </div>

      {Arr.map(i=>(
        <div>
          <p><Card Name={Name} Message={i}/></p>
        </div>
      ))}
    </div>
  )
}

export default App
