export const loadFromLocalStorage = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : undefined;
    } catch (e) {
      console.warn('Load error:', e);
      return undefined;
    }
  };
  
  export const saveToLocalStorage = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn('Save error:', e);
    }
  };
  