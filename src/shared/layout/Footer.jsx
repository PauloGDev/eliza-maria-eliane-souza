import logo from "../../assets/logo.svg";
import { appConfig, whatsappLink } from "../../config/app.config";

const { contact } = appConfig;
const link = whatsappLink();

export function ContactClosing(){return null;}
export function Footer(){return <footer className="site-footer" id="contato"><div className="container"><div className="footer-main"><div className="footer-brand"><a href="#inicio" aria-label="Voltar ao início"><img src={logo} alt="Eliza Maria & Eliane Sousa Advocacia"/></a><p>Dra. Eliane Sousa, advogada previdenciarista. Atendimento em {contact.city} e por WhatsApp.</p></div><div className="footer-contact"><span className="eyebrow">ATENDIMENTO</span><a href={link} target="_blank" rel="noreferrer">WhatsApp · {contact.whatsappLabel} ↗</a><a href={`https://www.instagram.com/${contact.instagram}/`} target="_blank" rel="noreferrer">Instagram · @{contact.instagram} ↗</a><span>{contact.city}</span></div></div><div className="footer-professional"><strong>Eliza Maria & Eliane Sousa Advocacia</strong><span>{contact.oab}</span></div><div className="legal-disclaimer">Este material tem caráter meramente informativo e não constitui publicidade profissional nos termos do Provimento nº 205/2021 do CFOAB. As informações aqui veiculadas não garantem resultados específicos.</div><div className="footer-bottom"><span>© 2026 Eliza Maria & Eliane Sousa Advocacia · {contact.oab} | Todos os direitos reservados</span><a href={link} target="_blank" rel="noreferrer">Falar com a advogada <span>↗</span></a></div></div></footer>;}
