import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // liff.ready
  // liff.getOS()
  // liff.getLanguage()
  // liff.getVersion()
  // liff.getLineVersion()
  // liff.isInClient()
  // liff.closeWindow()

  useEffect(() => {
    
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
      })
      .catch((e: Error) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
    if (liff.isLoggedIn()) {
        liff.logout();
        window.location.reload();
    } 
  });
 

  return ( 
    <div className="App">
      <h1>Demo Gitec Liff App</h1>
      {message && <p>{message}</p>}
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      <a
        href="https://developers.line.biz/ja/docs/liff/"
        target="_blank"
        rel="noreferrer"
      >
        LIFF Documentation
      </a>
      
    </div>
    
  );
}

export default App;