"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";

type IProps = {
  placeholder: string | any;
  type: string;
  name: string;
  lefticon?: any;
  closeIcon?: any;
  className: string;
  onChange?: any;
  onKeyDown?: any;
  onClearSearch?: any;
  value?: string | undefined | null;
  autoFocus?: boolean;
  onFocus?: () => void;
  onClick?: any;
};

function SearchBarInput({
  placeholder,
  type,
  name,
  lefticon = false,
  closeIcon = false,
  className,

  onChange,
  onKeyDown,
  onClearSearch,
  value,
  onFocus,
  onClick,
}: IProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="py-2 ">
      <div className="relative rounded-xl">
        {lefticon ? (
          <div className="z-10 absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 cursor-pointer sm:text-sm">
              <Image
                src={lefticon}
                width={20}
                height={20}
                alt={lefticon}
                quality={100}
                priority
                onClick={handleBack}
                className={clsx("h-[20px] w-[20px]")}
              />
            </span>
          </div>
        ) : null}
        <div className="">
          <input
            type={type}
            name={name}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value!}
            onClick={onClick}
            autoComplete="off"
            onFocus={onFocus}
            ref={searchRef}
          />
        </div>

        {closeIcon ? (
          <div className="absolute inset-y-2 right-0 flex items-center  pr-3">
            <span
              aria-hidden
              className="text-gray-500 sm:text-sm cursor-pointer"
            >
              <Image
                src={closeIcon}
                onClick={onClearSearch}
                width={20}
                height={20}
                alt="close-icon"
                quality={100}
                priority
                className={clsx("h-[20px] w-[20px]")}
              />
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SearchBarInput;
