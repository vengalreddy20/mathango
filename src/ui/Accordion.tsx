/* eslint-disable react/display-name */
"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import React, { memo } from "react";
import clsx from "clsx";

import nextArrow from "../../public/images/next-arrow.svg";
import Image from "next/image";

type CollapseProps = {
  item: any;
  variant?: "gray" | "transparent";
};

export const Accordion: React.FC<CollapseProps> = memo(
  ({ item, variant = "gray" }) => {
    const { title, content } = item;
    return (
      <div className="w-full">
        <div className="w-full mx-auto rounded shadow-category text-brand-light group">
          <Disclosure>
            {({ open }) => (
              <div>
                <DisclosureButton className="flex justify-between items-center w-full px-0 py-4 text-base font-medium 2xl:px-6 2xl:py-6 ltr:text-left rtl:text-right text-black focus:outline-none border-b border-secondary-700">
                  <span
                    className={clsx(
                      "text-lg font-medium leading-relaxed text-heading ltr:pr-2 rtl:pl-2"
                    )}
                  >
                    {title}
                  </span>
                  <div className="px-3">
                    <Image
                      src={nextArrow}
                      alt="next-arrow"
                      width={24}
                      height={24}
                      className={` transform transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </DisclosureButton>

                <Transition
                  as="div"
                  show={open}
                  enter="transition duration-500 ease-out"
                  enterFrom="transform scale-5 opacity-0"
                  enterTo="transform scale-10 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-5 opacity-0"
                >
                  {open && (
                    <DisclosurePanel as="div" static>
                      <div className="px-0 pb-4 mt-4 text-sm leading-7 2xl:pb-7 2xl:px-6 2xl:mt-0 2xl:text-15px text-brand-dark opacity-100">
                        {content}
                      </div>
                    </DisclosurePanel>
                  )}
                </Transition>
              </div>
            )}
          </Disclosure>
        </div>
      </div>
    );
  }
);

export default Accordion;
