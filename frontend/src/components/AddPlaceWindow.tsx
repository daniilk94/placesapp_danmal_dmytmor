import { useState } from "react";
import type { CSSProperties } from "react";

import type { NewPlace } from "../interfaces"

interface AddPlaceWindowProps {
    onClose: () => void;
    onAddPlace: (place: NewPlace) => void;
}

function AddPlaceWindow({ onClose, onAddPlace }: AddPlaceWindowProps) {
    const [ID, setId] = useState("");
    const [name, setName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const handleAddPlace = () => {
    const id = Number(ID);
    const lat = Number(latitude);
    const lng = Number(longitude);

    if (!ID.trim() || !name.trim() || !latitude.trim() || !longitude.trim()) {
        alert("Please fill in all fields");
        return;
    }

    const newPlace: NewPlace = {
        UserID: id,
        Name: name.trim(),
        Latitude: lat,
        Longitude: lng
    };

    onAddPlace(newPlace);
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

    return (
        <div style={modalStyle}>
            <div style={contentStyle}>
                <button
                    type="button"
                    style={closeButtonStyle}
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2>Add new place</h2>

                <input
                    style={inputStyle}
                    type="number"
                    step="1"
                    placeholder="User ID"
                    value={ID}
                    onChange={(e) => setId(e.target.value)}
                />

                <input
                    style={inputStyle}
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    style={inputStyle}
                    type="number"
                    placeholder="Latitude"
                    step="any"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                />

                <input
                    style={inputStyle}
                    type="number"
                    placeholder="Longitude"
                    step="any"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                />

                <button
                    style={buttonStyle}
                    type="button"
                    onClick={handleAddPlace}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default AddPlaceWindow;
