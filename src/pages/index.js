import React from "react"
import "normalize.css"

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        background: "#663399",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          fontFamily: "Arial, sans-serif",
          color: "white",
          fontSize: "40px",
          marginBottom: "8px",
        }}
      >
        Hello from Gatsby!
      </h2>
      <h3
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#fff",
          opacity: "0.25",
          fontSize: "18px",
          marginTop: "0",
        }}
      >
        Deployed to DigitalOcean
      </h3>
    </div>
  )
}
