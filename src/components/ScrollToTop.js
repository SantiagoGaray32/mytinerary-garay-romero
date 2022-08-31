import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
<<<<<<< HEAD
}
=======
}
>>>>>>> a765893614bc6627b5ebec980ab76390459b899e
