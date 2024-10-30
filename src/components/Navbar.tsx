import React from "react";
import Link from "next/link";


export default function Navbar(){
  return<>
  <ul>
    <Link href={"/"}><li>Home</li></Link>
    <Link href={"./About"}><li>About</li></Link>
    <Link href={"./Contact"}><li>Contact</li></Link>
    <Link href={"./Countries"}><li>Countries</li></Link>
  </ul>
  </>
}