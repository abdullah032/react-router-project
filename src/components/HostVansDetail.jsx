import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet, Link } from "react-router-dom";

export default function HostVansDetail() {
  let [currentVan, setCurrentVan] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    fetch("/api/host/vans/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.vans[0]);
        return setCurrentVan(data.vans[0]);
      });

    console.log(currentVan);
  }, [id]);

  if (!currentVan) {
    return <h2>Loading....</h2>;
  }

  return (
    <section>
      <Link to={".."} relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to={"."}
            end
            className={({ isActive }) => (isActive ? "link-navigation" : "")}
          >
            Details
          </NavLink>
          <NavLink
            to={`price`}
            className={({ isActive }) => (isActive ? "link-navigation" : "")}
          >
            Price
          </NavLink>
          <NavLink
            to={`pictures`}
            className={({ isActive }) => (isActive ? "link-navigation" : "")}
          >
            Pictures
          </NavLink>
        </nav>
        <Outlet context={currentVan} />
      </div>
    </section>
  );
}
