import React from "react";

export default function HomePage() {
  const createCryptoPayment = async () => {
    try {
      const response = await fetch("https://api.nowpayments.io/v1/invoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "PKYN546-CJ7MB5F-PKJRKQT-7MPWVJN"
        },
        body: JSON.stringify({
          price_amount: 10,
          price_currency: "usd",
          pay_currency: "usdttrc20",
          order_description: "Telegram Bot Subscription",
          success_url: "https://t.me/PlayboyBots",
          cancel_url: "https://playboybots.com"
        })
      });

      const data = await response.json();
      if (data && data.invoice_url) {
        window.location.href = data.invoice_url;
      } else {
        alert("Payment initialization failed.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong with payment.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">PlayboyBots</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Automate your Telegram channel or group with our powerful auto-forwarding bot. Perfect for content creators, communities, and businesses.
      </p>

      <div className="bg-gray-900 text-white mb-6 w-full max-w-md p-4 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Auto-forward messages between groups/channels</li>
          <li>Easy setup and integration</li>
          <li>Reliable uptime and blazing speed</li>
          <li>Flexible subscription options</li>
        </ul>
      </div>

      <div className="bg-gray-900 text-white mb-6 w-full max-w-md p-4 text-center rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Pay with Crypto</h2>
        <p className="mb-4">Secure payments accepted in BTC, ETH, and USDT.</p>
        <button
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full"
          onClick={createCryptoPayment}
        >
          Pay Now
        </button>
      </div>

      <p className="text-sm text-gray-400">Join us on Telegram: @PlayboyBots</p>
    </div>
  );
}
