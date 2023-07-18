"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
const Navigation = () => {
  const inActiveLink = "flex gap-2 p1";
  const [Show, setShow] = useState(false);
  const activeLink =
    inActiveLink + " text-blue-700 font-semibold p-2 rounded-lg pr-0 bg-white";

  const pathName = usePathname();
  return (
    <aside className="text-white p-2  mb-4 sticky top-0 z-20 bg-blue-900">
      <div
        className="flex text-lg font-semibold gap-2 cursor-pointer"
        onClick={() => {
          setShow((prevShow) => !prevShow);
        }}
      >
        <MarkEmailReadIcon />
        <span className="">Email Ease Menu</span>
      </div>
      {Show && (
        <nav className="flex flex-col gap-4 p-2 mt-2 duration-150">
          <Link
            href="/"
            className={pathName === "/" ? activeLink : inActiveLink}
            onClick={() => {
              setShow(false);
            }}
          >
            <HomeIcon />
            Dashboard
          </Link>
          <Link
            href="/csv"
            className={pathName === "/csv" ? activeLink : inActiveLink}
            onClick={() => {
              setShow(false);
            }}
          >
            <InsertDriveFileIcon />
            CSV
          </Link>

          <Link
            href="/settings"
            className={pathName === "/settings" ? activeLink : inActiveLink}
            onClick={() => {
              setShow(false);
            }}
          >
            <SettingsIcon />
            Settings
          </Link>
        </nav>
      )}
    </aside>
  );
};

export default Navigation;
