"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: false,
    });
  }, []);
  return null;
};

export default AOSInit;
