import "./SearchCar.css";
import "./CardCar.css";
import "../../../Root.css";
import { useState, useEffect } from "preact/hooks";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchCar = () => {
  const [menu, setMenu] = useState([]);
  const [name_car, setName_car] = useState("");
  const [cat_car, setCat_car] = useState("default");
  const [lower_car, setLower_car] = useState("default");
  const [higher_car, setHigher_car] = useState("default");
  const [status_car, setStatus_car] = useState("default");
  const [page, setPage] = useState(0);
  const [lenData, setlenData] = useState(1);

  const getMenu = () => {
    if (
      cat_car !== "default" &&
      lower_car !== "default" &&
      higher_car !== "default" &&
      status_car !== "default"
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
            console.log(res?.data?.cars.length);
            const data = res?.data?.cars;
            setlenData(res?.data?.cars.length);
            setMenu(data);
          } else {
            // alert("data not found :(");
            setPage(page - 1);
          }
        })
        .catch((error) => {
          // alert("data not found :(");
          console.error("Error fetching data filter:", error);
          // setPage(0);
        });
    } else {
      // setPage(1);
      if (page !== 0) {
        axios
          .get(
            `https://api-car-rental.binaracademy.org/customer/v2/car?&page=${page}&pageSize=3`
          )
          .then((res) => {
            if (res?.data?.cars?.length !== 0) {
              console.log("success get API default");
              const data = res?.data?.cars;
              setlenData(res?.data?.cars.length);
              setMenu(data);
            } else {
              // alert("data not found :(");
              setPage(page - 1);
            }
          })
          .catch((error) => {
            // console.error("Error fetching data default:", error);
            {
              // page >= 2 ? setPage(0) : none;
              if (page >= 2) {
                setPage(0);
              }
            }
          });
      }
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

  useEffect(() => {
    if (page !== 0) {
      getMenu();
    }
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
          <div className="box-status-rent" onChange={handleChange_Status}>
            <p>Status</p>
            <select defaultValue="default" name="" id="">
              <option style="display:none" value="default" disabled>
                Pilih status
              </option>
              <option value="1">Disewa</option>
              <option value="2">Tersedia</option>
            </select>
          </div>
          <a
            onClick={(e) => {
              setPage(1);
              e.preventDefault();
              getMenu();
            }}
            href=""
          >
            Cari Mobil
          </a>
        </div>
      </div>

      {page !== 0 ? (
        <div className="wrapper-white catalog-wrapper">
          <div className="catalog-container">
            {menu.map((item) => {
              // if (item?.name !== null) {
              return (
                <div className="card-container" key={item.id}>
                  <img src={item?.image} alt={item?.name} />
                  <p>{item?.name}</p>
                  <p>{item?.price} / hari</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Impedit, error.
                  </p>
                  <Link className="btn-detail" to={`/cardetail/${item?.id}`}>
                    Pilih mobil
                  </Link>
                </div>
              );
              // }
            })}
          </div>
          <div className="button-container">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="btn-left"
            ></button>
            <h2>{page}</h2>
            <button
              disabled={3 !== lenData}
              onClick={() => setPage(page + 1)}
              className="btn-right"
            ></button>
          </div>
        </div>
      ) : (
        <div className="wrapper-white blank-wrapper"></div>
      )}
    </div>
  );
};
export default SearchCar;
