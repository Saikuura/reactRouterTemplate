import { useEffect, useState } from "react";
import "./SubPageTwo.css";

export const SubPageTwo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await response.json();
      setData(json);
      console.log(json);
    }

    fetchData();
  }, []);
  return (
    <section className="user">
      {data.map((user)=>(
        <div className="text2" key={user.id}>
          <h4>{user.name}</h4>
          <h2>{user.userName}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </section>

  );
};
