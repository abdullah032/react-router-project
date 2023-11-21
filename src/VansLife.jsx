import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function VansLife() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const list = vans.map((van) => {
    return (
      <div className="van-tile" key={van.id}>
        <Link to={`/van/${van.id}`}>
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
  return (
    <div className="van-list-container">
      <h1>Explore our vans options</h1>
      <div className="van-list">{list}</div>
    </div>
  );
}

export default VansLife;
