export const Button = ({ children, onClick, type = "button", className = "", ...props }) => (
  <button
    type={type}
    onClick={onClick}
    className={className}
    {...props}
  >
    {children}
  </button>
);