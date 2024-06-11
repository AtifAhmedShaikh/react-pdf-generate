// src/components/MyDocument.js
import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

// Define styles using react-pdf's StyleSheet
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  container: {
    margin: "auto",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  header: {
    padding: 10,
    backgroundColor: "#f7f7f7",
    textAlign: "center",
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  table: {
    width: "100%",
    marginBottom: 20,
  },
  th: {
    fontWeight: "bold",
    textAlign: "left",
    borderBottom: "1px solid #000",
    paddingBottom: 5,
  },
  td: {
    paddingBottom: 5,
    borderBottom: "1px solid #ddd",
  },
  footer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f7f7f7",
    textAlign: "center",
  },
});

const MyDocument2 = ({ organization, incomingTransactions, outgoingTransactions, qrCodeImageUrl }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>AI Expenses Manager</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>{organization.name} Transactions</Text>
          <Text style={styles.title}>Incoming Transactions</Text>
          <Text>Total Amount: {incomingTransactions.reduce((sum, tx) => sum + tx.amount, 0)}</Text>
          <View style={styles.table}>
            <Text style={styles.th}>Transaction ID</Text>
            <Text style={styles.th}>Amount</Text>
            <Text style={styles.th}>Reason</Text>
            <Text style={styles.th}>Date</Text>
            {incomingTransactions.map((tx) => (
              <View key={tx._id} style={styles.row}>
                <Text style={styles.td}>{tx._id}</Text>
                <Text style={styles.td}>{tx.amount}</Text>
                <Text style={styles.td}>{tx.reason}</Text>
                <Text style={styles.td}>{tx.transactionDate}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.title}>Outgoing Transactions</Text>
          <Text>Total Amount: {outgoingTransactions.reduce((sum, tx) => sum + tx.amount, 0)}</Text>
          <View style={styles.table}>
            <Text style={styles.th}>Transaction ID</Text>
            <Text style={styles.th}>Amount</Text>
            <Text style={styles.th}>Source</Text>
            <Text style={styles.th}>Date</Text>
            {outgoingTransactions.map((tx) => (
              <View key={tx._id} style={styles.row}>
                <Text style={styles.td}>{tx._id}</Text>
                <Text style={styles.td}>{tx.amount}</Text>
                <Text style={styles.td}>{tx.source}</Text>
                <Text style={styles.td}>{tx.transactionDate}</Text>
              </View>
            ))}
          </View>
        </View>
        <Image src={qrCodeImageUrl} style={{ width: 200, height: 200, alignSelf: "center" }} />
        <View style={styles.footer}>
          <Text>This is an automated email. Please do not reply to this message.</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument2;
