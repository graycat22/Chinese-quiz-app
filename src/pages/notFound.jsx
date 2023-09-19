import { useState } from "react";
import { Navigate } from "react-router-dom";

const NotFound = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  return (
    <>
      <h3>ページが見つかりません</h3>
      <button onClick={() => {
        setIsConfirmed(true);
      }}>
        確認
      </button>
      {isConfirmed && <Navigate to="/" />}
    </>
  );
};

export default NotFound;