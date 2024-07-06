import MediaCard from "@/components/MediaCard/MediaCard";
import styles from "./page.module.css";

export default function Home() {
    // throw new Error("error")
    return (
        <div className={styles.main}>
            <MediaCard mediaId={10} />
        </div>
    );
}
