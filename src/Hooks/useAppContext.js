import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";
import { auth, database } from "../Configs";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [uid, setUid] = useState(null);
  const [userData, setUserData] = useState({});
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }
  function updatePassword(password) {
    return user.updatePassword(password);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setUid(user.uid);
        setIsLoggedIn(true);
        database
          .ref(`Users/${user.uid}/displayName`)
          .set(user?.displayName || "");
        database.ref(`Users/${user.uid}/email`).set(user?.email || "");
        database.ref(`Users/${user.uid}/photoURL`).set(user?.photoURL || "");
        database.ref(`Users/${user.uid}/uid`).set(user?.uid || "");
        database
          .ref(`Users/${user.uid}/creationTime`)
          .set(user?.metadata?.creationTime || "");
        database
          .ref(`Users/${user.uid}/lastSignTime`)
          .set(user?.metadata?.lastSignInTime || "");
        database.ref(`Users/${user?.uid}`).on("value", (snap) => {
          setUserData(snap.val());
        });
      }
    });
    return unsubscribe;
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        signup,
        login,
        logout,
        updatePassword,
        user,
        uid,
        userData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
