import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://34.175.254.28:3300/api/v1/users", {
        withCredentials: true,
      })
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  function login() {
    axios({
      method: "post",
      url: "http://34.175.254.28:3300/api/v1/auth/login",
      data: {
        email: "admin@test.com",
        password: "admin1234",
      },
    }).then(function (response) {
      // handle success
      console.log(response);
    });
  }
  function register() {
    axios({
      method: "post",
      url: "http://34.175.254.28:3300/api/v1/auth/register",
      data: {
        email: "ayoub@test.com",
        name: "ayoub",
        password: "ayoub1234",
      },
    }).then(function (response) {
      // handle success
      console.log(response);
    });
  }

  console.log(data);
  return (
    <>
      <div className="sdss">
        {/* {data.map((item, i) => {
          return (
            <div className={"App-item"} key={item.id}>
              <div>
                <h3> {item.id}</h3>

                <h3> {item.location}</h3>
              </div>
            </div>
          );
        })} */}
        <button onClick={login}> login</button>
        <button onClick={register}> register</button>
      </div>
    </>
  );
}

export default App;
