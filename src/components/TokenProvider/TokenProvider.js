import {createContext, useState} from "react";
 
const TokenContext = createContext();
export default TokenContext;
 
export const TokenSetContext = createContext();
 
export function TokenProvider ({children}) {
  const [token, setToken] = useState(null);
 
  return (
    <TokenContext.Provider value={token}>
      <TokenSetContext.Provider value={setToken}>
        {children}
      </TokenSetContext.Provider>
    </TokenContext.Provider>
  );
}