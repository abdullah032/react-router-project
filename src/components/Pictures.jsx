import { useOutletContext } from "react-router-dom";

export default function Pictures() {
  const { imageUrl } = useOutletContext();
  return <img src={imageUrl} className="host-van-detail-image" />;
}
