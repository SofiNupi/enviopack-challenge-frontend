import React, { useState, useContext } from 'react';
import userMock from '../mocks/profile.json';

export const UserContext = React.createContext();

export function useUser () {
    return useContext(UserContext)
}


export function UserProvider({ children }) {

  const user = userMock.profile;

  const [credit, setCredit] = useState(user.credit)

  function updateCredit (value) {
      setCredit(credit - value)
  }

  return (
    <UserContext.Provider value={{ firstName: user.firstName, credit, updateCredit }}>
        {children}
    </UserContext.Provider>
  )
}