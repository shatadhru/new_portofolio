import QRCode from "react-qr-code";

function Qrcode() {
  return (
    <div>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={"Hello"}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}

export default Qrcode;
