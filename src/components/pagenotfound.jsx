import unplugged from "../assets/icons/unplugged.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>
        <img src={unplugged} alt="unplugged wires" />
        <h1 className="leading text-orange-500 text-lg md:text-4xl mt-3 mb-10">
          Page Not Found
        </h1>
        <p className="text-xs md:text-2xl">
          It seems like you entered a wrong url. <br /> Don&nbsp;t worry,{" "}
          <Link to="../" className="text-orange-500 hover:underline transition-all">
            click here
          </Link>{" "}
          to go home.
        </p>
      </div>
    </>
  );
};

export default NotFound;
