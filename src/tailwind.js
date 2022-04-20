import React, { useRef, forwardRef } from "react";

export const tw = new Proxy(
  {},
  {
    get(_, el) {
      const El = el;
      return ([classString]) =>
        forwardRef(({ children, className, ...props }, ref) =>
          (
            <El ref={ref} {...props} className={`${classString} ${className}`}>
              {children}
            </El>
          ));
    },
  }
);
