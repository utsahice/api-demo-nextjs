import Link from "next/link";
import { resolve } from "path";
export default async function ProductPage({ params }) {
  const { id } = await params;
  await new Promise((resolve)=> setTimeout(resolve,2500))
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 10 }, 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  const product = await res.json();

  return (
    <main>
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        width={200}
        style={{ borderRadius: '8px' }}
      />
      <p>{product.description}</p>
      <p>
        <strong>${product.price}</strong>
      </p>
      <Link href="/">Back to products</Link>
    </main>
  );
}
