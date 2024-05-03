import logo from "../../assets/logo.svg";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <img alt="logotipo" src={logo} width={120} height={60} />
    </header>
  );
}

export default Header;
