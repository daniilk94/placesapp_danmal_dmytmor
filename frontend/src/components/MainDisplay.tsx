import ListOfPlaces from './ListOfPlaces';
import MapComponent from './MapComponent';
import { useAuth } from "../utils/useAuth";
import { useState, useEffect } from 'react';
import type { PlacesProps } from '../interfaces.ts';
import type { CSSProperties } from 'react';
import AuthWindow from "./AuthWindow.tsx";


const MainDisplay = ({ places }: PlacesProps) => {
    const { isAuthenticated, logout } = useAuth();
    type authMode = "Log In" | "Sign Up" | null;

    const [authMode, setAuthMode] = useState<authMode>(null);
    
    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '95dvh',
    };


    const headerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '12px 24px',
        gap: '10px',
    };

    const contentStyle: CSSProperties = {
        display: 'flex',
        flex: 1,
        minHeight: 0
    };

    const buttonStyle: CSSProperties = {
        padding: "5px",
        width: "100px",
        border: "2px solid #333",
        borderRadius: "15px",
        cursor: "pointer",
    };


        

    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                {isAuthenticated ?  (
                    <>
                        <button style={buttonStyle}>Profile</button>
                        <button style={buttonStyle} onClick={logout}>Log Out</button>

                    </>
                ) : (
                    <>
                        <button style={buttonStyle} onClick={() => setAuthMode("Log In")}>
                            Log In
                        </button>

                        <button style={buttonStyle} onClick={() => setAuthMode("Sign Up")}>
                            Sign Up
                        </button>
                    </>
                )}
            </header>
            

            <div style={contentStyle}>
                <MapComponent places={places} />
                <ListOfPlaces places={places} />
            </div>

            {authMode !== null && (
                <AuthWindow
                    initialMode={authMode}
                    onClose={() => setAuthMode(null)}
                />
            )}

        </div>
    );
};

export default MainDisplay;
