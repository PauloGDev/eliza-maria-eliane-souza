import { ArrowDown, ArrowRight, Check, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import heroPhoto from "../../../assets/knee-pain-worker.jpg";
import xrayPhoto from "../../../assets/xray-plates.jpg";
import handPhoto from "../../../assets/hand-sequela.webp";
import examPhoto from "../../../assets/examining-patient.jpg";
import wheelchairPhoto from "../../../assets/wheelchair-assistance.jpg";
import paperworkPhoto from "../../../assets/termination-paperwork.jpg";
import elianePhoto from "../../../assets/dra-eliane-sousa.webp";
import logoMark from "../../../assets/logo-mark.svg";
import { appConfig, whatsappLink } from "../../../config/app.config";

const { contact } = appConfig;

const pillars = [
  ["01", "Foco em Auxílio-Acidente", "Muita gente se recupera do acidente, volta ao trabalho com limitações e nunca descobre que existe um benefício para esses casos. Analiso a sua situação para identificar se esse direito existe para você.", "#auxilio-acidente"],
  ["02", "Atendimento Próximo e Claro", "Você entende cada etapa do processo, sem juridiquês e sem enrolação. Explico o que o INSS analisa, quais documentos importam e quais são as reais possibilidades do seu caso.", "#como-funciona"],
  ["03", "Experiência Dedicada ao Previdenciário", "São 16 anos de advocacia e 5 anos dedicados a ajudar segurados a conquistar e manter benefícios junto ao INSS, com análise individual de cada situação.", "#escritorio"],
];
const situations = [
  "Fraturas que deixaram limitação de movimento",
  "Perda de força ou de mobilidade em braço, mão, perna ou pé",
  "Amputação ou perda de parte de um membro",
  "Lesões na coluna que dificultam o esforço físico",
  "Sequelas que exigem mais esforço para fazer o mesmo trabalho de antes",
];
const howIWork = [
  "Análise da sua situação previdenciária e do histórico do acidente",
  "Orientação sobre laudos, exames e documentos necessários",
  "Revisão do histórico de contribuições no INSS",
  "Acompanhamento do pedido administrativo",
  "Recurso ou ação judicial em caso de negativa",
  "Atendimento por WhatsApp, com explicação em cada etapa",
];
const otherBenefits = [
  "Aposentadorias",
  "Benefícios por incapacidade (auxílio por incapacidade temporária e aposentadoria por incapacidade permanente)",
  "BPC/LOAS",
  "Direitos do trabalhador rural",
];
const differentials = [
  "Atendimento próximo, claro e humano",
  "Foco em benefícios por incapacidade e auxílio-acidente",
  "Análise individual de cada caso",
  "Escritório com atuação em várias áreas, o que permite uma visão mais ampla da sua situação",
  "Advocacia ética, sem promessas de resultado",
];
const steps = [
  ["01", "Conversa inicial pelo WhatsApp", "Você me conta o que aconteceu e envia os documentos que tiver."],
  ["02", "Análise do seu caso", "Avalio sua condição de segurado, as sequelas e a documentação disponível."],
  ["03", "Orientação sobre os próximos passos", "Explico com clareza as possibilidades reais e o melhor caminho a seguir."],
  ["04", "Acompanhamento até a decisão", "Conduzo o pedido junto ao INSS e, se necessário, atuo com recurso ou ação judicial."],
];
const faqs = [
  ["O que é o auxílio-acidente?", "É um benefício mensal pago pelo INSS como indenização a quem sofreu um acidente e ficou com sequela permanente que reduz a capacidade de trabalho. Não é o mesmo que o auxílio por incapacidade temporária (antigo auxílio-doença), que é pago enquanto a pessoa está afastada."],
  ["O acidente precisa ter acontecido no trabalho?", "Não. O acidente pode ter ocorrido em qualquer situação, dentro ou fora do trabalho. O ponto principal é a existência de uma sequela permanente que dificulte a atividade que você exercia."],
  ["Preciso ter contribuído por um tempo mínimo?", "Em regra, não existe carência para o auxílio-acidente. É necessário ter a qualidade de segurado do INSS na data do acidente. Por isso, a análise do seu histórico é uma etapa importante."],
  ["Posso receber o auxílio-acidente e continuar trabalhando?", "Sim. O benefício é uma indenização, e a pessoa pode continuar trabalhando e recebendo salário. Ele deixa de ser pago em caso de aposentadoria, por exemplo."],
  ["O INSS negou meu pedido. Ainda posso recorrer?", "Sim. A negativa não é o fim do caminho. É possível recorrer dentro do próprio INSS ou entrar com ação judicial, geralmente com apoio de laudos e documentos mais completos."],
  ["Posso receber valores atrasados?", "Dependendo do caso, sim. Se o direito existia desde uma determinada data, pode ser possível receber valores retroativos. Isso é avaliado na análise individual."],
  ["Preciso ir ao escritório?", "Não é obrigatório. Você pode iniciar o atendimento pelo WhatsApp e enviar seus documentos de onde estiver. Se preferir, também pode ser atendido presencialmente em Picos/PI."],
  ["Vocês garantem que vou receber o benefício?", "Não. Nenhum advogado sério pode garantir resultado. O que ofereço é uma análise honesta do seu caso, orientação clara sobre as possibilidades e total dedicação para defender o seu direito com ética e transparência."],
];

function List({ items }) {
  return <ul className="check-list">{items.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>;
}

function WhatsAppCta({ label = "Falar com a advogada", message, className = "button button-red" }) {
  return <a className={className} href={whatsappLink(message)} target="_blank" rel="noreferrer">{label} <ArrowRight /></a>;
}

export function HomePage() {
  return <>
    <section className="hero" id="inicio">
      <div className="hero-visual">
        <img src={heroPhoto} alt="" aria-hidden="true" fetchpriority="high" width="1920" height="1280" />
        <div className="hero-note"><span className="note-mark"><img src={logoMark} alt="" /></span><span>Dra. Eliane Sousa<small>{contact.oab}</small></span></div>
      </div>
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="eyebrow"><i /> ADVOGADA PREVIDENCIARISTA · {contact.oab}</span>
          <h1><span>Sofreu um acidente e ficou com sequelas?</span><em>Você pode ter direito ao auxílio-acidente.</em></h1>
          <p>Atuo para ajudar trabalhadores que perderam parte da capacidade de trabalho após um acidente a buscar o benefício junto ao INSS, com atendimento próximo, claro e humano. Mais de 16 anos de advocacia e 5 anos dedicados ao Direito Previdenciário.</p>
          <div className="hero-actions"><WhatsAppCta message="Olá, Dra. Eliane. Sofri um acidente e gostaria de saber se tenho direito ao auxílio-acidente." /><a className="text-link" href="#auxilio-acidente">Entenda o auxílio-acidente <ArrowDown /></a></div>
          <div className="hero-proof"><span><ShieldCheck /> 16+ anos de advocacia</span><span><HeartHandshake /> Atendimento próximo, claro e humano</span></div>
        </div>
      </div>
      <div className="hero-bottom"><div className="container"><span>Eliza Maria &amp; Eliane Sousa Advocacia · {contact.city}</span><span>WhatsApp: {contact.whatsappLabel}</span></div></div>
    </section>

    <section className="pillars section" id="pilares"><div className="container"><div className="pillars-grid">{pillars.map(([n, title, body, href]) => <article className="pillar" key={n}><span className="card-index">{n}</span><h3>{title}</h3><p>{body}</p><a className="text-link" href={href}>Saiba mais <ArrowRight /></a></article>)}</div></div></section>

    <section className="benefit section" id="auxilio-acidente"><div className="container benefit-grid"><div className="benefit-heading"><span className="eyebrow">ENTENDA O AUXÍLIO-ACIDENTE</span><h2>Um benefício que muita gente não sabe que existe.</h2><p>Pago pelo INSS todo mês, como indenização, para quem ficou com sequelas permanentes após um acidente.</p><WhatsAppCta className="button button-light" message="Olá, Dra. Eliane. Gostaria de saber se meu caso pode ser analisado para auxílio-acidente." /></div><div className="benefit-detail"><article><span className="detail-number">01</span><h3>O que é o auxílio-acidente</h3><p>É um benefício pago pelo INSS, todo mês, como indenização para quem sofreu um acidente e ficou com sequelas permanentes que reduzem a capacidade de trabalhar. O valor corresponde, em regra, a 50% do salário de benefício e é pago enquanto a pessoa continuar nessa condição, até se aposentar.</p></article><article><span className="detail-number">02</span><h3>Ele vale só para acidente de trabalho?</h3><p>Não. O auxílio-acidente pode ser concedido após acidentes de qualquer natureza, como acidente de trânsito, queda, acidente doméstico ou acidente no trabalho, desde que haja sequela permanente que diminua a sua capacidade de exercer a atividade que você tinha.</p></article><article><span className="detail-number">03</span><h3>Quem pode ter direito</h3><p>Em regra, segurados empregados (inclusive domésticos), trabalhadores avulsos e trabalhadores rurais segurados especiais. Não é preciso um número mínimo de contribuições, mas é necessário ser segurado do INSS na data do acidente.</p></article><article><span className="detail-number">04</span><h3>Por que tanta gente tem o pedido negado</h3><p>Laudo médico incompleto, falta de ligação clara entre o acidente e a sequela, documentos que não comprovam a condição de segurado e erros no histórico de contribuições. Muitos desses pontos podem ser corrigidos com orientação adequada.</p></article><div className="notice"><ShieldCheck /><p>Cada caso precisa de análise individual. Os requisitos e o valor dependem da legislação e da documentação disponível.</p></div><img className="benefit-photo" src={xrayPhoto} alt="Radiografia de perna com placas e parafusos ortopédicos" loading="lazy" width="1144" height="856" /></div></div></section>

    <section className="situations section"><div className="container situations-grid"><div><span className="eyebrow">SEQUELAS E LIMITAÇÕES</span><h2>Exemplos de situações em que ele pode ser analisado.</h2><p>O impacto da sequela na atividade que você exercia é o ponto central da análise.</p><WhatsAppCta className="text-link" label="Converse sobre o seu caso" message="Olá, Dra. Eliane. Gostaria de orientação sobre as sequelas de um acidente." /><img className="situations-photo" src={handPhoto} alt="Mão com sequela de amputação em um dedo" loading="lazy" width="756" height="1000" /></div><div className="situations-card"><List items={situations} /></div></div></section>

    <section className="practice section" id="atuacao"><div className="container"><div className="section-heading"><span className="eyebrow">ATUAÇÃO PREVIDENCIÁRIA</span><h2>Como atuo no seu caso.</h2><p>A estratégia é definida depois de entender o acidente, as sequelas e os documentos de cada situação.</p></div><div className="practice-grid"><article className="practice-card"><img className="practice-photo" src={examPhoto} alt="Profissional de saúde examina o joelho de um paciente" loading="lazy" width="736" height="491" /><span className="card-index">01 / AUXÍLIO-ACIDENTE</span><h3>Do laudo à decisão</h3><p>Acompanho cada etapa do pedido, do levantamento dos documentos até o recurso, se for necessário.</p><List items={howIWork} /><WhatsAppCta className="text-link" message="Olá, Dra. Eliane. Gostaria de conversar sobre auxílio-acidente." /></article><article className="practice-card"><img className="practice-photo" src={paperworkPhoto} alt="Pessoa preenchendo documentos sobre uma mesa" loading="lazy" width="2200" height="1467" /><span className="card-index">02 / OUTROS BENEFÍCIOS</span><h3>Outros benefícios previdenciários</h3><p>Além do auxílio-acidente, também atuo em:</p><List items={otherBenefits} /><WhatsAppCta className="text-link" label="Tire suas dúvidas" message="Olá, Dra. Eliane. Tenho uma dúvida sobre benefícios do INSS." /></article></div></div></section>

    <section className="process section" id="como-funciona"><div className="container"><div className="section-heading"><span className="eyebrow">COMO FUNCIONA</span><h2>Do primeiro contato ao acompanhamento do pedido.</h2></div><div className="steps">{steps.map(([n,title,body])=><article className="step" key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div><a className="button button-red" href={whatsappLink("Olá, Dra. Eliane. Gostaria de iniciar uma conversa sobre meu caso.")} target="_blank" rel="noreferrer">Falar agora com a advogada <MessageCircle /></a></div></section>

    <section className="about section" id="escritorio"><div className="container about-grid">
      <figure className="about-photo"><img src={elianePhoto} alt="Dra. Eliane Sousa, advogada previdenciarista em Picos/PI" loading="lazy" width="471" height="1024" /><figcaption><strong>Dra. Eliane Sousa</strong><span>Advogada · {contact.oab}</span></figcaption></figure>
      <div className="about-copy">
        <span className="eyebrow">SOBRE A ADVOGADA</span>
        <h2>Dra. Eliane Sousa</h2>
        <p>Sou Eliane Sousa, advogada há 16 anos. Há 5 anos me dedico ao Direito Previdenciário, ajudando segurados a conquistar e manter seus benefícios junto ao INSS, como aposentadorias, benefícios por incapacidade, auxílio-acidente, BPC/LOAS e direitos do trabalhador rural.</p>
        <p>Hoje sou sócia da minha irmã, Eliza Costa, em Picos/PI, onde o escritório também atende demandas nas áreas trabalhista, bancária, tributária e cível.</p>
        <p>Meu compromisso é oferecer um atendimento próximo, claro e humano, para que cada cliente se sinta seguro e bem orientado em todas as etapas do processo.</p>
        <div className="about-stats"><div><strong>16+</strong><span>Anos de advocacia</span></div><div><strong>5+</strong><span>Anos no Direito Previdenciário</span></div></div>
        <span className="about-subtitle">Diferenciais da atuação</span>
        <List items={differentials} />
        <WhatsAppCta label="Falar agora com a advogada" />
      </div>
    </div></section>

    <section className="faq section" id="duvidas"><div className="container faq-grid"><div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Informação clara para começar.</h2><p>As respostas são gerais e não substituem a análise dos documentos e das circunstâncias do seu caso.</p><WhatsAppCta className="button button-light" label="Falar agora com a advogada" message="Olá, Dra. Eliane. Tenho uma dúvida e gostaria de orientação." /></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([name,answer])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text:answer}}))})}} /></section>

    <section className="closing"><img className="closing-background" src={wheelchairPhoto} alt="" aria-hidden="true" loading="lazy" width="2591" height="3887" /><div className="container closing-inner"><div><span className="eyebrow">PRÓXIMO PASSO</span><h2>Conte o que aconteceu. Eu explico como o seu caso pode ser analisado.</h2><p>Atendimento inicial pelo WhatsApp {contact.whatsappLabel}, com comunicação direta e transparente.</p></div><WhatsAppCta label="Falar agora com a advogada" /></div></section>
  </>;
}
