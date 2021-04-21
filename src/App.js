import './App.css';
import contacts from "./contacts.json";
import { useState } from 'react'

function App() {

  const firstFive = contacts.slice(0, 5);
  const [showContacts, setShowContacts] = useState(firstFive)
  const [contact, setContact] = useState(0)
  const getRandomContact = () => {
    console.log("getting random celeb")
    let contactIndex = Math.floor(Math.random() * contacts.length)
    console.log(contactIndex)
    console.log(contacts[contactIndex])
    // showContacts.push(contacts[contactIndex])
    // setShowContacts([...showContacts, contacts[contactIndex]])
    let copyContacts = [...showContacts]
    copyContacts.push(contacts[contactIndex])
    setShowContacts(copyContacts)
  }

  return (

    <div className="App">
    <button onClick={getRandomContact}>Add Random Contact</button>
      <table>
        <thead>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Populariry</td>
        </tr>
        </thead>
        <tbody>
          {showContacts.map(eachContact => {
            return (
              <tr>
                <td><img src={eachContact.pictureUrl}></img></td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity}</td>
      
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
