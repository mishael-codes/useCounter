const Error = ({ error }) => {
  return (
    <div role="alert" className="error-container">
      <h2 className="text-4xl font-semibold mb-6">Something went wrong:</h2>
      <p className="text-red-600 text-2xl">{error.message}</p>
      <a href="/">
        <button>Refresh</button>
      </a>
    </div>
  );
};

export default Error;
