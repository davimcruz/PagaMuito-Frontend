export default function Menu() {
  return (
    <>
      <div
        className="appBottomMenu"
        style={{ maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}
      >
        <a
          href="https://t.me/comunidadepagamuito"
          className="item"
          target="_blank"
        >
          <div className="col">
            <div className="d-flex justify-content-center align-items-center flex-column gap-1 py-1">
              <ion-icon name="mail-outline" style={{ color: "#00BF63" }} />
              <span className="text-white">Grupos</span>
            </div>
          </div>
        </a>
        <a href="/minutos.html" className="item">
          <div className="col">
            <div className="d-flex justify-content-center align-items-center flex-column gap-1 py-1">
              <ion-icon name="cash-outline" style={{ color: "#00BF63" }} />
              <span className="text-white">Minutos</span>
            </div>
          </div>
        </a>
        <a href="/games.html" className="item" target="_blank">
          <div className="col d-flex justify-content-center align-items-center flex-column gap-1">
            <div style={{ position: "relative" }}>
              <img
                src="assets/img/pm.png"
                className="p-1 shadow"
                style={{
                  borderRadius: "100%",
                  width: 70,
                  height: 70,
                  position: "absolute",
                  bottom: "-1rem",
                  left: "-2.2rem",
                  right: "2rem",
                  backgroundColor: "#00BF63",
                }}
                alt=""
              />
            </div>
            <span className="text-white mt-3">Inteligência Artificial</span>
          </div>
        </a>
        <a href="/roleta.html" className="item" target="_blank">
          <div className="col">
            <div className="d-flex justify-content-center align-items-center flex-column gap-1 py-1">
              <ion-icon
                name="game-controller-outline"
                style={{ color: "#00BF63" }}
              />
              <span className="text-white">Roleta</span>
            </div>
          </div>
        </a>
        <a
          href="https://t.me/comunidadepagamuito"
          className="item"
          target="_blank"
        >
          <div className="col">
            <div className="d-flex justify-content-center align-items-center flex-column gap-1 py-1">
              <ion-icon
                className="fa-solid fa-question fa-2xl"
                style={{ color: "#00BF63" }}
              />
              <span className="text-white">Dúvidas</span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
