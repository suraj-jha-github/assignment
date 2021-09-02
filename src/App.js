import axios from "axios";
import React, { useState } from "react";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Show from "./components/Show";

const App = () => {
  const [loading, setLoading] = useState();
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(true);

  const fetchData = async () => {
    setShow(false);
    setLoading(true);
    const { data } = await axios.get("https://reqres.in/api/users?page=1");
    setUser(data.data);
    setLoading(false);
  };
  console.log(user);

  return (
    <>
      <nav className="navbar">
        <h2>Assignment</h2>
        <button onClick={fetchData}>Get Users</button>
      </nav>
      <main>
        {show ? (
          <Show />
        ) : (
          <div className="main">
            {loading ? (
              <Loading />
            ) : (
              <div className="cards">
                {user.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
};

export default App;