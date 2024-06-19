import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment, ReactNode } from "react";
import backArrow from "../../../public/images/arrow_circle.svg";
import heart from "../../../public/images/Heart.svg";
import {
  getDataFromLocalStorage,
  setDataFromLocalStorage,
} from "@/hooks/useLocalStorage";

type ModalProps = {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
  title?: string;
  description?: string;
  recipeInfo?: {};
  variant?: string;
};

export default function Modal({
  open,
  children,
  onClose,
  title,
  description,
  recipeInfo,
  variant = "bottom",
}: ModalProps) {
  const handleAddtoWishlist = (data: any) => {
    const { id, title, readyInMinutes, image } = data;

    let array = [];
    const existingFavouritesArray = getDataFromLocalStorage("Favourites") || [];
    console.log("existingFavouritesArray", existingFavouritesArray);
    const foundIndex = existingFavouritesArray?.findIndex(
      (item: any) => item?.id === id
    );
    console.log("filteredArray", foundIndex);
    if (foundIndex !== -1) {
      existingFavouritesArray?.splice(foundIndex, 1);

      setDataFromLocalStorage("Favourites", existingFavouritesArray);
    } else {
      if (id && title && readyInMinutes) {
        array.push({ id, title, readyInMinutes, image });
      }
      setDataFromLocalStorage("Favourites", [
        ...existingFavouritesArray,
        ...array,
      ]);
    }
  };
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center lg:items-center"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-300"
          enterFrom={
            variant === "center"
              ? "translate-y-full"
              : "translate-y-full lg:translate-y-0"
          }
          enterTo="translate-y-0"
          leave="transform transition ease-in-out duration-300"
          leaveFrom="translate-y-0"
          leaveTo={
            variant === "center"
              ? "translate-y-full"
              : "translate-y-full lg:translate-y-0"
          }
        >
          <DialogPanel
            className={`w-full max-w-lg overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-t-2xl ${
              variant === "center" ? "my-auto" : "mt-auto lg:my-auto"
            }`}
          >
            <div className="flex justify-between items-center px-4 py-4">
              <div className="flex gap-x-4 items-center">
                <Image
                  src={backArrow}
                  alt="arrow-back"
                  width={24}
                  height={24}
                  onClick={onClose}
                />
                {title && (
                  <DialogTitle className="text-lg line-clamp-1 font-medium leading-6 text-gray-900">
                    {title}
                  </DialogTitle>
                )}
              </div>
              <Image
                src={heart}
                alt="heart"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={() => handleAddtoWishlist(recipeInfo)}
              />
            </div>

            {description && (
              <p className="mt-2 text-sm text-gray-500">{description}</p>
            )}
            <div className="mt-4">{children}</div>
          </DialogPanel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
