import Posts from "@/components/posts";
import { Suspense } from "react";

export const experimental_ppr = true;

const PostsPage = () => {
  return (
    <main>
      <h1 className="mb-4">Posts Page</h1>
      <p className="mb-4">This is posts page</p>
      <Suspense fallback={"loading..."}>
        <Posts />
      </Suspense>
    </main>
  );
};

export default PostsPage;
