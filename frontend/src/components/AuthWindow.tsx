import { useState } from "react";
import type { CSSProperties } from "react";
import { registerUser, loginUser } from "../utils/authService";


type AuthMode = "Sign Up" | "Log In";

interface AuthProps {
    onClose: () => void;
    initialMode: AuthMode;
    setIsAuthenticated: (value: boolean) => void;
}


function AuthWindow({ onClose, initialMode, setIsAuthenticated}: AuthProps) {
    const [mode, setMode] = useState<AuthMode>(initialMode);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await registerUser({ name, password });

            alert("Registration successful! You can now log in.");
            setMode("Log In");

        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                alert(error.message);
            }
        }
    };

    const handleLogin = async () => {
        try {
            const data = await loginUser(name, password);

            localStorage.setItem("token", data.Token);

            setIsAuthenticated(true);

            onClose();

        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                alert(error.message);
            }
        }
    };

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

                <input 
                    style={inputStyle} 
                    type="text" 
                    placeholder="Name"
                    value = {name}
                    onChange={(e) => setName(e.target.value)} 
                />
                
                <input 
                    style={inputStyle} 
                    type="password" 
                    placeholder="Password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)} 
                    />

                {!isLogin && (
                    <input
                        style={inputStyle} 
                        type="password" 
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                )}

                <button 
                    style={buttonStyle}
                    type="button"
                    onClick={isLogin ? handleLogin : handleSignUp}
                    >
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