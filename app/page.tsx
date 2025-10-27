export const dynamic = 'force-dynamic'; 

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store', 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const products = await res.json();

  return (
    <main>
      <h1>Product List (SSR)</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '1rem' }}>
            <a href={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
              <strong>{product.title}</strong> — ${product.price}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
