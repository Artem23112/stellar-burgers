import { useEffect, useRef, useState } from "react";
import s from "./custom-scroll.module.css";

type PropsT = { children: React.ReactNode };

export const CustomScroll: React.FC<PropsT> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [scrollInnerHeight, setScrollInnerHeight] = useState(0);

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    if (!wrapperEl) return;

    const newHeight =
      Math.floor(wrapperEl.clientHeight / wrapperEl.scrollHeight) * 100;

    setScrollInnerHeight(newHeight);
  }, []);

  return (
    <div className={s.wrapper} ref={wrapperRef}>
      <div>{children}</div>

      {scrollInnerHeight !== 100 && (
        <div className={s.scrollWrapper}>
          <div
            className={s.scrollInner}
            style={{ height: scrollInnerHeight + "%" }}
          />
        </div>
      )}
    </div>
  );
};
