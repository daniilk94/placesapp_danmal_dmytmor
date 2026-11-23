import { useState } from "react";
import type { CSSProperties } from "react";


type authMode = "Sign Up" | "Log In";

interface authProps {
    onClose: () => void;
    initialMode: authMode;
}

function AuthWindow({ onClose, initialMode }: authProps) {
    const [mode, setMode] = useState<authMode>(initialMode);

    const modalStyle: CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    };

    const contentStyle: CSSProperties = {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        backgroundColor: "white",
        padding: "35px 30px 30px",
        borderRadius: "12px",
        width: "350px",
        boxSizing: "border-box",
    };

    const closeButtonStyle: CSSProperties = {
        position: "absolute",
        top: "10px",
        right: "10px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: "20px",
    };

    const inputStyle: CSSProperties = {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
    };

    const buttonStyle: CSSProperties = {
        padding: "10px",
        borderRadius: "6px",
        cursor: "pointer",
    };

    const isLogin = mode === "Log In";

    return (
        <div style={modalStyle}>
            <div style={contentStyle}>
                <button style={closeButtonStyle} onClick={onClose}>✕</button>

                <h2>{isLogin ? "Log In" : "Sign Up"}</h2>

                <input style={inputStyle} type="name" placeholder="Name" />
                <input style={inputStyle} type="password" placeholder="Password" />

                {!isLogin && (
                    <input
                        style={inputStyle} type="password" placeholder="Repeat password"
                    />
                )}

                <button style={buttonStyle}>
                    {isLogin ? "Log In" : "Sign Up"}
                </button>

                <p>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                </p>

                <button style={buttonStyle} onClick={() => setMode(isLogin ? "Sign Up" : "Log In")}>
                    {isLogin ? "Sign Up" : "Log In"}
                </button>
            </div>
        </div>
    );
}

export default AuthWindow;