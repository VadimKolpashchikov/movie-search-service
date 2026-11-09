import { useState } from 'react';
import type { UserType, IUserContext } from '../UserContext.type';

type ProfilesType = UserType[];

const STORAGE_PROFILES_KEY = 'profiles';

const getProfiles = (): ProfilesType => {
  const data = localStorage.getItem(STORAGE_PROFILES_KEY);
  return data ? JSON.parse(data) : [];
};

const setProfiles = (profiles: ProfilesType) => {
  localStorage.setItem(STORAGE_PROFILES_KEY, JSON.stringify(profiles));
};

export function useUserContext(): IUserContext {
  const [user, setUser] = useState<UserType | null>(() => {
    const profiles = getProfiles();
    return profiles.find((p) => p.isLogged) ?? null;
  });

  const login = (name: UserType['name']): void => {
    const profiles = getProfiles();
    const updatedProfiles = profiles.reduce<ProfilesType>((acc, p) => {
      if (p.name !== name) {
        acc.push({ ...p, isLogged: false });
      }

      return acc;
    }, []);

    const newProfile = { name, isLogged: true };

    setProfiles([newProfile, ...updatedProfiles]);
    setUser(newProfile);
  };

  const logout = (): void => {
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
