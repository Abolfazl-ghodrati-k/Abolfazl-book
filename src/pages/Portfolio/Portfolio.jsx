import React, { useEffect } from "react";
import App from "./App"
import { useLocation, useNavigate } from "react-router";

function Portfolio() {
  const navigate = useNavigate();
  const {state, pathname} = useLocation();

  useEffect(() => {
    if (window.innerWidth < 850) {
      navigate("/portfolio", { state: { redirect: pathname } });
    }
    function handleResize() {
      if (window.innerWidth < 850) {
        navigate("/portfolio", { state: { redirect: pathname } });
      } else {
        navigate(state?.redirect ?? '/')
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navigate, pathname, state?.redirect]);

  return (
     <App />
  );
}

export default Portfolio;
