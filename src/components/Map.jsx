import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <p>lat: {lat}</p>
      <p>lng: {lng}</p>
      <button onClick={() => setSearchParams({ lat: 40, lng: 50 })}>
        Change coordinates
      </button>
    </div>
  );
}

export default Map;
