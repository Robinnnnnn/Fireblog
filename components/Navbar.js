import Link from "/next/link"

export default function Navbar({}){

    const [user, username] = {};

    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <button> FEED </button>
                    </Link>
                </li>

            {/* @User is signed in */}
            { username && (
               <>
                <li>
                    <Link href="/admin">
                        <button> WRITE POST</button>
                    </Link>
                </li>
                <li>
                    <Link href={`/${username}`}>
                        <img src={user?.photoURL} />
                    </Link>
                </li>
               </>
            )}

            {/* @User is signed in */}
            { !username && (
                <Link href="/enter">
                    <button> Sign In</button>
                </Link>
            )}

            </ul>
        </nav>
    )
}