const getPaddingClass = (prefix, value, defaultValue) => {
  const val = value || defaultValue;
  return `${prefix}-${val}`;
};

export const Row = ({
  children,
  top,      // Exemplo: 4, 8, 12
  bottom,   // Exemplo: 4, 8, 12
  className = "",
  ...props
}) => {
  // Espaçamentos padrão: top=4, bottom=4
  const ptClass = getPaddingClass("pt", top, 4);
  const pbClass = getPaddingClass("pb", bottom, 4);

  return (
    <div className={`${ptClass} ${pbClass} ${className}`} {...props}>
      {children}
    </div>
  );
};