import { useEffect, useState } from "react";
import {
  Link,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
export default function VansDetails() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  const { state } = useLocation();

  return (
    <div className="van-detail-container">
      <Link
        to={`..${state?.search || ""}`}
        relative="path"
        className="back-button"
      >
        &larr; <span>Back to all vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
