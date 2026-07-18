// Central place to read env-based config, so no component reaches into
// import.meta.env directly. When the dashboards are built, they import
// API_BASE_URL from here instead of hardcoding a URL.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
