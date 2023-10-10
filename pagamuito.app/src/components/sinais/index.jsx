export default function SinaisContent() {
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
            <p className="card-text" id="loadingMessages" />
            <div className="row d-flex align-items-stretch" id="outputSignal">
              <div className="col-md-4">
                <div
                  className="card bg-dark-1000"
                  style={{ borderRadius: "15px 15px 0 0" }}
                >
                  <div className="card-body d-flex align-items-center">
                    <div className="mr-2">
                      <img
                        src="/assets//img/icons/iconNormal.webp"
                        alt="Rodadas Normais"
                        className="modeIcon"
                      />
                    </div>
                    <div className="w-100">
                      <h5 className="card-title text-center">NORMAL</h5>
                      <p className="text-center" id="normalRounds">
                        --
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark-1000">
                  <div className="card-body d-flex align-items-center">
                    <div className="mr-2">
                      <img
                        src="/assets/img/icons/iconTurbo.webp"
                        alt="Rodadas Turbo"
                        className="modeIcon"
                      />
                    </div>
                    <div className="w-100">
                      <h5 className="card-title text-center">TURBO</h5>
                      <p className="text-center" id="turboRounds">
                        --
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card bg-dark-1000"
                  style={{ borderRadius: "0 0 15px 15px" }}
                >
                  <div className="card-body d-flex align-items-center">
                    <div className="mr-2">
                      <img
                        src="/assets/img/icons/iconValidade.webp"
                        alt="Validade"
                        className="modeIcon"
                      />
                    </div>
                    <div className="w-100">
                      <h5 className="card-title text-center">VALIDADE</h5>
                      <p className="text-center" id="validade">
                        --
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              id="btnGenerate"
              className="btn btn-success btn-block mx-auto mt-4 py-2 text-bold"
            >
              IDENTIFICAR OPORTUNIDADE
            </button>
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
