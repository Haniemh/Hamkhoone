const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

const ACCESS_TOKEN_KEY = "hamkhoone_access_token";
const REFRESH_TOKEN_KEY = "hamkhoone_refresh_token";

export function hasAccessToken() {
  return Boolean(localStorage.getItem(ACCESS_TOKEN_KEY));
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setTokenPair(tokens) {
  if (tokens?.access) {
    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.access);
  }

  if (tokens?.refresh) {
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refresh);
  }
}

export function clearTokenPair() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

async function request(path, options = {}) {
  const headers = new Headers(options.headers ?? {});
  const token = getAccessToken();

  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const detail = data?.detail || data?.message || "خطا در ارتباط با سرور";
    throw new Error(typeof detail === "string" ? detail : "خطا در ارتباط با سرور");
  }

  return data;
}

export async function login(username, password) {
  const tokens = await request("/api/profile/auth/login/", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  setTokenPair(tokens);
  return tokens;
}

export async function signup({ username, password, phone }) {
  const tokens = await request("/api/profile/auth/signup/", {
    method: "POST",
    body: JSON.stringify({ username, password, phone: phone || "" }),
  });
  setTokenPair(tokens);
  return tokens;
}

export function getProfile() {
  return request("/api/profile/get-profile/");
}

export function updateProfile(payload) {
  return request("/api/profile/profile/update/", {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
}

export function listUsers() {
  return request("/api/profile/list-users/");
}

export function listTags() {
  return request("/api/profile/list-tags/");
}
