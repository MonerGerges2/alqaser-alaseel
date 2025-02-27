const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-10 text-center border border-white/20">
        <h1 className="text-7xl font-extrabold text-red-500 animate-bounce">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-300 mt-2 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg text-white text-lg shadow-md hover:shadow-lg"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
