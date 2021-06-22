
import { Home } from "./pages/Home"
import {NewRoom} from "./pages/NewRoom"
import {BrowserRouter, Route} from 'react-router-dom';
import { createContext } from "react";
import { useState } from "react";


import {auth, firebase} from '../src/services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signWithGoogle: () => Promise<void>;
}


export const AuthContext = createContext({} as AuthContextType );
function App() {
  const [user, setUser] = useState<User>();

  async function signWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    
    if(result.user){
      const {displayName, photoURL, uid} = result.user;
      if(!displayName || !photoURL){
        throw new Error('Erro de informações na conta Google');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      });

    }
  
  }

  return (
    <BrowserRouter>
    <AuthContext.Provider value={{user, signWithGoogle}}>
    <Route path="/" exact component={Home} />
    <Route path="/rooms/new" component={NewRoom} />
    </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
