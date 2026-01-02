import React from "react";
import { useLocation } from "react-router-dom";
import "./PreviewPage.css";

const PreviewPage = () => {
  const { state } = useLocation();

  if (!state) {
    return <p>No data found</p>;
  }

  const { name, phone, amount } = state;

  const timeStamp = new Date().toLocaleString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  return (
    <div className="preview-wrapper">
      <div className="image-box">
        <img
          src="/phpay.jpeg"
          alt="Payment UI"
          className="responsive-image"
        />

        {/* Timestamp */}
        <div className="timestamp">{timeStamp}</div>

        {/* Name */}
        <div className="name">{name}</div>

        {/* Phone */}
        <div className="phone">+91 {phone}</div>

        {/* Amount */}
        <div className="amount">₹{amount}</div>
      </div>
    </div>
  );
};

export default PreviewPage;
