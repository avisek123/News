import React from "react";
import { auth } from "../Configs";

const useFirebase = () => {
  const [user] = React.useState({});
  const [uid] = React.useState(null);
  const [providerId, setProviderId] = React.useState("");

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

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        currentUser
          ?.getIdTokenResult()
          .then((data) => setProviderId(data.signInProvider));
      }
    });

    return unsubscribe;
  }, []);

  return {
    signup,
    login,
    logout,
    user,
    uid,
    providerId,
    updatePassword,
  };
};

export default useFirebase;
