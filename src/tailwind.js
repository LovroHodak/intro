import React, { forwardRef } from "react";

// settings for being able to use refrences and classes on tailwind components
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


// this corresponds to .vscode - settings.json