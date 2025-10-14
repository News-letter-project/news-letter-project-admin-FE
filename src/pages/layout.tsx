import { Outlet } from "react-router";

const layout = () => {
  return (
    <div className="page">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default layout;
