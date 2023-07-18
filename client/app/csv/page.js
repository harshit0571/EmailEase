"use client";
import DataTable from "@/components/Datagrid";
import { Button } from "@mui/material";
import { data } from "autoprefixer";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
import Papa from "papaparse";
import { useEffect, useState } from "react";

const page = () => {
  const [CSVfile, setCSVfile] = useState("");
  const [rows, setrows] = useState([]);
  const [emailArrays, setemailArrays] = useState([]);
  console.log(CSVfile);

  useEffect(() => {
    const AddEmails = () => {
      console.log(rows);
      rows.forEach((data) => {
        console.log(data.email);
        setemailArrays((email) => [...email, data.email]);
      });
    };
    AddEmails();
  }, [rows]);

  const Send = async () => {
    const response = await fetch("/api/Send", {
      method: "POST",
      body: JSON.stringify({ array: emailArrays }),
    });
    const data = await response.json();
    console.log(data);
  };
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        setrows(result.data);
        event.target.value = "";
      },
    });
  };

  return (
    <main className="flex w-full flex-col items-center justify-center relative  p-4  ">
      <Button
        variant="contained"
        className="bg-blue-500 m-5 mb-5 cursor-pointer"
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
      <button
        className="px-4 mt-10 py-2 border-red-500 border-x-2 border-y-2 text-red-600 bg-white rounded-lg "
        onClick={() => {
          setrows([]);
        }}
      >
        clear data
      </button>
    </main>
  );
};

export default page;
