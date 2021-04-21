import './App.css';
import contacts from "./contacts.json";

function App() {
  const firstFive = contacts.slice(0, 5);
  return (
    <div className="App">
      <table>
        <thead>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Populariry</td>
        </tr>
        </thead>
        <tbody>
          {firstFive.map(eachContact => {
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
