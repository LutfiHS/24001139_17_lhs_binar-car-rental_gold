import "../../../Root.css";
import "./SearchCar.css";
import "./CardCar.css";
import { useState, useEffect } from "preact/hooks";
import axios from "axios";

const SearchCar = () => {
  const [menu, setMenu] = useState([]);
  const [name_car, setName_car] = useState("");
  const [cat_car, setCat_car] = useState("default");
  const [lower_car, setLower_car] = useState("default");
  const [higher_car, setHigher_car] = useState("default");
  const [status_car, setStatus_car] = useState([]);
  const [page, setPage] = useState(1);

  const getMenu = () => {
    if (
      cat_car !== "default" &&
      lower_car !== "default" &&
      higher_car !== "default"
    ) {
      axios
        .get(
          // `https://api-car-rental.binaracademy.org/customer/v2/car?name=${name_car}&category=${cat_car}&isRented=${status_car}&minPrice=${lower_car}&maxPrice=${higher_car}&page=1&pageSize=3`
          `https://api-car-rental.binaracademy.org/customer/v2/car?name=${name_car}&category=${cat_car}&minPrice=${lower_car}&maxPrice=${higher_car}&page=${page}&pageSize=3&isRented=${status_car}`
        )
        .then((res) => {
          if (res?.data?.cars?.length !== 0) {
            console.log(res);
            console.log("success get API Filter");
            const data = res?.data?.cars;
            // setlengthData(res?.data?.cars.lenghtData);
            setMenu(data);
          } else {
            alert("data not found :(");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      axios
        .get(
          `https://api-car-rental.binaracademy.org/customer/v2/car?&page=${page}&pageSize=3`
        )
        .then((res) => {
          if (res?.data?.cars?.length !== 0) {
            console.log("success get API default");
            const data = res?.data?.cars;
            // setlengthData(res?.data?.cars.lenghtData);
            setMenu(data);
          } else {
            alert("data not found :(");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const handleChange_Name = (e) => {
    setName_car(e.target.value);
  };
  const handleChange_Cat = (e) => {
    setCat_car(e.target.value);
  };
  const handleChange_Price = (e) => {
    if (e.target.value === "1") {
      setLower_car(0);
      setHigher_car(399999);
    } else if (e.target.value === "2") {
      setLower_car(400000);
      setHigher_car(600000);
    }
  };
  const handleChange_Status = (e) => {
    if (e.target.value === "1") {
      setStatus_car("true");
    } else if (e.target.value === "2") {
      setStatus_car("false");
    }
  };
  // tambahankan search
  // console.log(menu);

  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    getMenu();
  }, [page]); //[name_car, cat_car, lower_car, higher_car, status_car]);

  return (
    <div>
      <div className="search-wrapper">
        <div className="search-container">
          <div className="box-name">
            <p>Nama Mobil</p>
            <input
              onChange={handleChange_Name}
              type="input-search"
              placeholder="ketik nama/tipe mobil"
            />
          </div>
          <div className="box-capacity-car">
            <p>Kategori</p>
            <select
              onChange={handleChange_Cat}
              defaultValue="default"
              name=""
              id=""
            >
              <option style="display:none" value="default" disabled>
                Masukan Kapasitas Mobil
              </option>
              <option value="small">2 orang</option>
              <option value="medium">4 orang</option>
              <option value="big">8 orang</option>
            </select>
          </div>
          <div className="box-price-car">
            <p>Harga</p>
            <select
              onChange={handleChange_Price}
              defaultValue="default"
              name=""
              id=""
            >
              <option style="display:none" value="default" disabled>
                Masukan Harga Sewa per Hari
              </option>
              <option value="1">{"< Rp 400.000"}</option>
              <option value="2">{"Rp. 400.000 - Rp. 600.000"}</option>
            </select>
          </div>
          <div onChange={handleChange_Status} className="box-status-rent">
            <p>Status</p>
            <select defaultValue="default" name="" id="">
              <option value="1">Disewa</option>
              <option value="2">Tersedia</option>
            </select>
          </div>
          <a
            onClick={(e) => {
              e.preventDefault();
              getMenu();
            }}
            href=""
          >
            Cari Mobil
          </a>
        </div>
      </div>

      <div className="wrapper-white catalog-wrapper">
        <div className="catalog-container">
          {menu.map((item) => (
            <div className="card-container" key={item.id}>
              <img src={item?.image} alt={item?.name} />
              <p>{item?.name}</p>
              <p>{item?.price} / hari</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit, error.
              </p>
              <a href="#">Pilih mobil</a>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="btn-left"
          ></button>
          <h2>{page}</h2>
          <button
            onClick={() => setPage(page + 1)}
            className="btn-right"
          ></button>
        </div>
      </div>
    </div>
  );
};
export default SearchCar;
