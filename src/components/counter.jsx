// import necessary modules and packages
import NavBar from "./nav";
import useCounter from "../hooks/useCounter";
import * as Icon from "react-feather";

const Counter = () => {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <>
    <NavBar />
      <h1 className="text-center mb-6 font-bold text-xl md:text-3xl h1 mt-10">
        Counter App
      </h1>
      <div className="flex items-center justify-center flex-col bg-orange-500 py-20 rounded-lg shadow-container w-screen counter-container">
        <h2 className="font-semibold text-center text-black text-sm md:text-xl">
          Count <br />
          <span className="font-bold">{count}</span>
        </h2>
        <div className="mt-10 flex items-start">
          <input
            type="number"
            value={count}
            onChange={(e) => setValue(parseInt(e.target.value, 10))}
            className="bg-almostBlack flex items-center justify-center w-14 md:w-16 h-11 rounded-lg ps-3 mx-1 mb-2 text-orange-500 focus:outline-none transform active:scale-75 transition-transform"
          />
          <button
            className="flex items-center justify-center w-14 md:w-16 h-11 mx-1 text-orange-500 hover:shadow-button transform active:scale-75 transition-transform"
            onClick={increment}
          >
            <Icon.ChevronUp />
            <sub className="absolute bottom-[-15px] left-1 text-black">
              Increment
            </sub>
          </button>
          <button
            className="flex items-center justify-center w-14 md:w-16 h-11 mx-1 text-orange-500 hover:shadow-button transform active:scale-75 transition-transform"
            onClick={decrement}
          >
            <Icon.ChevronDown />
            <sub className="absolute bottom-[-15px] left-1 text-black">
              Decrement
            </sub>
          </button>
          <button
            className="flex items-center justify-center w-14 md:w-16 h-11 mx-1 text-orange-500 hover:shadow-button transform active:scale-75 transition-transform"
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

export default Counter;
