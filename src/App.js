
import React from "react";
import clips from "./MyClip.json";



function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "#0000FF", color: "#fff", padding: "1rem", textAlign: "center" }}>
        <h1>APTECH STUDIO </h1>
      </header>
      <h1> My Clip </h1>
      <main style={{ padding: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
          {clips.map((clip, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                background: "#f9f9f9",
              }}
            >
              <h2>{clip.title}</h2>
              <p>{clip.description}</p>
              <img
                src={clip.start}
                alt={`Thumbnail of ${clip.title}`}
                style={{ width: "100%", borderRadius: "4px" }}
              />
              <video
                controls
                style={{ width: "100%", marginTop: "1rem", borderRadius: "4px" }}
              >
                <source src={clip.source_clip} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </main>
      <footer style={{ background: "#0000FF", color: "#fff", textAlign: "center", padding: "1rem" }}>
        <p>&copy; 2024 MyClip App</p>
      </footer>
    </div>
  );
}

export default App;