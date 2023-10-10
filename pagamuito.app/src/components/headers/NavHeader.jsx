export default function NavHeader() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="games.html" className="nav__link" id="GoToGamesButton">
                <i className="bx bx-joystick nav__icon" />
                <span className="nav__name">Games</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link active-link">
                <i className="bx bx-play nav__icon bx-tada" />
                <span className="nav__name">Gerar Sinal</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
