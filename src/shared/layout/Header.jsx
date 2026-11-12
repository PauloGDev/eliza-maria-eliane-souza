import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.svg";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="#inicio" aria-label="Eliza Maria & Eliane Sousa Advocacia — início"><img src={logo} alt="Eliza Maria & Eliane Sousa Advocacia" /></a>
    <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? "main-nav open" : "main-nav"} aria-label="Navegação principal">{[["#auxilio-acidente","Auxílio-acidente"],["#atuacao","Atuação"],["#escritorio","O escritório"],["#duvidas","Dúvidas"]].map(([href,label])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contato" onClick={()=>setOpen(false)}>Fale conosco <span>↗</span></a></nav>
  </div></header>;
}
