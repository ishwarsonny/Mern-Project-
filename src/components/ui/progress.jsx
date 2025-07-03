export const Progress = ({ value, className }) => {
  return (
    <div className={`h-2 bg-gray-200 rounded-full ${className}`}>
      <div 
        className="h-full bg-pink-500 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
