import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  return (
    <>
      <h2>ありがとうございました</h2>

      <button onClick={() => setIsConfirmed(true)}>もどる</button>

      {isConfirmed && <Navigate to="/" />}
    </>
  );
};

export default About;
