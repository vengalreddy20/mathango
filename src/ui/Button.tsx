import clsx from "clsx";
import { forwardRef, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary";
  active?: boolean;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = "primary",
    children,
    active,
    loading = false,
    disabled = false,
    ...rest
  } = props;

  const rootClassName = clsx(
    {
      "bg-primary-900 w-full text-white py-3 px-10 rounded-xl text-base font-semibold lg:rounded-lg ":
        variant === "primary",
    },
    className
  );

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      ref={ref}
      className={rootClassName}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
