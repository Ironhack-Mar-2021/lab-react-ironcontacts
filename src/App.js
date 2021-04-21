import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  // const firstFive = contacts.slice(0, 5);
  let theContacts = [...contacts];
  const [showContacts, setShowContacts] = useState(theContacts.splice(0, 5));
  const [restOfContacts, setRestOfContacts] = useState(theContacts);

  const getRandomContact = () => {
    let contactIndex = Math.floor(Math.random() * restOfContacts.length);
    let copyContacts = [...showContacts];
    let copyRestOfContacts = [...restOfContacts];
    copyRestOfContacts.splice(contactIndex, 1);
    copyContacts.push(restOfContacts[contactIndex]);
    setShowContacts(copyContacts);
    setRestOfContacts(copyRestOfContacts);
  };

  const sortName = () => {};

  const sortPopularity = () => {};
  console.log(showContacts, restOfContacts);
  return (
    <div className="App">
      <button onClick={getRandomContact}>Add Random Contact</button>
      <button>Name</button>
      <button>Popularity</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Populariry</td>
          </tr>
        </thead>
        <tbody>
          {showContacts.map((eachContact) => {
            return (
              <tr>
                <td>
                  <img src={eachContact.pictureUrl} />
                </td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
