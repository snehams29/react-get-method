import "./App.css";
import React, { useEffect, useState } from "react";
 
function App() {
  // a separate nodejs application is running in backend
  // get all users endpoint
  const url = "http://localhost:9500/all";
 
  let [data, setData] = useState([]);
  // always call api inside useEffect as it is a functional component.
  useEffect(() => {
    fetch(url).then((result) => {
      result.json().then((response) => {
        setData(response.data);
      });
    });
  }, []); // [] helps to run only 1 time.
  // console.log("api result", data);
 
  return (
    <div className="App">
      <h1>Get API call</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default App;