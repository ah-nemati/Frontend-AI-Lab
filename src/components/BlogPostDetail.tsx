import React from "react";

// تعریف اینترفیس برای پراپ post
interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
}

// مشخص کردن نوع پراپ‌ها با استفاده از اینترفیس
const BlogPostDetail: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostDetail;
