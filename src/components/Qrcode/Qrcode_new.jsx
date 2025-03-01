import QRCode from "react-qr-code";


function Qrcode_new({ username, email }) {
  const qrValue = `${username}${email}shatadhru_successfull_loged_in_user`;

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
          value={qrValue}
          viewBox="0 0 256 256"
        />
      </div>
    </div>
  );
}

export default Qrcode_new;
