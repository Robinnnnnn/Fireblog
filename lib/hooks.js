import { auth, firestore } from '../lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  //listens to any changes to the user object, see second argument to function -> [user]
  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
        // check the data base @ collection users for a user with id & store it in ref variable...
      const ref = firestore.collection('users').doc(user.uid);
      //listen to data in real time. 
      // onSpapshot invokes a call backs internally that turns of the subscription
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }
    //here we return unsubscribe to let react know we arent listening to real time information anymore
    return unsubscribe;
  }, [user]);

  return { user, username };
}