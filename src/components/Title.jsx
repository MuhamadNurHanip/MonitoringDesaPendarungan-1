"use client";
import { usePathname } from "next/navigation";

const Title = () => {
  const path = usePathname().split("/")[1];
  if (!path) return <title>Home | Desa Pendarungan</title>;
  if (path == "accounts") return <title>Akun | Desa Pendarungan</title>;
  if (path == "task") return <title>Program Kerja | Desa Pendarungan</title>;
  if (path == "progress")
    return <title>Progress Program Kerja | Desa Pendarungan</title>;
  if (path == "report")
    return <title>Laporan Program Kerja | Desa Pendarungan</title>;
  if (path == "money") return <title>Master Data | Desa Pendarungan</title>;
  if (path == "login") return <title>Login | Desa Pendarungan</title>;
};

export default Title;
