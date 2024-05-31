import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="mt-8 md:mr-24 navbar">
      <ul className="flex flex-row gap-8 text-2xl ">
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/">Browse</Link>
        </li>
        <li className="hover:underline">
          <Link href="/">About Us</Link>
        </li>
      </ul>
    </div>
  );
}
