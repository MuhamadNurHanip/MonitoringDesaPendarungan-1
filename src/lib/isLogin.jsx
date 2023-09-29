"use client";
const { useRouter } = require("next/navigation");

const IsLogin = () => {
  const router = useRouter();

  const key = localStorage.getItem("key");
  if (!key) return router.push("/login");
  alert("Anda sudah login!");
  return router.push("/");
};

export default IsLogin;
