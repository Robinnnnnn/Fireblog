import Link from "next/link"
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Navbar({}){

    const { user, username } = useContext(UserContext)

    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo"> FEED </button>
                    </Link>
                </li>

            {/* @User is signed in */}
            { username && (
               <>
                <li className="push-left">
                    <Link href="/admin">
                        <button className="btn-blue"> WRITE POST</button>
                    </Link>
                </li>
                <li>
                    <Link href={`/${username}`}>
                        <img src={user?.photoURL} />
                    </Link>
                </li>
               </>
            )}

            {/* @User is signed out */}
            { !username && (
                <Link href="/enter">
                    <button className="btn-blue"> Sign In</button>
                </Link>
            )}

            </ul>
        </nav>
    )
}