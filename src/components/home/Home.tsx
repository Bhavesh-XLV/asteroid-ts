import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [num, setNum] = useState<number | string>(0);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=L6AW6ZMaTbURc0Kjh0eEPcbJDQmaqlWDjqVSAiHW"
      )
      .then((res) => {
        setData([res.data]);
      })
      .catch(() => {
        alert("Please check internet connection");
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    getData(num);
  };

  const random = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    let calling_id = Math.floor(Math.random() * 19);
    let id = data[0].near_earth_objects[calling_id].id;
    getData(id);
  };
  const getData = (num: number | string) => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/${num}?api_key=L6AW6ZMaTbURc0Kjh0eEPcbJDQmaqlWDjqVSAiHW`
      )
      .then((res) => {
        setLoading(false);
        navigate("/asteroidData", { state: res.data });
      })
      .catch(() => {
        setLoading(false);
        alert("please enter valid name");
      });
  };
  return (
    <div className="vertically_center">
      <div>
        <input
          className="Input"
          type="number"
          placeholder="Enter Asteroid ID"
          onChange={handleChange}
        />
      </div>
      <div className="button_center">
        <button
          className="Button"
          // disabled={num.length === 0 ? true : false}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button className="Button" onClick={random}>
          Random Asteroid ID
        </button>
      </div>
      <div>{loading ? <h1>Loading...</h1> : ""}</div>
    </div>
  );
};

export default Home;
