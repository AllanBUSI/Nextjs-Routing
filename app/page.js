import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Link href="/paris">Paris</Link>
      <Link href="/marseille">Marseille</Link>
      <Link href="/lyon">Lyon</Link>
    </div>
  );
}
