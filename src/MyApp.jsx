// src/App.js
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./components/MyDcoument2";
import "./index.css";

const organization = {
  name: "Your Organization Name",
};

const incomingTransactions = [
  { _id: "1", amount: 100, reason: "Sale", transactionDate: "2023-01-01" },
  // Add more transactions here
];

const outgoingTransactions = [
  { _id: "1", amount: 50, source: "Purchase", transactionDate: "2023-01-01" },
  // Add more transactions here
];

const qrCodeImageUrl = "path/to/your/qr-code.png";

function MyApp() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl">React PDF Generator</h1>
      </header>
      <main className="p-4 flex justify-center">
        <PDFDownloadLink
          document={
            <MyDocument
              organization={organization}
              incomingTransactions={incomingTransactions}
              outgoingTransactions={outgoingTransactions}
              qrCodeImageUrl={qrCodeImageUrl}
            />
          }
          fileName="transactions.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
      </main>
    </div>
  );
}

export default MyApp;
