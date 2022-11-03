import API_URL from "../constants";


type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

async function api<T>(path: string, method: Method, body?: any): Promise<T> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    const res = await fetch(`${API_URL}${path}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    });

    return res.json();
}


export async function get<T>(path: string): Promise<T> {
    return api<T>(path, "GET");
}

export async function del<T>(path: string): Promise<T> {
    return api<T>(path, "DELETE");
}

export async function post<T>(path: string, body: any): Promise<T> {
    return api<T>(path, "POST", body);
}

export async function put<T>(path: string, body: any): Promise<T> {
    return api<T>(path, "PUT", body);
}

export async function patch<T>(path: string, body: any): Promise<T> {
    return api<T>(path, "PATCH", body);
}

