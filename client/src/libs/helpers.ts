import { UserDetailsFromLocal } from '@/types/users';

export const accessLocalStore = (key: string): UserDetailsFromLocal => {
  const fetchKey = localStorage.getItem(key)!;
  if (fetchKey) {
    try {
      const userData: UserDetailsFromLocal = JSON.parse(fetchKey);
      return userData;
    } catch (error) {
      console.log('Error parsing user data from local storage:', error);
    }
  }

  return {
    _id: null,
    name: null,
    email: null,
    role: null,
    token: null,
  };
};
