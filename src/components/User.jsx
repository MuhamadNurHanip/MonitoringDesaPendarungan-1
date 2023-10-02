"use client";
import { useSession } from "next-auth/react";

const User = () => {
  const { data } = useSession();
  return <span>{data?.user.fullname}</span>;
};

export default User;
