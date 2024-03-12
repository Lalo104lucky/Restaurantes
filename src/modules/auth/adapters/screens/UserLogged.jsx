import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoadingComponent from "../../../../kernel/components/Loading";
import UserGuest from "./UserGuest";
import Profile from "./Profile";

export default function UserLogged(props) {
  const { navigation } = props;
  const auth = getAuth();
  const [session, setSession] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(true);
      } else {
        setSession(false);
      }
    });
  }, []);

  if (session === null)
    return <LoadingComponent visible={true} title="Cargando" />;

  return (session ? <Profile navigation={navigation}/> : <UserGuest navigation={navigation} />);
}
