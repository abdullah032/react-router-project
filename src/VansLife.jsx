import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
function VansLife() {
  const [vans, setVans] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  let filterParam = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayVans = filterParam
    ? vans.filter((x) => x.type == filterParam)
    : vans;
  const list = displayVans.map((van) => {
    return (
      <div className="van-tile" key={van.id}>
        <Link
          to={van.id + "?"}
          state={{ search: `?${searchParams.toString()}` }}
        >
          <img src={van.imageUrl} alt="" />
          <div className="nav-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
        </Link>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    );
  });

  function coustomSearchParams(key, value) {
    let sp = new URLSearchParams(searchParams);
    console.log(sp);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }

    console.log(sp.toString());
    return `?${sp.toString()}`;
  }

  function handleParams(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  return (
    <div className="van-list-container">
      <h3>{searchParams.toString()}</h3>
      <h1>Explore our vans options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleParams("type", "simple")}
          className={`van-type simple ${
            filterParam == "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleParams("type", "luxury")}
          className={`van-type luxury ${
            filterParam == "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleParams("type", "rugged")}
          className={`van-type rugged ${
            filterParam == "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </button>
        {filterParam ? (
          <button
            onClick={() => handleParams("type", null)}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        ) : null}

        {/* <Link
          to={coustomSearchParams("type", "simple")}
          className="van-type simple"
        >
          Simple
        </Link>
        <Link to="?type=luxury" className="van-type luxury">
          Luxury
        </Link>
        <Link to="?type=rugged" className="van-type rugged">
          Rugged
        </Link>
        <Link to="." className="van-type clear-filters">
          Clear filter
        </Link> */}
      </div>

      <div className="van-list">{list}</div>
    </div>
  );
}

export default VansLife;
