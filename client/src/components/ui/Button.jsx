export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 ${className}`}
    >
      {children}
    </button>
  );
};
