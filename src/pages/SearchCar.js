import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import './Pages.css'
import { Link } from "react-router-dom";

const SearchCar = () => {
  const [carData, setCardata] = useState([]);

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
      .then((res) => {
        setCardata(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  }, []);


  return (
    <div>
      <Navbar />
    <div className="card-wrapper">
      {!!carData.length
        ? carData.map((item) => (
            <div className="car-card">
              <div className="car-image">
              <img src={item.image} />
              </div> 
              <p>{item.name}</p>
              <h2>{item.price}/ hari</h2>
              <p>Lorem ipsum</p>
              <Link to={`/detailmobil/${item.id}`}>
              <button>Pilih Mobil</button>
              </Link>
            </div>
          ))
        : null}
        </div>

     
    </div>
  );
};

export default SearchCar;
