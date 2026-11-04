import { useEffect, useState } from 'react';

const STORAGE_PROFILES_KEY = 'profiles';
const STORAGE_ACTIVE_USER_KEY = 'user';

export function useUserLogin() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(STORAGE_ACTIVE_USER_KEY)));

  useEffect(() => {
    const profiles = JSON.parse(localStorage.getItem(STORAGE_PROFILES_KEY)) ?? [];

    if (user) {
      if (!profiles.length) {
        localStorage.setItem(STORAGE_PROFILES_KEY, JSON.stringify([user]));
      }
      else {
        const filteredProfiles = profiles.filter((profile) => profile.name !== user.name);

        localStorage.setItem(STORAGE_PROFILES_KEY, JSON.stringify([user, ...filteredProfiles]));
      }

      localStorage.setItem(STORAGE_ACTIVE_USER_KEY, JSON.stringify(user));
    }
  }, [user]);

  return [user, setUser];
}
