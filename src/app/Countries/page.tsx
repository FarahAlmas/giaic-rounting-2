import Link from "next/link";
import React from "react";



export default function Countries(){
  return<>
<h1>Countries</h1>
  <h2>Select any Countries.</h2>
 
  <Link href={"/Countries/pakistan"}><li>Pakistan</li></Link>
   <Link href={"/Countries/india"}><li>India</li></Link>
  <Link href={"/Countries/banglabesh"}><li>Banglabesh</li></Link>
  <Link href={"/Countries/china"}><li>China</li></Link>
 <Link href={"/Countries/afghanistan"}> <li>Afghanistan</li></Link>
 
  </>
}