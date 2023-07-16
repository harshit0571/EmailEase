"use client";
import DataTable from "@/components/Datagrid";
import Image from "next/image";

export default function Home() {
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon" },
    { id: 2, lastName: "Lannister", firstName: "Cersei" },
    { id: 3, lastName: "Lannister", firstName: "Jaime" },
    { id: 4, lastName: "Stark", firstName: "Arya" },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys" },
    { id: 6, lastName: "Melisandre", firstName: null },
    { id: 7, lastName: "Clifford", firstName: "Ferrara" },
    { id: 8, lastName: "Frances", firstName: "Rossini" },
    { id: 9, lastName: "Roxie", firstName: "Harvey" },
  ];

  const Send = async () => {
    const response = await fetch("/api/Send", {
      method: "POST",
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <main className="flex min-h-screen flex-col items-center  p-4 sm:p-24 ">
      <div className="flex flex-col items-center text-center mb-24">
        <h1 className="font-bold font-sans text-5xl sm:text-8xl text-red-600 m-4">
          Email-Ease
        </h1>
        <p className="text-red-400 text-2xl font-serif">
          Send bulk emails to users
        </p>
      </div>

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
