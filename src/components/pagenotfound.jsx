import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>
        <h1 className="leading text-orange-500 text-4xl">Page Not Found</h1>
        <p className="text-2xl">
          It seems like you entered a wrong url. <br /> Don&nbsp;t worry,{" "}
          <Link to="../" className="hover:text-orange-500 transition-colors">
            click here
          </Link>{" "}
          to go home.
        </p>
      </div>
    </>
  );
};

export default NotFound;
