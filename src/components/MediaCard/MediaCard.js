import Image from "next/image"
import styles from "./MediaCard.module.scss"
import Link from "next/link"

const MediaCard = ({ media }) => {
    return (
        <div className={styles.card}>
            <Link href={`/movies/${media.id}`}>
                <div className={styles.image}>
                    <Image 
                        src="https://placehold.co/600x400.png"
                        alt={media.title}
                        fill
                    />
                </div>
                <div className={styles.content}>
                    <p className={styles.vote}>{media.vote_average}</p>
                    <h2>{media.title}</h2>
                    <p>Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
                </div>
            </Link>
        </div>
    )
}

export default MediaCard
