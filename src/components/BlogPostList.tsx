import { Link } from "react-router-dom";

const BlogPostList = () => {
  const posts = [
    {
      id: 1,
      title: "پست اول",
      summary: "خلاصه پست اول...",
      date: "2025-08-08",
    },
    {
      id: 2,
      title: "پست دوم",
      summary: "خلاصه پست دوم...",
      date: "2025-08-09",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="mb-4 p-4 border rounded">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-600">{post.date}</p>
          <p>{post.summary}</p>
          <Link
            to={`/post/${post.id}`}
            className="text-blue-500 hover:underline">
            بیشتر بخوانید
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
