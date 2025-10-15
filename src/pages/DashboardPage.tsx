import React from "react";

const apps = [
  { name: "Coolify", desc: "Gerenciador de containers e deploys", url: "https://coolify.samuellpassos.org" },
  { name: "n8n", desc: "Automação e fluxos inteligentes", url: "https://n8n.samuellpassos.org" },
  { name: "Portainer", desc: "Gerenciador Docker visual", url: "https://portainer.samuellpassos.org" },
  { name: "Evolution API", desc: "API de integração WhatsApp", url: "https://evolution.samuellpassos.org" },
  { name: "DeFi", desc: "IA e fluxos de conversa inteligentes", url: "https://defi.samuellpassos.org" },
  { name: "TypeBot", desc: "Fluxos conversacionais visuais", url: "https://typebot.samuellpassos.org" },
  { name: "BotExpress", desc: "Automação IA + WhatsApp", url: "https://botexpress.samuellpassos.org" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-700 mb-8 text-center">
        Painel de Ferramentas
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {apps.map((app) => (
          <div
            key={app.name}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-700">{app.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{app.desc}</p>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Acessar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

