import clsx from "clsx";
import React from "react";

interface containerProps {
  className?: string;
  stylebg?: string;
  children: React.ReactNode;
}

const Container = ({ children, className, stylebg }: containerProps) => {
  const stylesCombined = clsx(className, "px-4 container mx-auto");

  return (
    <section className={stylebg}>
      <div className={stylesCombined}>{children}</div>
    </section>
  );
};

export default Container;
