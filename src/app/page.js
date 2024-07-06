import MediaCard from "@/components/MediaCard/MediaCard";
import PostList from "@/components/PostList";
import styles from "./page.module.css";
import ClientComponent from "./ClientComponent";

export default function Home() {
    // throw new Error("error")
    return (
        <div className={styles.main}>
            <p>{process.env.NEXT_PUBLIC_APPLICATION_HOST}</p>
            <MediaCard mediaId={10} />
            <p>composants serveurs / clients</p>
            <ClientComponent />
            <PostList />
        </div>
    );
}
