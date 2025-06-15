import React from "react";
import { Map } from "./Map"; // Certifique-se que o caminho está correto

const center = { lat: -28.2628, lng: -52.4067 }; // Passo Fundo, RS

export default function Savoir() {
  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-white mb-2 font-serif">Savoir</h1>
      <span className="text-zinc-400 mb-6">Descubra novas experiências</span>
      <div className="w-full max-w-lg rounded-2xl overflow-hidden mb-8 shadow-lg" style={{ height: 400 }}>
        <Map center={center} zoom={13} />
      </div>
      <div className="w-full max-w-lg">
        <h2 className="text-white text-lg mb-4">Popular nas proximidades</h2>
        {/* Aqui você pode mapear os restaurantes vindos da API */}
        <div className="flex flex-col gap-4">
          {/* Exemplo de restaurante */}
          <div className="bg-zinc-800 rounded-xl p-4 flex items-center justify-between">
            <div>
              <div className="text-white font-semibold">Sushi Spot</div>
              <div className="text-zinc-400 text-sm">Japonês • 4.6 ★ • 0.7 mi</div>
            </div>
            <img src="/assets/sushi.jpg" alt="Sushi Spot" className="w-16 h-16 rounded-lg object-cover" />
          </div>
          {/* Repita para outros restaurantes */}
        </div>
      </div>
    </div>
  );
}