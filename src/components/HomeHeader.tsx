"use client";
import SearchBarInput from "@/ui/SearchBarInput";
import searchIcon from "../../public/images/search_icon.svg";
import { useRouter } from "next/navigation";
import useWindowSize from "@/hooks/useWindowSize";
import { useState, useEffect } from "react";
import clsx from "clsx";
import useDebounce from "@/hooks/useDebounce";
import crossIcon from "../../public/images/cross.svg";
import SearchCard from "@/ui/SearchCard";
import Modal from "@/ui/modal/Modal";
import Link from "next/link";
import heartGrey from "../../public/images/heart_gray.svg";
import Image from "next/image";

const HomeHeader = () => {
  const router = useRouter();
  const { width } = useWindowSize();

  const [searchInput, setSearchInput] = useState<string | null>("");
  const [searchList, setSearchList] = useState([]);

  const debouncedSearch = useDebounce(searchInput, 300);
  const [isVisible, setIsVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleClick = () => {
    if (width && width >= 1024) {
      setIsVisible(true);
    } else {
      router.push("/search");
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchInputChange = (text: string) => {
    setSearchInput(text);
  };
  const onClearSearch = () => {
    setSearchInput("");
    setSearchList([]);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      if (debouncedSearch) {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${debouncedSearch}&apiKey=badc14f2ee22453b9343c642a4377f3c&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true`
          );
          const data = await response.json();
          setSearchList(data.results);
          console.log("Recipes:", data);
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      }
    };

    fetchRecipes();
  }, [debouncedSearch]);

  return (
    <>
      <div
        className={clsx(
          isSticky && width && width >= 1024 && "sticky-header px-8",
          "transition-all duration-300 "
        )}
      >
        <div className="lg:flex lg:justify-between">
          <div className={`py-6 lg:py-2 ${isSticky ? "header-hidden" : ""}`}>
            <h2 className="text-base pb-2 font-medium text-black">
              👋 Hey Vengal Reddy
            </h2>
            <p className="text-xs font-normal text-secondary-600">
              Discover tasty and healthy recipes
            </p>
          </div>
          {isSticky && (
            <h1 className="font-bold text-[36px] italic py-3">
              Rec<span className="font-normal">ii</span>p
              <span className="font-normal">ii</span>e
            </h1>
          )}
          <div className="block lg:hidden">
            <Link href="/search">
              <SearchBarInput
                className={clsx(
                  "search-input block border-none py-4 w-full rounded-xl  bg-white pl-10 pr-24 text-black text-sm font-medium placeholder-secondary-600 sm:text-sm"
                )}
                type="text"
                name="name"
                placeholder="Search any recipe"
                lefticon={searchIcon}
              />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/favourites">
              <div className="hidden lg:block border-2 bg-white rounded-lg border-secondary-700 px-3 py-2">
                <div className="flex items-center gap-2">
                  <Image src={heartGrey} alt="heart" width={24} height={24} />
                  <p>Favourite</p>
                </div>
              </div>
            </Link>
            <div className="hidden lg:block">
              <SearchBarInput
                className={clsx(
                  "search-input block py-3 w-full rounded-xl border-2 border-secondary-700  bg-white pl-10 pr-24 text-black text-sm font-medium placeholder-secondary-600 sm:text-sm"
                )}
                type="text"
                name="name"
                onClick={handleClick}
                placeholder="Search any recipe"
                lefticon={searchIcon}
                closeIcon={searchInput ? crossIcon : undefined}
                value={searchInput}
                onChange={(e: { target: { value: any } }) =>
                  handleSearchInputChange(e.target.value)
                }
                onClearSearch={onClearSearch}
              />
            </div>
          </div>
        </div>
      </div>
      {searchList?.length > 0 && (
        <div className="fixed inset-0 top-[60px] p-4 bg-black bg-opacity-60 text-white rounded-lg shadow-lg overflow-y-auto z-50">
          <div className="relative flex flex-col items-end">
            {searchList.map((recipe: any) => (
              <div className="w-[400px] " key={recipe.id}>
                <SearchCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HomeHeader;
