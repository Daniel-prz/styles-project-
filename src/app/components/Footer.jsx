import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="pb-8 pt-5 footer w-full h-full flex justify-center">
      <ul className="flex flex-row gap-28">
        <li>
          <Link target="blank" href="/">
            GitHub
          </Link>
        </li>
        <li>
          <Link target="blank" href="/">
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  );
}
