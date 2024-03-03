import { MutableRefObject, useEffect, useRef } from "react";

export const useOutsideClick = (handler : () => void, listenCapturing: boolean = true) => {

  const ref: MutableRefObject<HTMLDivElement | undefined> = useRef();
  
    useEffect(() => {
      const handleClick = (e) => {
        if(ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
  
      document.addEventListener('click', handleClick, listenCapturing);
      return () => document.removeEventListener('click', handleClick, listenCapturing);
    }, [handler, listenCapturing]);

  return ref;
};
