// import necessary modules and packages
import useCounter from "../hooks/useCounter";
import * as Icon from "react-feather";

const ErrorPage = () => {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <>
      <h1 className="text-center mb-10 font-bold text-3xl md:text-5xl h1">
        Counter App
      </h1>
      <div className="flex items-center justify-center flex-col bg-orange-500 p-10 md:p-20 rounded-lg shadow-container w-screen counter-container">
        <h2 className="font-semibold text-center text-black text-[30px]">
          Count <br />
          <span className="font-bold">{count}</span>
        </h2>
        <div className="mt-20 flex items-start">
          <input
            type="number"
            value={count}
            onChange={(e) => setValue(parseInt(e.target.value, 10))}
            className="bg-red-500 flex items-center justify-center w-14 md:w-16 h-11 rounded-lg ps-3 mx-1 mb-2 text-orange-500 focus:outline-none transform active:scale-75 transition-transform"
          />
          <button
            className="flex items-center justify-center w-14 md:w-16 h-11 mx-1 text-orange-500 hover:shadow-button hover:border-none border-none focus:outline-none transform active:scale-75 transition-transform"
            onClick={increment}
          >
            <Icon.ChevronUp />
            <sub className="absolute bottom-[-15px] left-1 text-black">
              Increment
            </sub>
          </button>
          <button
            className="flex items-center justify-center w-14 md:w-16 h-11 mx-1 text-orange-500 hover:shadow-button hover:border-none border-none focus:outline-none transform active:scale-75 transition-transform"
            onClick={derement}
          >
            <Icon.ChevronDown />
            <sub className="absolute bottom-[-15px] left-1 text-black">
              Decrement
            </sub>
          </button>
          <button
            className="flex items-center justify-center w-14 md:w-16 h-11 mx-1 text-orange-500 hover:shadow-button hover:border-none border-none focus:outline-none transform active:scale-75 transition-transform"
            onClick={reset}
          >
            <Icon.RotateCcw />
            <sub className="absolute bottom-[-15px] left-4 text-black">
              Reset
            </sub>
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
