import { Metadata } from "next";
import HomeClient from "./HomeClient";
import ErrorHome from "./ErrorHome";

export const metadata: Metadata = {
  title: "Blog site to read latin documents",
  description: "Blog site to consulting latin documents",
  openGraph: {
    title: "Blog site to read latin documents",
    description: "Blog site to consulting latin documents",
    url: "http://localhost:3000",
    type: "website",
    images: [
      {
        url: "/og1.png",
        width: 1200,
        height: 630,
        alt: "Immagine del Blog"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "Blog site to consulting latin documents",
    creator: "@creator",
    images: "/og1.png"
  }
}

export default async function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "headline": "Blog site to read latin documents",
    "author": {
      "@type": "Person",
    },
    "description": "Blog site to consulting latin documents",
  };

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 3600,
    }
  });
  if (!res.ok) return <ErrorHome />
  const result = await res.json();
  return (
    <section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }} />
      <HomeClient dataBlog={result} />
    </section>
  );
}
