export default function AppHeader() {
  return (
    <>
      <div
        className="appHeader"
        style={{ maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="left">
          <a href="#" className="headerButton toggle-searchbox gap-2">
            <img
              src="assets/img/logo.png"
              alt=""
              style={{ maxWidth: 250, maxHeight: 95 }}
            />
          </a>
        </div>
        <div className="right">
          <div
            className="btn btn-sm"
            style={{ height: 25, backgroundColor: "#00BF63", cursor: "auto" }}
          >
            <i className="fa-solid fa-star" />{" "}
            <span className="ms-1 fw-bold"> App VIP!</span>
          </div>
          {/*
          <div style="height: 25px; margin: 4px">
              <img src="assets/icons/logout.png" alt="" style="max-width: 25px">
          </div>
          */}
          <form action="#" method="POST" id="logout_form">
            <input type="hidden" name="_token" defaultValue={123} />
          </form>
        </div>
      </div>
    </>
  );
}
