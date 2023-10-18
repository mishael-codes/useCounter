const Error = ({ error }) => {
  return (
    <div role="alert" className="error-container">
      <h2 className="text-2xl md:text-4xl font-semibold mb-6 mt-20">
        Oh no!
        <br /> Something went wrong...
      </h2>
      <p className="text-red-600 text-sm md:text-lg font-bold">
        {error.message}
      </p>
      <p className="text-xs md:text-lg mb-10">
        Well, that wasn't supposed to happen🤔, but don&nbsp;t worry about it
        and leave this mess for the developers.😁
      </p>
      <a href="/">
        <button className="scale-[1.25] transform active:scale-1 transition-transform">
          Click Me
        </button>
      </a>
    </div>
  );
};

export default Error;
