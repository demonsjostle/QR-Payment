import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const index = () => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      false,
    );
    const success = (result) => {
      scanner.clear();
      setScanResult(result);
    };

    const error = (err) => {
      console.warn(err);
    };
    scanner.render(success, error);
  }, []);

  return (
    <>
      <div>QR Payment</div>
      {scanResult ? <div>Success</div> : <div id="reader"></div>}
    </>
  );
};

export default index;
