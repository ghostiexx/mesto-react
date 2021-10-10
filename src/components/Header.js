import headerLogo from "../images/logo.svg";

function Header() {
	return (
		<header className="header">
			<a href="/" className="header__link" target="_blank">
				<img src={headerLogo} alt="Логотип Место" className="header__logo"/>
			</a>
		</header>
	);
}

export default Header;
