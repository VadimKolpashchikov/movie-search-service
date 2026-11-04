import { useState } from 'react';

const STORAGE_PROFILES_KEY = 'profiles';

const getProfiles = () => {
  const data = localStorage.getItem(STORAGE_PROFILES_KEY);
  return data ? JSON.parse(data) : [];
};

const setProfiles = (profiles) => {
  localStorage.setItem(STORAGE_PROFILES_KEY, JSON.stringify(profiles));
};

export function useUserLogin() {
  const [user, setUser] = useState(() => {
    const profiles = getProfiles();
    return profiles.find((p) => p.isLogged) ?? null;
  });

  const login = (name) => {
    const profiles = getProfiles();
    const updatedProfiles = profiles.reduce((acc, p) => {
      if (p.name !== name) {
        acc.push({ ...p, isLogged: false });
      }

      return acc;
    }, []);

    const newProfile = { name, isLogged: true };

    setProfiles([newProfile, ...updatedProfiles]);
    setUser(newProfile);
  };

  const logout = () => {
    const profiles = getProfiles();
    const updatedProfiles = profiles.map((p) => ({ ...p, isLogged: false }));

    setProfiles(updatedProfiles);
    setUser(null);
  };

  return {
    user,
    login,
    logout,
  };
}
