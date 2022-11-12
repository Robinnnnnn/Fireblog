import { auth, googleAuthProvider } from "../lib/firebase"

export default function EnterPage({}){
    return (
        <main>
            //if user
            {user? 
                //if no username, show Username Form, otherwise show sign out button if User and Username
                !username ? <UsernameForm /> : <SignOutButton />
                //else if no user, show sign in button
                : <SignInButton />
            }
        </main>
    )
}

function SignInButton(){

    const signInWithGoogle = async() => {
        await auth.signInWithPopup(googleAuthProvider);
    };

    return(
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src='/google.png' /> Sign In With Google 
        </button>
    )
}

function SignOutButton(){
    return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm(){

}