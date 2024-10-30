"use client";
import Link from "next/link";

const Hello = () => {
  return (
    <div>
      <Link href={"/test"}>hello</Link>
    </div>
  );
};

export default Hello;
