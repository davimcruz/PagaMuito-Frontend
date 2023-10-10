export default function MinesContent() {
  return (
    <>
      <div id="containerGenerating">
        <div className="card text-center bg-dark text-white">
          <div className="card-header text-bold"></div>
          <div className="card-body">
            <h5 className="card-title">ARBETY ✅</h5>
            <p className="card-text" id="loadingMessages" />
            <div className="container">
              {/*
                  SINAIS DO MINES AQUI
              */}
              <div id="game-wrapper" className="game-wrapper">
                <div id="board" className="board" />
                <img
                  id="overlay"
                  className="overlay"
                  src="/assets/img/desfocado.png"
                  alt="Desfocado"
                />
                <div className="status-container">
                  <p id="status" className="status" />
                </div>
              </div>
              <p id="info" className="info" />
              <button
                id="generate-opportunity"
                className="generate-opportunity"
              >
                Gerar oportunidade
              </button>
            </div>
          </div>
          <div className="card-footer text-muted">
            O jogo não carregou?{" "}
            <a
              href="https://arbety.com/?invite=p&code=pagamuitoapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui
            </a>
          </div>
        </div>
      </div>
      <div id="bet">
        <iframe
          src="https://arbety.com/?invite=p&code=pagamuitoapp"
          frameBorder={0}
          width="100%"
          height={700}
        />
      </div>
    </>
  );
}
