import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./components/MyComponent";
import MyDocument2 from "./components/MyDcoument2";

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl">React PDF Generator</h1>
      </header>
      <main className="p-4">
        <div className="flex justify-center">
          <PDFDownloadLink
            document={<MyDocument2 />}
            fileName="myDocument.pdf"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
          </PDFDownloadLink>
        </div>
      </main>
    </div>
  );
}

export default App;
