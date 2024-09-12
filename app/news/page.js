import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/link1">Link 1</Link>
        </li>
        <li>
          <Link href="/news/link2">Link 2</Link>
        </li>
        <li>
          <Link href="/news/link3">Link 3</Link>
        </li>
      </ul>
    </>
  );
}
