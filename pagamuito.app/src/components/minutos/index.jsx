export default function MinutosContent() {
  return (
    <>
      <div className="text-center my-2">
        <div style={{ overflow: "hidden" }}>
          <div className="d-flex gap-3 justify-content-center align-items-center all-notifications"></div>
        </div>
      </div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="https://t.me/roletadoguga" target="_blank">
              <img src="assets/img/capa1.jpg" alt="" className="img-fluid" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="https://www.instagram.com/gugajunior_ofc/" target="_blank">
              <img src="assets/img/lives.webp" alt="" className="img-fluid" />
            </a>
          </div>
          <div className="carousel-item" style={{ textAlign: "center" }}>
            <a href="https://t.me/Professorcassino" target="_blank">
              <img
                src="assets/img/professorcassino.webp"
                alt=""
                className="img-fluid"
                style={{ maxHeight: 285 }}
              />
            </a>
          </div>
        </div>
        <div className=" mb-4" style={{ top: 25 }}>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
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
                <h2 className="fw-bold ms-1 text-uppercase text-center">
                  Minutos Pagantes
                </h2>
                <span className="bg-primary p-1 shadow rounded mx-2" alt="" />
              </div>
            </div>
            {/* Botões de alternância */}
            <div className="d-flex justify-content-center" id="selectWhereFrom">
              <button
                className="btn btn-primary m-2 tabChangeButton"
                id="pgsoftBtn"
              >
                PGSoft
              </button>
              <button
                className="btn btn-primary m-2 tabChangeButton"
                id="pragmaticBtn"
              >
                Pragmatic
              </button>
            </div>
            {/* Card PGSoft */}
            <div className="border p-2 custom-card text-center" id="pggames">
              <div className="d-flex justify-content-center align-items-center text-center my-4">
                <img
                  src="assets/img/PG/logow.png"
                  className=""
                  alt=""
                  height="70px"
                />
              </div>
              {/* Games */}
              <div
                className="d-flex justify-content-center align-items-center mb-2 mt-2 text-center flex-wrap"
                id="pgGameImages"
              ></div>
            </div>
            {/* Card Pragmatic */}
            <div
              className="border p-2 custom-card text-center d-none"
              id="pragmaticgames"
            >
              {/* ... (conteúdo Pragmatic) ... */}
              <div className="d-flex justify-content-center align-items-center text-center">
                <img
                  src="assets/img/PRAGMATIC/logow.svg"
                  className=""
                  alt=""
                  height="110px"
                />
              </div>
              {/* Games */}
              <div
                className="d-flex justify-content-center align-items-center mb-2 mt-2 text-center flex-wrap"
                id="gameImages"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
