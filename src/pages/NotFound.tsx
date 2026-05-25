import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-midnight text-sandstone">
      <div className="text-center space-y-5 px-6">
        <div className="ex-no">EX / 404</div>
        <h1 className="display-md">صفحة غير موجودة / Not found</h1>
        <a href="/" className="btn-brutal mt-4 inline-flex">Return to home</a>
      </div>
    </div>
  );
};

export default NotFound;
