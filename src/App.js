import "./styles.css";
import { useState, useEffect } from "react";
import Anime from "./Anime.js";

export default function App() {
  const [error, setError] = useState(null);
  const [array, setArray] = useState(null);
  const delay = 500;
  const api =
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/74726f";

  useEffect(() => {
    const fetchAPIData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(fetch(api).then((response) => response.text()));
        }, 1000);
      });
    };
    fetchAPIData()
      .then((result) => {
        setArray(result.split(""));
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [array]);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : array != null ? (
        <Anime array={array} delay={delay} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
