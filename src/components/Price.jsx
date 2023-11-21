import { useOutletContext } from "react-router-dom";
export default function Price() {
  const { price } = useOutletContext();
  return (
    <h3 className="host-van-price">
      ${price}
      <span>/day</span>
    </h3>
  );
}
