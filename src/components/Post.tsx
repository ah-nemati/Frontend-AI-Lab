import { useParams } from "react-router-dom";
import BlogPostDetail from "./BlogPostDetail";

const Post = () => {
  const { id } = useParams<{ id: string }>(); // تایپ id رو به صراحت مشخص می‌کنیم
  const posts = [
    {
      id: 1,
      title: "پست اول",
      content: "محتوای پست اول...",
      date: "2025-08-08",
    },
    {
      id: 2,
      title: "پست دوم",
      content: "محتوای پست دوم...",
      date: "2025-08-09",
    },
  ];

  // تبدیل id به عدد و پیدا کردن پست
  const postId = id ? parseInt(id, 10) : undefined;
  const post =
    postId !== undefined ? posts.find((p) => p.id === postId) : undefined;

  return (
    <div className="container mx-auto p-4">
      {post ? <BlogPostDetail post={post} /> : <p>پست یافت نشد</p>}
    </div>
  );
};

export default Post;
