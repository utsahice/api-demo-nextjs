'use client'; 

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Failed to load products</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
