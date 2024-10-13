import { Button } from "@mui/material";
import React, { useState } from "react";
//import './FarmContract.css'; // Assuming you're using external CSS for styles

const SmartContract = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [terms, setTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || phone === "" || !terms) {
      alert("Please fill out all fields and accept the terms and conditions.");
      return;
    }

    // Simulate backend call for sending email
    fetch("send_email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Contract sent successfully!");
        } else {
          alert("Error sending contract.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Show contract copy
    setSubmitted(true);
  };

  return (
    <div>
      <Button variant="contained" onClick={() => history.back()}>
        Back
      </Button>
      <header
        style={{
          backgroundColor: "#2B5F33",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        Farm Purchase Agreement
      </header>

      <div className="container fade-in">
        <h2>Contract Details</h2>

        <div className="contract-section">
          <div className="contract-point">
            <span className="icon">🌾</span>
            <strong>Offer:</strong> The farmer offers to sell a specific
            quantity of agricultural products at a certain price.
          </div>
          <div className="contract-point">
            <span className="icon">✅</span>
            <strong>Acceptance:</strong> The buyer accepts the farmer's offer,
            agreeing to purchase the specified quantity at the agreed-upon
            price.
          </div>
          <div className="contract-point">
            <span className="icon">💰</span>
            <strong>Consideration:</strong> The farmer's promise to deliver the
            agricultural products is exchanged for the buyer's promise to pay
            the agreed-upon price.
          </div>
          <div className="contract-point">
            <span className="icon">🔞</span>
            <strong>Legal Age:</strong> Both the farmer and the buyer must be of
            legal age to enter into the contract.
          </div>
          <div className="contract-point">
            <span className="icon">🧠</span>
            <strong>Mental Capacity:</strong> Both parties must have the mental
            capacity to understand the terms of the agreement.
          </div>
          <div className="contract-point">
            <span className="icon">⚖</span>
            <strong>Legal Purpose:</strong> The contract must be for a legal
            purpose, such as the sale of agricultural products.
          </div>
          <div className="contract-point">
            <span className="icon">⏳</span>In case of late delivery, the smart
            contract may include fines, but it depends on the terms agreed upon
            by both the farmer and the buyer during contract creation.
          </div>
          <div className="contract-point important-point  text-red-600">
            <span className="icon">⚠</span>If the farmer or buyer breaches the
            contract, legal action will be taken under{" "}
            <strong>IPC section 491</strong>.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="input-section slide-in">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />

          <div className="checkbox-section">
            <input
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={() => setTerms(!terms)}
            />
            <label htmlFor="terms">I accept the terms and conditions</label>
          </div>

          <button
            type="submit"
            style={{ border: "2px solid black,", width: "200px" }}
            onClick={handleSubmit}
          >
            Submit Contract
          </button>
        </form>

        {submitted && (
          <div className="contract-copy fade-in ">
            <h3 className="mt-16">Submitted Contract</h3>
            <p style={{ border: "2px solid black,", width: "200px" }}>
              <strong>Name:</strong> {name}
            </p>
            <p
              className="border-solid mt-4"
              style={{ border: "2px solid black,", width: "200px" }}
            >
              <strong>Phone:</strong> {phone}
            </p>
            <p>Terms and Conditions: Accepted</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartContract;
