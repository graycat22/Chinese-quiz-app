import { useState } from "react";
import { Navigate } from "react-router-dom";

const NotFound = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  return (
    <>
      <h3>你好！要玩吗？</h3>
      <button onClick={() => {
        setIsConfirmed(true);
      }}>
        玩！
      </button>
      {isConfirmed && <Navigate to="/" />}
    </>
  );
};

export default NotFound;