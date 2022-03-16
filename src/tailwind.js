export const tw = new Proxy(
  {},
  {
    get(_, el) {
      const El = el;
      return ([classString]) =>
        ({ children, className, ...props }) =>
          (
            <El {...props} className={`${classString} ${className}`}>
              {children}
            </El>
          );
    },
  }
);
