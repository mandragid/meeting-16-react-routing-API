import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const SearchCar = () => {
  const [carData, setCardata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setCardata(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

useEffect (() => {
    axios
    .get('link')
    .then((res) => {
        setCardata(res.data)
    } )
},[])

  return (
    <div>
      <Navbar />

      <h1>
        <p>Search Car</p>
      </h1>
    </div>
  );
};

export default SearchCar;
