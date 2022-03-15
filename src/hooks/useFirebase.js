import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initialzeAuthentication from "../components/Firebase/firebase.init";

initialzeAuthentication();

const useFirebase =()=>{
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const auth= getAuth();
  const signInUsingGoogle = ()=>{
      signInWithPopup(auth, googleProvider)
      .then(result=>{
          console.log(result.user);
      })
  }
  const logOut = ()=>{
      signOut(auth)
      .then(()=>{
          setUser({});
      })
  }
  useEffect(()=>{
      onAuthStateChanged(auth, (user)=>{
          if(user){
              setUser(user);
          }
      })
  },[])

  return{
      signInUsingGoogle,
      user, 
      logOut
  }
}

export default useFirebase;