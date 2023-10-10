export default function RoletaContent() {
  return (
    <>
      <div id="containerGenerating">
        <audio
          id="generatingAudio"
          src="audio/generating4.mp3"
          preload="none"
        />
        <audio id="successAudio" src="audio/success2.mp3" preload="none" />
        <div className="card text-center bg-dark text-white">
          <div className="card-body" id="genCard">
            <img
              src="assets/img/logo.png"
              alt=""
              style={{ maxWidth: 300, maxHeight: 100 }}
            />
            <a
              id="btnGenerate"
              className="btn btn-success btn-block mx-auto mt-4 py-2 text-bold"
              href="https://t.me/comunidadepagamuito"
            >
              IDENTIFICAR OPORTUNIDADE DE ROLETA
            </a>
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
