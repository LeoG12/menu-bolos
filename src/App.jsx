import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WHATSAPP_NUMBER = "244999999999";

const produtos = [
  {
    nome: "Mini bolos",
    imagem: "/src/assets/images/bolo1.jpg",
    descricao: "Pequenos e deliciosos bolos individuais.",
    preco: "R$ 15,00",
    info: "Sabores: chocolate, baunilha e morango."
  },
  {
    nome: "Bolas de Berlim",
    imagem: "/images/bolo2.jpg",
    descricao: "Tradicionais e recheadas, irresistíveis!",
    preco: "R$ 12,00",
    info: "Recheios: creme, chocolate e doce de leite."
  },
  {
    nome: "Argolas e Charutos",
    imagem: "/images/bolo3.jpg",
    descricao: "Doces clássicos para acompanhar o café.",
    preco: "R$ 10,00",
    info: "Massa leve e crocante, feitos no dia."
  },
  {
    nome: "Mousse",
    imagem: "/images/bolo4.jpg",
    descricao: "Sobremesa cremosa e deliciosa.",
    preco: "R$ 18,00",
    info: "Sabores: maracujá, chocolate e limão."
  },
  {
    nome: "Bolo de chocolate 🍫",
    imagem: "/images/bolo_chocolate.jpg",
    descricao: "Clássico e irresistível para os amantes de chocolate.",
    preco: "R$ 40,00",
    info: "Cobertura de ganache com recheio cremoso."
  },
  {
    nome: "Bolo no pote",
    imagem: "/images/bolo_pote.jpg",
    descricao: "Prático e cheio de sabor em cada camada.",
    preco: "R$ 8,00",
    info: "Camadas de bolo, creme e frutas."
  },
  {
    nome: "Bolo de Ginguba",
    imagem: "/images/bolo_ginguba.jpg",
    descricao: "Sabor autêntico com amendoim torrado.",
    preco: "R$ 35,00",
    info: "Com cobertura crocante de amendoim."
  },
  {
    nome: "Bolo de frutas",
    imagem: "/images/bolo_frutas.jpg",
    descricao: "Leve, fresco e cheio de sabores naturais.",
    preco: "R$ 32,00",
    info: "Feito com frutas da estação."
  },
  {
    nome: "Bolos vulcões",
    imagem: "/images/bolo_vulcao.jpg",
    descricao: "Com recheio que transborda a cada fatia.",
    preco: "R$ 45,00",
    info: "Recheio de chocolate, doce de leite ou morango."
  },
  {
    nome: "Bolo caseiro",
    imagem: "/images/bolo_caseiro.jpg",
    descricao: "Tradicional, simples e feito com carinho.",
    preco: "R$ 28,00",
    info: "Perfeito para o café da tarde."
  },
  {
    nome: "Bolo de casamento",
    imagem: "/images/bolo_casamento.jpg",
    descricao: "Elegância e sabor para momentos especiais.",
    preco: "Sob consulta",
    info: "Personalizado com decoração exclusiva."
  },
  {
    nome: "Bolo de Chantilly",
    imagem: "/images/bolo_chantilly.jpg",
    descricao: "Suave, leve e decorado com perfeição.",
    preco: "R$ 38,00",
    info: "Coberto com chantilly fresco e frutas."
  }
];

function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-2xl overflow-hidden shadow ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export default function App() {
  const [ativo, setAtivo] = useState(null);

  const toggleCard = (index) => setAtivo(ativo === index ? null : index);

  const pedirWhatsApp = (produto) => {
    const mensagem = `Olá! Gostaria de pedir o *${produto.nome}* (${produto.preco}).`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50 text-gray-800 scroll-smooth">
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="font-extrabold text-pink-700 text-xl">Doçuras da Leo</a>
          <nav className="space-x-4 text-sm md:text-base">
            <a href="#inicio" className="hover:text-pink-700">Início</a>
            <a href="#cardapio" className="hover:text-pink-700">Cardápio</a>
            <a href="#contato" className="hover:text-pink-700">Contato</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="bg-gradient-to-br from-pink-100 via-rose-50 to-yellow-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-pink-800">
              Bolos & Doces feitos com carinho 💖
            </h1>
            <p className="mt-4 text-gray-700 md:text-lg">
              Sabor de casa, ingredientes selecionados e aquele toque especial para
              tornar seus momentos inesquecíveis.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#cardapio" className="px-5 py-3 rounded-2xl shadow bg-pink-600 text-white hover:bg-pink-700 transition">
                Ver Cardápio
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Quero fazer um pedido.")}`}
                target="_blank"
                className="px-5 py-3 rounded-2xl shadow bg-green-500 text-white hover:bg-green-600 transition"
              >
                Pedir pelo WhatsApp 📲
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img src="/images/bolo_chocolate.jpg" alt="Bolo de chocolate" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-3 shadow-xl hidden md:block">
              <p className="text-sm"><span className="font-semibold">+20</span> sabores disponíveis</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cardapio" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-12">🍰 Cardápio de Bolos & Doces</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {produtos.map((produto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => toggleCard(index)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleCard(index)}
              tabIndex={0}
              className="cursor-pointer focus:outline-none focus:ring-4 focus:ring-pink-300 rounded-2xl"
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform bg-white">
                <img src={produto.imagem} alt={produto.nome} className="w-full h-48 object-cover" />
                <CardContent className="text-center">
                  <h3 className="text-xl font-semibold">{produto.nome}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{produto.descricao}</p>

                  <AnimatePresence>
                    {ativo === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="mt-4 bg-pink-100 p-4 rounded-xl shadow-inner text-left"
                      >
                        <p className="text-pink-800 font-bold">Preço: {produto.preco}</p>
                        <p className="text-gray-700 text-sm mt-1">{produto.info}</p>
                        <button
                          onClick={(e) => { e.stopPropagation(); pedirWhatsApp(produto); }}
                          className="mt-3 w-full px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition"
                        >
                          Pedir pelo WhatsApp 📲
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <footer id="contato" className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-pink-700">Sobre</h4>
            <p className="text-sm text-gray-700 mt-2">Bolos artesanais feitos sob encomenda. Entregamos na região.</p>
          </div>
          <div>
            <h4 className="font-bold text-pink-700">Contato</h4>
            <p className="text-sm mt-2">WhatsApp: <a className="text-green-600 underline" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank">{WHATSAPP_NUMBER}</a></p>
            <p className="text-sm">Instagram: <a className="underline" href="#">@sua_confeitaria</a></p>
          </div>
          <div>
            <h4 className="font-bold text-pink-700">Horários</h4>
            <p className="text-sm mt-2">Seg–Sáb: 08:00–18:00</p>
            <p className="text-sm">Dom: 09:00–13:00</p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} Doçuras da Leo — Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}
