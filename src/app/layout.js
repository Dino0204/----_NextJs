import Link from "next/link";
import "./globals.css";
import Control from "./control";

export const metadata = {
  title: "Web tutorial",
  description: "Generated by Dino0204",
};

export default async function RootLayout({ children }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${"topics"}`, {
    cache: "no-store",
  });
  const topics = await res.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">Web</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
