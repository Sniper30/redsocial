'use client'
import { useEffect, useState } from "react";

export default function useToogle(init: boolean) {
  const [toogle, setToogle] = useState<boolean>(init);
  const [check, setCheck] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      resize();
      window.removeEventListener("resize", resize);
    };
  },[]);

  function resize() {
    if (window.innerWidth > 1085) {
      setToogle(()=> false);
      setCheck(false);
    } else {
      setToogle(()=>true);
      setCheck(false);
    }
  }

  return {toogle,setToogle,check,setCheck};
}
