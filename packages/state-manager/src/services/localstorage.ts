export function LocalStorageService() {
  const isLocalStorageUnavailable = typeof localStorage === "undefined";

  const set = (key: string, value: any) => {
    if (isLocalStorageUnavailable) {
      console.warn("Local storage is not available.");
      return null;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }

  const get = (key: string) => {
    if (isLocalStorageUnavailable) {
      console.warn("Local storage is not available.");
      return null;
    }

    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  return { set, get };
}
