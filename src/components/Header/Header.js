import styles from "./Header.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <p><Link href="/">MyMovieApp</Link></p>
            </div>
            <div className={styles.navigation}>
                <nav>
                    <ul>
                        <li><Link href="/series">Séries</Link></li>
                        <li><Link href="/movies">Films</Link></li>
                    </ul>
                </nav>
            </div>
            <input type="text" placeholder="Recherche un titre ..." />
            <div>
                <Link href="/profil">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
            </div>
        </header>
    )
}

export default Header
