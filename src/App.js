function App() {
  return (
    <>
      <Img />
      <BigParagraph />
      <SmallParagraph />
    </>
  );
}

function Img() {
  return (
    <img
      className="width-90p margin-left-right-1 margin-top-1rem  br-15px"
      src="images\image-qr-code.png"
      alt="qr-img"
    ></img>
  );
}

function BigParagraph() {
  return (
    <h1
      style={{
        color: "hsl(218, 44%, 22%)",
      }}
      className="fw-700 margin-left-right-1 fs-22px"
    >
      Improve your front-end skills by building projects
    </h1>
  );
}
function SmallParagraph() {
  return (
    <p
      style={{
        color: "hsl(220, 15%, 55%)",
      }}
      className="margin-left-right-1 magin-bottom-1rem fs-15px width-18p2-rem  "
    >
      Scan the QR code to visit Frontend Mentor and take your coding skills to
      the next level
    </p>
  );
}
export default App;
