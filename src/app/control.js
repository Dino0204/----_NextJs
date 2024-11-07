"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Control() {
  const params = useParams();
  const id = params.id;

  return (
    <ul>
      <li>
        <Link href="/create">create</Link>
      </li>

      {id && (
        <>
          <li>
            <Link href="/update/1">update</Link>
          </li>
          <li>
            <input type="button" value="delete"></input>
          </li>
        </>
      )}
    </ul>
  );
}
