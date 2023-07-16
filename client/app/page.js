"use client";
import Image from "next/image";

export default function Home() {
  const Send = async () => {
    const response = await fetch("/api/Send", {
      method: "POST",
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="flex flex-col items-center text-center mb-24">
        <h1 className="font-bold font-sans text-8xl text-red-600 m-4">
          Email-Ease
        </h1>
        <p className="text-red-400 text-2xl font-serif">
          Send bulk emails to users
        </p>
      </div>
      <button
        className="px-4 py-2 bg-red-600 text-white border-white rounded-lg "
        onClick={Send}
      >
        Send
      </button>
    </main>
  );
}
