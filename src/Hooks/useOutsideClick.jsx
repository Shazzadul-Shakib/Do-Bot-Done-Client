import { useEffect, useRef, useState } from "react";

const useOutsideClick = (value) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(value);

  useEffect(() => {
    const handler = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("clicK", handler);
    };
  }, [isOpen]);

  return [isOpen, setIsOpen, ref];
};

export default useOutsideClick;
