import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Navbar />
      {Object.entries.length ? (
        <div><img src={car.image}/>
        <h1>{car.name}</h1>
        <h1>{car.price}</h1>
        </div>
      ) : <h1>loading...</h1>}
    </div>
  );
};

export default CarDetail;
