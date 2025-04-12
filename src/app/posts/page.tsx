import posts from "@/config/posts";

const PostsPage = () => {
  return (
    <main>
      <h1 className="mb-4">Posts Page</h1>
      <div className="flex flex-col gap-2">
        {posts.map((post) => (
          // generate a table with tw style using table tag
          <div key={post.id} className="flex flex-col">
            <h2>{post.title}</h2>
            <p className="text-gray-500">{post.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PostsPage;
