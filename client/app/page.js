"use client";
import DataTable from "@/components/Datagrid";
import { Button } from "@mui/material";
import { data } from "autoprefixer";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
import Papa from "papaparse";
import { useState } from "react";

export default function Home() {
  const [CSVfile, setCSVfile] = useState("");
  const [rows, setrows] = useState([]);
  console.log(CSVfile);

  const Send = async () => {
    const response = await fetch("/api/Send", {
      method: "POST",
    });
    const data = await response.json();
    console.log(data);
  };
  const changeHandler = (event) => {
    console.log(event.target.files);
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        setrows(result.data);
        console.log(result);
      },
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center  p-4 sm:p-24 ">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-bold font-sans text-5xl sm:text-8xl text-red-600 m-4">
          Email-Ease
        </h1>
        <p className="text-red-400 text-2xl font-serif">
          Send bulk emails to users
        </p>
      </div>
      <Button
        variant="contained"
        className="bg-blue-500 m-5 cursor-pointer"
        startIcon={<CloudUploadIcon />}
      >
        <label htmlFor="file_input" className="cursor-pointer">
          upload csv file
        </label>
        <input
          id="file_input"
          type="file"
          onChange={changeHandler}
          className="hidden cursor-pointer"
        />
      </Button>
      <DataTable rows={rows} />
      <button
        className="px-4 mt-10 py-2 bg-red-600 text-white border-white rounded-lg "
        onClick={Send}
      >
        Send
      </button>
    </main>
  );
}
