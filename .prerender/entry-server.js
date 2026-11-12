import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { X, Menu, ArrowDown, ShieldCheck, HeartHandshake, ArrowRight, MessageCircle, Check } from "lucide-react";
const logo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9Ijg0MCIgdmlld0JveD0iMCAwIDEyMDAgNDIwIj4NCiAgPHRpdGxlPkVsaXphIE1hcmlhICZhbXA7IEVsaWFuZSBTb3VzYSBBZHZvY2FjaWE8L3RpdGxlPg0KICA8ZGVzYz5SZWRlc2VuaG8gdmV0b3JpYWwgZG8gbG9nb3RpcG8gYSBwYXJ0aXIgZGEgcmVmZXLDqm5jaWEgZm9ybmVjaWRhLCBlbSBkb3VyYWRvIGNoYW1wYWduZS48L2Rlc2M+DQogIDxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MzQUI3OCIgc3Ryb2tlLXdpZHRoPSI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPg0KICAgIDxwYXRoIGQ9Ik0yMDYgNDMgSDM4NiBNMjA2IDQzIFYzNzcgSDM4NiIvPg0KICAgIDxwYXRoIGQ9Ik0yMDYgOTEgSDMyMyBNMjA2IDIwNyBIMzIzIi8+DQogICAgPHBhdGggZD0iTTE3NyA3OCBIMjA2IFYzNDIgSDE3NyBRMTY2IDM0MiAxNjYgMzMxIFY4OSBRMTY2IDc4IDE3NyA3OCBaIi8+DQogIDwvZz4NCiAgPGcgZmlsbD0iI0MzQUI3OCI+DQogICAgPHRleHQgeD0iNDM4IiB5PSIxNTciIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWYiIGZvbnQtc2l6ZT0iODIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwLjUiPkVsaXphIE1hcmlhICZhbXA7PC90ZXh0Pg0KICAgIDx0ZXh0IHg9IjQzOCIgeT0iMjU3IiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmIiBmb250LXNpemU9IjgyIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMC41Ij5FbGlhbmUgU291c2E8L3RleHQ+DQogICAgPHRleHQgeD0iNDQwIiB5PSIzMzciIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQwIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMTciPkFEVk9DQUNJQTwvdGV4dD4NCiAgPC9nPg0KPC9zdmc+";
function Header() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsx("header", { className: "site-header", children: /* @__PURE__ */ jsxs("div", { className: "container header-inner", children: [
    /* @__PURE__ */ jsx("a", { className: "brand", href: "#inicio", "aria-label": "Eliza Maria & Eliane Sousa Advocacia — início", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "Eliza Maria & Eliane Sousa Advocacia" }) }),
    /* @__PURE__ */ jsx("button", { className: "menu-toggle", type: "button", onClick: () => setOpen(!open), "aria-expanded": open, "aria-label": open ? "Fechar menu" : "Abrir menu", children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {}) }),
    /* @__PURE__ */ jsxs("nav", { className: open ? "main-nav open" : "main-nav", "aria-label": "Navegação principal", children: [
      [["#auxilio-acidente", "Auxílio-acidente"], ["#como-funciona", "Como funciona"], ["#escritorio", "A advogada"], ["#duvidas", "Dúvidas"]].map(([href, label]) => /* @__PURE__ */ jsx("a", { href, onClick: () => setOpen(false), children: label }, href)),
      /* @__PURE__ */ jsxs("a", { className: "nav-cta", href: "#contato", onClick: () => setOpen(false), children: [
        "Falar com a advogada ",
        /* @__PURE__ */ jsx("span", { children: "↗" })
      ] })
    ] })
  ] }) });
}
const appConfig = {
  contact: {
    whatsapp: "5589999842757",
    whatsappLabel: "(89) 99984-2757",
    instagram: "elianesousaprev",
    city: "Picos, PI",
    oab: "OAB/PI 7817"
  }
};
const whatsappLink = (message = "Olá, Dra. Eliane. Gostaria de conversar sobre meu caso.") => `https://wa.me/${appConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
const { contact: contact$1 } = appConfig;
const link = whatsappLink();
function ContactClosing() {
  return null;
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "site-footer", id: "contato", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-main", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsx("a", { href: "#inicio", "aria-label": "Voltar ao início", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "Eliza Maria & Eliane Sousa Advocacia" }) }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Dra. Eliane Sousa, advogada previdenciarista. Atendimento em ",
          contact$1.city,
          " e por WhatsApp."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-contact", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "ATENDIMENTO" }),
        /* @__PURE__ */ jsxs("a", { href: link, target: "_blank", rel: "noreferrer", children: [
          "WhatsApp · ",
          contact$1.whatsappLabel,
          " ↗"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: `https://www.instagram.com/${contact$1.instagram}/`, target: "_blank", rel: "noreferrer", children: [
          "Instagram · @",
          contact$1.instagram,
          " ↗"
        ] }),
        /* @__PURE__ */ jsx("span", { children: contact$1.city })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer-professional", children: [
      /* @__PURE__ */ jsx("strong", { children: "Eliza Maria & Eliane Sousa Advocacia" }),
      /* @__PURE__ */ jsx("span", { children: contact$1.oab })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "legal-disclaimer", children: "Este material tem caráter meramente informativo e não constitui publicidade profissional nos termos do Provimento nº 205/2021 do CFOAB. As informações aqui veiculadas não garantem resultados específicos." }),
    /* @__PURE__ */ jsxs("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© 2026 Eliza Maria & Eliane Sousa Advocacia · ",
        contact$1.oab,
        " | Todos os direitos reservados"
      ] }),
      /* @__PURE__ */ jsxs("a", { href: link, target: "_blank", rel: "noreferrer", children: [
        "Falar com a advogada ",
        /* @__PURE__ */ jsx("span", { children: "↗" })
      ] })
    ] })
  ] }) });
}
function AppShell({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx(ContactClosing, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const heroPhoto = "/assets/knee-pain-worker-DpwqrWSS.jpg";
const xrayPhoto = "/assets/xray-plates-52XXqJW5.jpg";
const handPhoto = "/assets/hand-sequela-C0xHNtj1.webp";
const examPhoto = "/assets/examining-patient-NhGcX8cG.jpg";
const wheelchairPhoto = "/assets/wheelchair-assistance-Dc9Ghtmt.jpg";
const paperworkPhoto = "/assets/termination-paperwork-CMd90B1O.jpg";
const elianePhoto = "/assets/dra-eliane-sousa-Cwjycok4.webp";
const logoMark = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20220%20360'%3e%3cg%20fill='none'%20stroke='%23C3AB78'%20stroke-width='7'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M95%2020h100M95%2020v320h100M95%2066h66M95%20178h66'/%3e%3cpath%20d='M66%2054h29v252H66q-11%200-11-11V65q0-11%2011-11Z'/%3e%3c/g%3e%3c/svg%3e";
const { contact } = appConfig;
const pillars = [
  ["01", "Foco em Auxílio-Acidente", "Muita gente se recupera do acidente, volta ao trabalho com limitações e nunca descobre que existe um benefício para esses casos. Analiso a sua situação para identificar se esse direito existe para você.", "#auxilio-acidente"],
  ["02", "Atendimento Próximo e Claro", "Você entende cada etapa do processo, sem juridiquês e sem enrolação. Explico o que o INSS analisa, quais documentos importam e quais são as reais possibilidades do seu caso.", "#como-funciona"],
  ["03", "Experiência Dedicada ao Previdenciário", "São 16 anos de advocacia e 5 anos dedicados a ajudar segurados a conquistar e manter benefícios junto ao INSS, com análise individual de cada situação.", "#escritorio"]
];
const situations = [
  "Fraturas que deixaram limitação de movimento",
  "Perda de força ou de mobilidade em braço, mão, perna ou pé",
  "Amputação ou perda de parte de um membro",
  "Lesões na coluna que dificultam o esforço físico",
  "Sequelas que exigem mais esforço para fazer o mesmo trabalho de antes"
];
const howIWork = [
  "Análise da sua situação previdenciária e do histórico do acidente",
  "Orientação sobre laudos, exames e documentos necessários",
  "Revisão do histórico de contribuições no INSS",
  "Acompanhamento do pedido administrativo",
  "Recurso ou ação judicial em caso de negativa",
  "Atendimento por WhatsApp, com explicação em cada etapa"
];
const otherBenefits = [
  "Aposentadorias",
  "Benefícios por incapacidade (auxílio por incapacidade temporária e aposentadoria por incapacidade permanente)",
  "BPC/LOAS",
  "Direitos do trabalhador rural"
];
const differentials = [
  "Atendimento próximo, claro e humano",
  "Foco em benefícios por incapacidade e auxílio-acidente",
  "Análise individual de cada caso",
  "Escritório com atuação em várias áreas, o que permite uma visão mais ampla da sua situação",
  "Advocacia ética, sem promessas de resultado"
];
const steps = [
  ["01", "Conversa inicial pelo WhatsApp", "Você me conta o que aconteceu e envia os documentos que tiver."],
  ["02", "Análise do seu caso", "Avalio sua condição de segurado, as sequelas e a documentação disponível."],
  ["03", "Orientação sobre os próximos passos", "Explico com clareza as possibilidades reais e o melhor caminho a seguir."],
  ["04", "Acompanhamento até a decisão", "Conduzo o pedido junto ao INSS e, se necessário, atuo com recurso ou ação judicial."]
];
const faqs = [
  ["O que é o auxílio-acidente?", "É um benefício mensal pago pelo INSS como indenização a quem sofreu um acidente e ficou com sequela permanente que reduz a capacidade de trabalho. Não é o mesmo que o auxílio por incapacidade temporária (antigo auxílio-doença), que é pago enquanto a pessoa está afastada."],
  ["O acidente precisa ter acontecido no trabalho?", "Não. O acidente pode ter ocorrido em qualquer situação, dentro ou fora do trabalho. O ponto principal é a existência de uma sequela permanente que dificulte a atividade que você exercia."],
  ["Preciso ter contribuído por um tempo mínimo?", "Em regra, não existe carência para o auxílio-acidente. É necessário ter a qualidade de segurado do INSS na data do acidente. Por isso, a análise do seu histórico é uma etapa importante."],
  ["Posso receber o auxílio-acidente e continuar trabalhando?", "Sim. O benefício é uma indenização, e a pessoa pode continuar trabalhando e recebendo salário. Ele deixa de ser pago em caso de aposentadoria, por exemplo."],
  ["O INSS negou meu pedido. Ainda posso recorrer?", "Sim. A negativa não é o fim do caminho. É possível recorrer dentro do próprio INSS ou entrar com ação judicial, geralmente com apoio de laudos e documentos mais completos."],
  ["Posso receber valores atrasados?", "Dependendo do caso, sim. Se o direito existia desde uma determinada data, pode ser possível receber valores retroativos. Isso é avaliado na análise individual."],
  ["Preciso ir ao escritório?", "Não é obrigatório. Você pode iniciar o atendimento pelo WhatsApp e enviar seus documentos de onde estiver. Se preferir, também pode ser atendido presencialmente em Picos/PI."],
  ["Vocês garantem que vou receber o benefício?", "Não. Nenhum advogado sério pode garantir resultado. O que ofereço é uma análise honesta do seu caso, orientação clara sobre as possibilidades e total dedicação para defender o seu direito com ética e transparência."]
];
function List({ items }) {
  return /* @__PURE__ */ jsx("ul", { className: "check-list", children: items.map((item) => /* @__PURE__ */ jsxs("li", { children: [
    /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
    item
  ] }, item)) });
}
function WhatsAppCta({ label = "Falar com a advogada", message, className = "button button-red" }) {
  return /* @__PURE__ */ jsxs("a", { className, href: whatsappLink(message), target: "_blank", rel: "noreferrer", children: [
    label,
    " ",
    /* @__PURE__ */ jsx(ArrowRight, {})
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "hero", id: "inicio", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-visual", children: [
        /* @__PURE__ */ jsx("img", { src: heroPhoto, alt: "", "aria-hidden": "true", fetchpriority: "high", width: "1920", height: "1280" }),
        /* @__PURE__ */ jsxs("div", { className: "hero-note", children: [
          /* @__PURE__ */ jsx("span", { className: "note-mark", children: /* @__PURE__ */ jsx("img", { src: logoMark, alt: "" }) }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Dra. Eliane Sousa",
            /* @__PURE__ */ jsx("small", { children: contact.oab })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hero-grid container", children: /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
        /* @__PURE__ */ jsxs("span", { className: "eyebrow", children: [
          /* @__PURE__ */ jsx("i", {}),
          " ADVOGADA PREVIDENCIARISTA · ",
          contact.oab
        ] }),
        /* @__PURE__ */ jsxs("h1", { children: [
          /* @__PURE__ */ jsx("span", { children: "Sofreu um acidente e ficou com sequelas?" }),
          /* @__PURE__ */ jsx("em", { children: "Você pode ter direito ao auxílio-acidente." })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Atuo para ajudar trabalhadores que perderam parte da capacidade de trabalho após um acidente a buscar o benefício junto ao INSS, com atendimento próximo, claro e humano. Mais de 16 anos de advocacia e 5 anos dedicados ao Direito Previdenciário." }),
        /* @__PURE__ */ jsxs("div", { className: "hero-actions", children: [
          /* @__PURE__ */ jsx(WhatsAppCta, { message: "Olá, Dra. Eliane. Sofri um acidente e gostaria de saber se tenho direito ao auxílio-acidente." }),
          /* @__PURE__ */ jsxs("a", { className: "text-link", href: "#auxilio-acidente", children: [
            "Entenda o auxílio-acidente ",
            /* @__PURE__ */ jsx(ArrowDown, {})
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hero-proof", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(ShieldCheck, {}),
            " 16+ anos de advocacia"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(HeartHandshake, {}),
            " Atendimento próximo, claro e humano"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "hero-bottom", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "Eliza Maria & Eliane Sousa Advocacia · ",
          contact.city
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "WhatsApp: ",
          contact.whatsappLabel
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "pillars section", id: "pilares", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "pillars-grid", children: pillars.map(([n, title, body, href]) => /* @__PURE__ */ jsxs("article", { className: "pillar", children: [
      /* @__PURE__ */ jsx("span", { className: "card-index", children: n }),
      /* @__PURE__ */ jsx("h3", { children: title }),
      /* @__PURE__ */ jsx("p", { children: body }),
      /* @__PURE__ */ jsxs("a", { className: "text-link", href, children: [
        "Saiba mais ",
        /* @__PURE__ */ jsx(ArrowRight, {})
      ] })
    ] }, n)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "benefit section", id: "auxilio-acidente", children: /* @__PURE__ */ jsxs("div", { className: "container benefit-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "benefit-heading", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "ENTENDA O AUXÍLIO-ACIDENTE" }),
        /* @__PURE__ */ jsx("h2", { children: "Um benefício que muita gente não sabe que existe." }),
        /* @__PURE__ */ jsx("p", { children: "Pago pelo INSS todo mês, como indenização, para quem ficou com sequelas permanentes após um acidente." }),
        /* @__PURE__ */ jsx(WhatsAppCta, { className: "button button-light", message: "Olá, Dra. Eliane. Gostaria de saber se meu caso pode ser analisado para auxílio-acidente." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "benefit-detail", children: [
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("span", { className: "detail-number", children: "01" }),
          /* @__PURE__ */ jsx("h3", { children: "O que é o auxílio-acidente" }),
          /* @__PURE__ */ jsx("p", { children: "É um benefício pago pelo INSS, todo mês, como indenização para quem sofreu um acidente e ficou com sequelas permanentes que reduzem a capacidade de trabalhar. O valor corresponde, em regra, a 50% do salário de benefício e é pago enquanto a pessoa continuar nessa condição, até se aposentar." })
        ] }),
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("span", { className: "detail-number", children: "02" }),
          /* @__PURE__ */ jsx("h3", { children: "Ele vale só para acidente de trabalho?" }),
          /* @__PURE__ */ jsx("p", { children: "Não. O auxílio-acidente pode ser concedido após acidentes de qualquer natureza, como acidente de trânsito, queda, acidente doméstico ou acidente no trabalho, desde que haja sequela permanente que diminua a sua capacidade de exercer a atividade que você tinha." })
        ] }),
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("span", { className: "detail-number", children: "03" }),
          /* @__PURE__ */ jsx("h3", { children: "Quem pode ter direito" }),
          /* @__PURE__ */ jsx("p", { children: "Em regra, segurados empregados (inclusive domésticos), trabalhadores avulsos e trabalhadores rurais segurados especiais. Não é preciso um número mínimo de contribuições, mas é necessário ser segurado do INSS na data do acidente." })
        ] }),
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("span", { className: "detail-number", children: "04" }),
          /* @__PURE__ */ jsx("h3", { children: "Por que tanta gente tem o pedido negado" }),
          /* @__PURE__ */ jsx("p", { children: "Laudo médico incompleto, falta de ligação clara entre o acidente e a sequela, documentos que não comprovam a condição de segurado e erros no histórico de contribuições. Muitos desses pontos podem ser corrigidos com orientação adequada." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "notice", children: [
          /* @__PURE__ */ jsx(ShieldCheck, {}),
          /* @__PURE__ */ jsx("p", { children: "Cada caso precisa de análise individual. Os requisitos e o valor dependem da legislação e da documentação disponível." })
        ] }),
        /* @__PURE__ */ jsx("img", { className: "benefit-photo", src: xrayPhoto, alt: "Radiografia de perna com placas e parafusos ortopédicos", loading: "lazy", width: "1144", height: "856" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "situations section", children: /* @__PURE__ */ jsxs("div", { className: "container situations-grid", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "SEQUELAS E LIMITAÇÕES" }),
        /* @__PURE__ */ jsx("h2", { children: "Exemplos de situações em que ele pode ser analisado." }),
        /* @__PURE__ */ jsx("p", { children: "O impacto da sequela na atividade que você exercia é o ponto central da análise." }),
        /* @__PURE__ */ jsx(WhatsAppCta, { className: "text-link", label: "Converse sobre o seu caso", message: "Olá, Dra. Eliane. Gostaria de orientação sobre as sequelas de um acidente." }),
        /* @__PURE__ */ jsx("img", { className: "situations-photo", src: handPhoto, alt: "Mão com sequela de amputação em um dedo", loading: "lazy", width: "756", height: "1000" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "situations-card", children: /* @__PURE__ */ jsx(List, { items: situations }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "practice section", id: "atuacao", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-heading", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "ATUAÇÃO PREVIDENCIÁRIA" }),
        /* @__PURE__ */ jsx("h2", { children: "Como atuo no seu caso." }),
        /* @__PURE__ */ jsx("p", { children: "A estratégia é definida depois de entender o acidente, as sequelas e os documentos de cada situação." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "practice-grid", children: [
        /* @__PURE__ */ jsxs("article", { className: "practice-card", children: [
          /* @__PURE__ */ jsx("img", { className: "practice-photo", src: examPhoto, alt: "Profissional de saúde examina o joelho de um paciente", loading: "lazy", width: "736", height: "491" }),
          /* @__PURE__ */ jsx("span", { className: "card-index", children: "01 / AUXÍLIO-ACIDENTE" }),
          /* @__PURE__ */ jsx("h3", { children: "Do laudo à decisão" }),
          /* @__PURE__ */ jsx("p", { children: "Acompanho cada etapa do pedido, do levantamento dos documentos até o recurso, se for necessário." }),
          /* @__PURE__ */ jsx(List, { items: howIWork }),
          /* @__PURE__ */ jsx(WhatsAppCta, { className: "text-link", message: "Olá, Dra. Eliane. Gostaria de conversar sobre auxílio-acidente." })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "practice-card", children: [
          /* @__PURE__ */ jsx("img", { className: "practice-photo", src: paperworkPhoto, alt: "Pessoa preenchendo documentos sobre uma mesa", loading: "lazy", width: "2200", height: "1467" }),
          /* @__PURE__ */ jsx("span", { className: "card-index", children: "02 / OUTROS BENEFÍCIOS" }),
          /* @__PURE__ */ jsx("h3", { children: "Outros benefícios previdenciários" }),
          /* @__PURE__ */ jsx("p", { children: "Além do auxílio-acidente, também atuo em:" }),
          /* @__PURE__ */ jsx(List, { items: otherBenefits }),
          /* @__PURE__ */ jsx(WhatsAppCta, { className: "text-link", label: "Tire suas dúvidas", message: "Olá, Dra. Eliane. Tenho uma dúvida sobre benefícios do INSS." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "process section", id: "como-funciona", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-heading", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "COMO FUNCIONA" }),
        /* @__PURE__ */ jsx("h2", { children: "Do primeiro contato ao acompanhamento do pedido." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "steps", children: steps.map(([n, title, body]) => /* @__PURE__ */ jsxs("article", { className: "step", children: [
        /* @__PURE__ */ jsx("span", { children: n }),
        /* @__PURE__ */ jsx("h3", { children: title }),
        /* @__PURE__ */ jsx("p", { children: body })
      ] }, n)) }),
      /* @__PURE__ */ jsxs("a", { className: "button button-red", href: whatsappLink("Olá, Dra. Eliane. Gostaria de iniciar uma conversa sobre meu caso."), target: "_blank", rel: "noreferrer", children: [
        "Falar agora com a advogada ",
        /* @__PURE__ */ jsx(MessageCircle, {})
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "about section", id: "escritorio", children: /* @__PURE__ */ jsxs("div", { className: "container about-grid", children: [
      /* @__PURE__ */ jsxs("figure", { className: "about-photo", children: [
        /* @__PURE__ */ jsx("img", { src: elianePhoto, alt: "Dra. Eliane Sousa, advogada previdenciarista em Picos/PI", loading: "lazy", width: "471", height: "1024" }),
        /* @__PURE__ */ jsxs("figcaption", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Dra. Eliane Sousa" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Advogada · ",
            contact.oab
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "about-copy", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "SOBRE A ADVOGADA" }),
        /* @__PURE__ */ jsx("h2", { children: "Dra. Eliane Sousa" }),
        /* @__PURE__ */ jsx("p", { children: "Sou Eliane Sousa, advogada há 16 anos. Há 5 anos me dedico ao Direito Previdenciário, ajudando segurados a conquistar e manter seus benefícios junto ao INSS, como aposentadorias, benefícios por incapacidade, auxílio-acidente, BPC/LOAS e direitos do trabalhador rural." }),
        /* @__PURE__ */ jsx("p", { children: "Hoje sou sócia da minha irmã, Eliza Costa, em Picos/PI, onde o escritório também atende demandas nas áreas trabalhista, bancária, tributária e cível." }),
        /* @__PURE__ */ jsx("p", { children: "Meu compromisso é oferecer um atendimento próximo, claro e humano, para que cada cliente se sinta seguro e bem orientado em todas as etapas do processo." }),
        /* @__PURE__ */ jsxs("div", { className: "about-stats", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "16+" }),
            /* @__PURE__ */ jsx("span", { children: "Anos de advocacia" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "5+" }),
            /* @__PURE__ */ jsx("span", { children: "Anos no Direito Previdenciário" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "about-subtitle", children: "Diferenciais da atuação" }),
        /* @__PURE__ */ jsx(List, { items: differentials }),
        /* @__PURE__ */ jsx(WhatsAppCta, { label: "Falar agora com a advogada" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "faq section", id: "duvidas", children: [
      /* @__PURE__ */ jsxs("div", { className: "container faq-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "faq-intro", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "PERGUNTAS FREQUENTES" }),
          /* @__PURE__ */ jsx("h2", { children: "Informação clara para começar." }),
          /* @__PURE__ */ jsx("p", { children: "As respostas são gerais e não substituem a análise dos documentos e das circunstâncias do seu caso." }),
          /* @__PURE__ */ jsx(WhatsAppCta, { className: "button button-light", label: "Falar agora com a advogada", message: "Olá, Dra. Eliane. Tenho uma dúvida e gostaria de orientação." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "faq-list", children: faqs.map(([q, a]) => /* @__PURE__ */ jsxs("details", { children: [
          /* @__PURE__ */ jsxs("summary", { children: [
            q,
            /* @__PURE__ */ jsx("span", { children: "+" })
          ] }),
          /* @__PURE__ */ jsx("p", { children: a })
        ] }, q)) })
      ] }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, answer]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text: answer } })) }) } })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "closing", children: [
      /* @__PURE__ */ jsx("img", { className: "closing-background", src: wheelchairPhoto, alt: "", "aria-hidden": "true", loading: "lazy", width: "2591", height: "3887" }),
      /* @__PURE__ */ jsxs("div", { className: "container closing-inner", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "PRÓXIMO PASSO" }),
          /* @__PURE__ */ jsx("h2", { children: "Conte o que aconteceu. Eu explico como o seu caso pode ser analisado." }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Atendimento inicial pelo WhatsApp ",
            contact.whatsappLabel,
            ", com comunicação direta e transparente."
          ] })
        ] }),
        /* @__PURE__ */ jsx(WhatsAppCta, { label: "Falar agora com a advogada" })
      ] })
    ] })
  ] });
}
function render() {
  return renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsx(HomePage, {}) }) }));
}
export {
  render
};
