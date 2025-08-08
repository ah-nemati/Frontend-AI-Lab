const Sidebar = () => {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h3 className="text-lg font-bold mb-2">پست‌های اخیر</h3>
      <ul>
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            پست اول
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            پست دوم
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
