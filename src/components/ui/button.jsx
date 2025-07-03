export const Button = ({ children, className, onClick }) => {
  return (
    <button 
      className={`px-4 py-2 rounded-md font-medium transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
