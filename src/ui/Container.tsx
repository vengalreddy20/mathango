/* eslint-disable react/display-name */
import clsx from "clsx";
import { ElementType, memo, ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
  el?: ElementType;
  clean?: boolean;
}

const Container: React.FC<Props> = memo(
  ({ children, className, el: Component = "div", clean }) => {
    const rootClassName = clsx(className, {
      "mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10": !clean,
    });

    return <Component className={rootClassName}>{children}</Component>;
  }
);

export default Container;
