import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const SearchCar = () => {
  const [carData, setCardata] = useState([]);

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/customer/car")
      .then((res) => {
        setCardata(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Navbar />

      {!!carData.length
        ? carData.map((item) => (
            <div>
              <img src={item.image} />
              <p>{item.name}</p>
              <h2>{item.price}/ hari</h2>
              <p>Lorem ipsum</p>
            </div>
          ))
        : null}

      <h1>
        <p>Search Car</p>
      </h1>
    </div>
  );
};

export default SearchCar;
