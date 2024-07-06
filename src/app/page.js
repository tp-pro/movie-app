import MediaCard from "@/components/MediaCard/MediaCard";
import PostList from "@/components/PostList";
import styles from "./page.module.css";

export default function Home() {
    // throw new Error("error")
    return (
        <div className={styles.main}>
            <MediaCard mediaId={10} />
            <p>composants serveurs / clients</p>
            <PostList />
        </div>
    );
}
