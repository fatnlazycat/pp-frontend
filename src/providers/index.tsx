import React, { useContext, useEffect, useState } from 'react';
import * as API from '@api';
import { UserT } from '@api';

/* TODO:
Complete the UserProvider to manage user data and phone number masking.
1. Fetch user data with API.me() on provider's mount.
2. Implement a function to toggle phone number masking (you can fetch unmasked phone number with API.phone()
3. Pass down the user data and the toggle function to the context value.
*/

const UserContext = React.createContext<UserState>(null);

type UserProviderProps = {
  children: React.ReactNode;
};

type UserState = {
  user?: UserT;
  phone?: string;
};

export const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
  const [userState, setUserState] = useState<UserState>();

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      const userPromise = API.me();
      const phonePromise = API.phone();
      Promise.all([userPromise, phonePromise]).then(([user, phone]) => {
        setUserState({ user, phone });
        })
        .catch(e => console.log(e));
    };

    fetchUser().catch(e => console.log(e));
  }, []);

  return <UserContext.Provider value={userState}>{children}</UserContext.Provider>;
};

export const useUser = (): UserState | undefined => {
  const user = useContext(UserContext);
  return user;
};
