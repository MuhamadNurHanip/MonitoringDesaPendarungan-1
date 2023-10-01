"use client";
const { SessionProvider } = require("next-auth/react");

const Provider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
