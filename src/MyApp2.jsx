import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./index.css";

const MyApp2 = () => {
  const printRef = useRef();

  const generatePDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("transactions.pdf");
  };

  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl">React PDF Generator</h1>
      </header>
      <main className="p-4 flex justify-center">
        <div className="w-[85%] mx-auto bg-white dark:bg-gray-700 rounded-md shadow-md overflow-hidden" ref={printRef}>
          <div className="px-4 py-2">
            <div className="flex flex-col justify-center gap-3">
              <span className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-magnet"
                >
                  <path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"></path>
                  <path d="m5 8 4 4"></path>
                  <path d="m12 15 4 4"></path>
                </svg>
              </span>
              <h2 className="text-center dark:text-gray-100 font-bold mb-3">AI Expenses Manager</h2>
            </div>
            <h1 className="text-xl font-semibold text-center mt-2 dark:text-gray-100">
              Your Organization Transactions
            </h1>
            <div className="mt-6 text-green-500 dark:text-gray-100">
              <h2 className="text-lg font-semibold">Incoming Transactions</h2>
              <table className="w-full mt-2">
                <thead className="odd:bg-gray-200">
                  <tr className="text-left border-b">
                    <th className="py-2">Transaction ID</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Reason</th>
                    <th className="py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-bg-gray-100 px-2">
                    <td className="py-2">1</td>
                    <td className="py-2">100</td>
                    <td className="py-2">Sale</td>
                    <td className="py-2">2023-01-01</td>
                  </tr>
                  {/* Add more transactions here */}
                </tbody>
              </table>
              <h2 className="text-lg text-orange-600 font-semibold mt-6">Outgoing Transactions</h2>
              <table className="w-full mt-2">
                <thead className="bg-gray-200">
                  <tr className="text-left border-b">
                    <th className="py-2">Transaction ID</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Source</th>
                    <th className="py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-bg-gray-100 px-2">
                    <td className="py-2">2</td>
                    <td className="py-2">50</td>
                    <td className="py-2">Purchase</td>
                    <td className="py-2">2023-01-02</td>
                  </tr>
                  {/* Add more transactions here */}
                </tbody>
              </table>
            </div>
          </div>
          <img src="https://example.com/qr-code.png" alt="QR Code" width="200px" height="200px" />
          <div className="bg-gray-100 dark:bg-gray-600 px-2 py-4 m-5">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              This is an automated email. Please do not reply to this message.
            </p>
          </div>
        </div>
        <button
          onClick={generatePDF}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Download PDF
        </button>
      </main>
    </div>
  );
};

export default MyApp2;
