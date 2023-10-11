/* TODO:
Complete the following API functions to fetch user's data and its unmasked phone number.
Each request should be authenticated with a Bearer token of 'WellTheoryCode2023'.
Use the default fetch API.

(Optional) Use JSDoc to document the functions.
*/

export type UserT = typeof exampleUser;
type PhoneResponseT = typeof examplePhone;

const AUTH_HEADER = { headers: { Authorization: 'Bearer WellTheoryCode2023' } };

export const me = async (): Promise<UserT> => {
  const response = await fetch(
    'https://us-central1-internals-358114.cloudfunctions.net/react-challenge/me',
    AUTH_HEADER,
  );
  return response.json();
};

export const phone = async (): Promise<string> => {
  const response = await fetch(
    'https://us-central1-internals-358114.cloudfunctions.net/react-challenge/phone',
    AUTH_HEADER,
  );
  return response.json()['phone'];
};

const exampleUser = {
  id: 'cllusdbcb00003b6oxbgab8pi',
  email: 'marry@example.com',
  first_name: 'Marry',
  last_name: 'Smith',
  address: {
    line1: '123 Main St',
    city: 'San Francisco',
    state: 'CA',
    postal_code: '94111',
    country: 'US',
  },
  masked_phone: '*-***-***-****',
  shipping: {
    name: 'Marry Smith',
    address: {
      line1: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94111',
      country: 'US',
    },
  },
};

const examplePhone = {
  phone: '1-888-555-1234',
};
