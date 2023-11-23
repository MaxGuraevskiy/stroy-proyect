"use client";
import CoolText from "./coolText/coolText";
import Table from "./table/table";
import Stars from "./stars/stars";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-10">
      <div className="">
        <h1 className=" font-mono">СтройПроект</h1>
        <CoolText />
        <h3 className="text-center font-mono">
          Сайт на реконструкции, попробуйте зайти позже)
        </h3>
      </div>

      <a
        href="StroyProyectPortfolio.pdf"
        download={true}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 z-[1000]"
      >
        Портфолио
      </a>
      <Stars />
    </main>
  );
}
