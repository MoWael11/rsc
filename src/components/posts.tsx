import posts from "@/config/posts";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Posts = async () => {
  await sleep(4000);

  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col">
          <h2>{post.title}</h2>
          <p className="text-gray-500">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
