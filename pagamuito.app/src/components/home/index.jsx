export default function HomeContent() {
  return (
    <>
      <div className="text-center my-2">
        <div style={{ overflow: "hidden" }}>
          <div className="d-flex gap-3 justify-content-center align-items-center all-notifications"></div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ display: "none !important" }}
      >
        <div
          className="header-large-title bg-primary text-center"
          style={{ width: "fit-content", borderRadius: 6, marginTop: 16 }}
        >
          <span style={{ fontSize: 14 }}>Acesse gratuitamente</span>
        </div>
      </div>
      <div className="section full">
        <div className="mx-3 pb-2">
          <div id="type_slots">
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-start align-items-center mb-2 mt-2 ms-3">
                <span className="bg-primary p-1 shadow rounded" alt="" />
                <h2 className="fw-bold ms-1 text-uppercase mt-1 text-center">
                  Selecione o Game
                </h2>
                {/* TODO - LINK PARA RETORNAR PARA PLATAFORMAS */}
                <span className="bg-primary p-1 shadow rounded mx-2" alt="" />
              </div>
            </div>
            <div className="border p-2 custom-card text-center">
              <div className="d-flex justify-content-center align-items-center mb-2 mt-2 text-center">
                <img
                  src="/assets/img/icons/slots.png"
                  className="bg-primary p-1 shadow rounded"
                  alt=""
                />
                <h4 className="fw-bold text-uppercase mt-1 px-4">slots</h4>
                <img
                  src="/assets/img/icons/slots.png"
                  className="bg-primary p-1 shadow rounded"
                  alt=""
                />
              </div>
              <p>Clique sobre o jogo desejado</p>
              {/* Games */}
              <div className="d-flex justify-content-center align-items-center mb-2 mt-2 text-center flex-wrap">
                <div className="col-md-6 col-lg-4">
                  <a
                    className="hover-btn game-link"
                    href="/sinais.html"
                    data-game="rabbit"
                  >
                    <div className="mb-2">
                      <img
                        src="/assets/img/PG/rabbit.webp"
                        className="rounded"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a
                    className="hover-btn game-link"
                    href="/sinais.html"
                    data-game="pirata"
                  >
                    <div className="mb-2">
                      <img
                        src="https://gugajunior.shop/assets/icons/captainsbounty.webp"
                        className="rounded"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a
                    className="hover-btn game-link"
                    href="/sinais.html"
                    data-game="tiger"
                  >
                    <div className="mb-2">
                      <img
                        src="/assets/img/PG/fortunetiger.webp"
                        className="rounded"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a
                    className="hover-btn game-link"
                    href="/sinais.html"
                    data-game="ox"
                  >
                    <div className="mb-2">
                      <img
                        src="/assets/img/PG/09.webp"
                        className="rounded"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a
                    className="hover-btn game-link"
                    href="/sinais.html"
                    data-game="piggy"
                  >
                    <div className="mb-2">
                      <img
                        src="/assets/img/PG/pig.webp"
                        className="rounded"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a
                    className="hover-btn game-link"
                    href="/sinais.html"
                    data-game="mouse"
                  >
                    <div className="mb-2">
                      <img
                        src="/assets/img/PG/fortunemouse.webp"
                        className="rounded"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a
                    className="hover-btn game-link"
                    href="/mines.html"
                    data-game="mines"
                  >
                    <div className="mb-2">
                      <img
                        src="/assets/img/PG/mines.jpeg"
                        className="rounded"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a
                    className="hover-btn game-link"
                    href="/sinais.html"
                    data-game="doghouse"
                  >
                    <div className="mb-2">
                      <img
                        src="/assets/img/PG/doghouse.webp"
                        className="rounded"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a
                    className="hover-btn game-link"
                    href="/sinais.html"
                    data-game="icescape"
                  >
                    <div className="mb-2">
                      <img
                        src="/assets/img/PG/icescape.webp"
                        className="rounded"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-4">
                  <a
                    className="hover-btn game-link"
                    href="/sinais.html"
                    data-game="sweetbonanza"
                  >
                    <div className="mb-2">
                      <img
                        src="/assets/img/PG/sweetbonanza.webp"
                        className="rounded"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
