import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function generateCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        name="qr-code"
        placeholder="Enter QR code text"
      />
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={generateCode}
      >
        Generate
      </button>
      <QRCode id="qr-code" size={400} value={qrCode} />
    </div>
  );
};

export default QRCodeGenerator;
