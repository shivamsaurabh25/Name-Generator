import { useState } from "react";

const specialStyles = [
    "꧁༒☬ {name} ☬༒꧂", "✿❀ {name} ❀✿", "★彡 {name} 彡★", "♛『 {name} 』♛",
    "꧁𓊈𒆜 {name} 𒆜𓊉꧂", "๖ۣۜ {name} ๖ۣۜ", "⫷ {name} ⫸", "◥꧁ {name} ꧂◤",
    "╰☆☆ {name} ☆☆╮", "𒀱 {name} 𒀱", "✪ {name} ✪", "♜『 {name} 』♜",
    "♔✧ {name} ✧♔", "♠️ {name} ♠️", "✵『 {name} 』✵", "➻❥ {name} ❥➻",
    "༆『 {name} 』༆", "♆『 {name} 』♆", "༄ᶦᶰᵈ✿ {name} ࿐", "꧁༺ {name} ༻꧂",
];

function App() {
    const [name, setName] = useState("");
    const [styledNames, setStyledNames] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const namesPerPage = 10;

    const generateNames = () => {
        if (!name.trim()) return;
        setStyledNames(specialStyles.map(style => 
            style.replace("{name}", `${name} ${Math.floor(Math.random() * 1000)}`)
        ));
        setCurrentPage(0);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied: " + text);
    };

    const paginatedNames = styledNames.slice(
        currentPage * namesPerPage,
        (currentPage + 1) * namesPerPage
    );

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
            color: "#ffffff",
            fontFamily: "'Orbitron', sans-serif",
            padding: "20px",
        }}>
            <div style={{
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                padding: "20px",
                width: "90%",
                maxWidth: "500px",
                textAlign: "center",
            }}>
                <h1 style={{ fontSize: "22px" }}>✨ Gaming Name Generator ✨</h1>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        width: "95%",
                        padding: "12px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        border: "none",
                        outline: "none",
                        background: "rgba(255, 255, 255, 0.2)",
                        color: "#fff",
                        marginBottom: "10px",
                        textAlign: "center",
                        fontFamily: "'Orbitron', sans-serif"
                    }}
                />
                <button
                    onClick={generateNames}
                    style={{
                        width: "100%",
                        padding: "12px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        background: "#ff5722",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                        marginTop: "10px"
                    }}>
                    Generate
                </button>

                <div style={{ marginTop: "20px" }}>
                    {paginatedNames.map((styled, index) => (
                        <div key={index} style={{
                            margin: "8px 0",
                            fontSize: "16px",
                            background: "rgba(255, 255, 255, 0.2)",
                            padding: "10px",
                            borderRadius: "8px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: "#fff",
                            wordBreak: "break-word"
                        }}>
                            {styled}
                            <button
                                onClick={() => copyToClipboard(styled)}
                                style={{
                                    padding: "6px",
                                    background: "#4CAF50",
                                    color: "#fff",
                                    border: "none",
                                    cursor: "pointer",
                                    borderRadius: "5px"
                                }}>
                                📋 Copy
                            </button>
                        </div>
                    ))}
                </div>

                {styledNames.length > namesPerPage && (
                    <button
                        onClick={() => setCurrentPage(prev => (prev + 1) % Math.ceil(styledNames.length / namesPerPage))}
                        style={{
                            marginTop: "10px",
                            width: "100%",
                            padding: "10px",
                            background: "#007BFF",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: "5px"
                        }}>
                        Next 10 ➡️
                    </button>
                )}
            </div>
        </div>
    );
}

export default App;