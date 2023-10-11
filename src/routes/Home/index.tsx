import React, { useCallback, useMemo, useState } from 'react';

import * as s from './styles';
import { UserProvider, useUser } from '@providers';

/* TODO:
1. Center Card component within the #home.
2. Display user's full name and their email. Use UserProvider's functionality (see providers.js)
3. Display user's masked phone number, and implement a way to unmask it. Use UserProvider's context.
*/

const Card = (): JSX.Element => {
  const userState = useUser();
  const [isMasking, setIsMasking] = useState(false);

  const toggleMasking = useCallback(() => {
    setIsMasking(prev => !prev);
  }, []);

  const fullName = useMemo(
    () => `${userState?.user?.first_name} ${userState?.user?.last_name}`,
    [userState],
  );

  const phoneToShow = useMemo(
    () => (isMasking ? userState?.user?.masked_phone : userState?.phone),
    [isMasking, userState],
  );

  return (
    <div id="card">
      <p>Name</p>
      <p>{fullName}</p>
      <p onClick={toggleMasking}>Phone</p>
      <p>{phoneToShow}</p>
    </div>
  );
};

const Home = (): JSX.Element => {
  return (
    <UserProvider>
      <div id="home" style={s.homeStyle}>
        <Card />
      </div>
    </UserProvider>
  );
};

export default Home;
