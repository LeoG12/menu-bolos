import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = "+244924045819";

const produtos = [
  {
    nome: "Mini bolos",
    imagem: "/src/assets/images/bolo1.jpg",
    descricao: "Pequenos e deliciosos bolos individuais.",
    preco: "€ 1",
    info: "Sabores: chocolate, baunilha e morango."
  },
  {
    nome: "Bolas de Berlim",
    imagem: "/src/assets/images/bolo2.jpg",
    descricao: "Tradicionais e recheadas, irresistíveis!",
    preco: "€ 0,70",
    info: "Recheios: creme, chocolate e doce de leite."
  },
  {
    nome: "Mousse",
    imagem: "/src/assets/images/bolo4.jpg",
    descricao: "Sobremesa cremosa e deliciosa.",
    preco: "€ 10",
    info: "Sabores: maracujá, chocolate e limão."
  },
  {
    nome: "Bolo de chocolate 🍫",
    imagem: "/src/assets/images/bolo_chocolate.jpg",
    descricao: "Clássico e irresistível para os amantes de chocolate.",
    preco: "€ 10,00",
    info: "Cobertura de ganache com recheio cremoso."
  },
  {
    nome: "Bolo caseiro",
    imagem: "/src/assets/images/bolo_caseiro.jpg",
    descricao: "Tradicional, simples e feito com carinho.",
    preco: "€ 10,00",
    info: "Perfeito para o café da tarde."
  },
  {
    nome: "Bolo Chantilly",
    imagem: "/src/assets/images/bolo_chantilly.jpg",
    descricao: "Elegância e sabor para momentos especiais.",
    preco: "€ 10",
    info: "Personalizado com decoração exclusiva."
  },
  {
    nome: "Morango de Amor",
    imagem: "/src/assets/images/morango.jpg",
    descricao: "Suave, leve e decorado com perfeição.",
    preco: "€ 2,5",
    info: "Coberto com chantilly fresco e frutas."
  },
  {
    nome: "Bolo de Casamento",
    imagem: "/src/assets/images/bolo_casamento.jpg",
    descricao: "Elegância e sabor para momentos especiais.",
    preco: "Sob Consulta",
    info: "Personalizado com decoração exclusiva."
  },
  {
    nome: "Bolo de Aniversário",
    imagem: "/src/assets/images/bolo_aniversario.jpg",
    descricao: "Elegância e sabor para momentos especiais.",
    preco: "Sob Consulta",
    info: "Personalizado com decoração exclusiva."
  }
];

const slideshowImages = [
  { src: "/src/assets/images/bolo_chocolate.jpg", alt: "Bolo de chocolate" },
  { src: "/src/assets/images/bolo_caseiro.jpg", alt: "Bolo caseiro" },
  { src: "/src/assets/images/bolo_aniversario.jpg", alt: "Bolo de aniversário" },
  { src: "/src/assets/images/morango.jpg", alt: "Doce de morango" }
];

function HeroSlideshow({ images }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [current, images.length]);

  const slideVariants = {
    hidden: { opacity: 0, x: 50, transition: { duration: 0.5 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative">
      <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={current}
            src={images[current].src}
            alt={images[current].alt}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${current === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 text-gray-800 scroll-smooth">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="w-full px-8 py-3 flex items-center justify-between">
          <img src="/src/assets/images/logo.svg" alt="Bell Cakes Logo" className="h-12 w-auto object-contain" />
          <nav className="space-x-6 text-sm md:text-base font-semibold text-gray-700">
            <a href="#inicio" className="hover:text-orange-600">Início</a>
            <a href="#cardapio" className="hover:text-orange-600">Cardápio</a>
            <a href="#contato" className="hover:text-orange-600">Contato</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50">
        <div className="w-full px-8 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-orange-700">
              Bolos & Doces feitos com carinho 🎂
            </h1>
            <p className="mt-4 text-gray-700 md:text-lg">
              Sabor de casa, ingredientes selecionados e aquele toque especial para
              tornar seus momentos inesquecíveis.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#cardapio" className="px-5 py-3 rounded-2xl shadow bg-orange-500 text-white hover:bg-orange-600 transition">
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
          <HeroSlideshow images={slideshowImages} />
        </div>
      </section>

      <section id="cardapio" className="w-full px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">🍰 Cardápio de Bolos & Doces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {produtos.map((produto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => toggleCard(index)}
              className="cursor-pointer rounded-2xl"
            >
              <Card className="shadow-lg hover:scale-105 transition-transform">
                <img src={produto.imagem} alt={produto.nome} className="w-full h-48 object-cover" />
                <CardContent className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{produto.nome}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{produto.descricao}</p>
                  <AnimatePresence>
                    {ativo === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="mt-4 bg-orange-100 p-4 rounded-xl shadow-inner text-left"
                      >
                        <p className="text-orange-700 font-bold">Preço: {produto.preco}</p>
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

      <footer id="contato" className="bg-black text-gray-300">
        <div className="w-full px-8 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-orange-500">Sobre</h4>
            <p className="text-sm mt-2">Bolos artesanais feitos sob encomenda. Entregamos na região.</p>
          </div>
          <div>
            <h4 className="font-bold text-orange-500">Contato</h4>
            <p className="text-sm mt-2">WhatsApp: <a className="text-green-400 underline" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_NUMBER}</a></p>
            <p className="text-sm">Instagram: <a className="underline" href="https://www.instagram.com/bellcakes.pt?igsh=OWhrOXBzNWxlb3Q4">@Bell_Cakes</a></p>
          </div>
          <div>
            <h4 className="font-bold text-orange-500">Horários</h4>
            <p className="text-sm mt-2">Seg–Sáb: 08:00–18:00</p>
            <p className="text-sm">Dom: 09:00–13:00</p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} Bell Bakes — Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}
