import Link from "next/link";

export default async function Home() {
  
  return (
    <div className="relative flex flex-1 w-full bg-black">
      Il Tuo Blog personale con tutti i post consultabili
      <Link href={'/blog'}>Vai al blog</Link>
    </div>
  );
}
