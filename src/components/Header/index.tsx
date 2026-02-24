import "./style.css";

interface HeaderProps {
 name: string;
}

export default function Header({ name }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Logo</div>

        <nav className="nav">
          <a href="" className="nav-link">home</a>
          <a href="" className="nav-link">sobre</a>
          <a href="" className="nav-link">contato</a>
        </nav>

        <button className="cta">{name}</button>
      </div>
    </header>
  );
}