import BlogPostList from "./BlogPostList";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3 p-4">
          <BlogPostList />
        </div>
        <div className="w-full md:w-1/3 p-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
