// import necessary modules and packages
import useCounter from "../hooks/useCounter";
import * as Icon from "react-feather";

const Counter = () => {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <div className="bg-orange-500 p-20 rounded-lg shadow-custom">
      <h2 className="font-semibold text-center text-black text-[30px]">
        Count <br />
        <span className="font-bold">{count}</span>
      </h2>
      <div className="mt-20 flex items-start">
        <input
          type="number"
          value={count}
          onChange={(e) => setValue(parseInt(e.target.value, 10))}
          className="w-16 h-11 rounded-lg ps-7 mx-1 mb-2 text-orange-500"
        />
        <button className="w-16 h-11 mx-1 text-orange-500" onClick={increment}>
          <Icon.ChevronUp />
        </button>
        <button className="w-16 mx-1 text-orange-500" onClick={decrement}>
          <Icon.ChevronDown />
        </button>
        <button className="w-16 mx-1 text-orange-500" onClick={reset}>
          <Icon.RotateCcw />
        </button>
      </div>
    </div>
  );
};

export default Counter;
