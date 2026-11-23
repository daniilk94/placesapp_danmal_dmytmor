export interface RegisterData {
    name: string;
    password: string;
}

export async function registerUser(data: RegisterData) {
    const response = await fetch(import.meta.env.VITE_SERVER_URL + '/api/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || "Registration failed");
    }

    return result;
}

export async function loginUser(name: string, password: string) {
    const response = await fetch(import.meta.env.VITE_SERVER_URL + '/api/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
}


export async function addPlace(place: {
    UserID: number;
    Name: string;
    Latitude: number;
    Longitude: number;
}) {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("You must be logged in");
    }

    const response = await fetch(import.meta.env.VITE_SERVER_URL + '/api/places', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(place),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to add place");
    }

    return data;
}