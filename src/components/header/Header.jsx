import logo from "../../assets/logo.svg";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <img alt="logotipo" src={logo} width={200} height={80} loading="eager" />
    </header>
  );
}

export default Header;
