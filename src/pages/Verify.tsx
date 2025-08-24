import * as React from 'react';

export default function Verify() {
  async function startVerification() {
    const res = await fetch('/.netlify/functions/create-checkout', { method: 'POST' });
    const { url } = await res.json();
    window.location.href = url;
  }
  return (
    <div className="max-w-md mx-auto py-16 text-center">
      <h1 className="text-2xl font-bold mb-4">Verify your account (€1)</h1>
      <p className="mb-6 opacity-80">This small payment helps keep profiles real.</p>
      <button onClick={startVerification} className="px-5 py-3 rounded-lg bg-teal-600 text-white">
        Continue with Stripe
      </button>
    </div>
  );
}
