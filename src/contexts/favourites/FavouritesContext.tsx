"use client";

import React, { useCallback } from "react";
import {
  State,
  initialState,
  favouritesReducer,
  Item,
} from "./FavouritesReducer";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getItem } from "./FavouritesUtils";

interface FavouritesProviderState extends State {
  addItemToFavourites: (item: Item) => void;
  removeItemFromFavourites: (id: Item["id"]) => void;
  isInFavourites: (id: Item["id"]) => boolean;
}
export const FavouritesContext = React.createContext<
  FavouritesProviderState | undefined
>(undefined);

FavouritesContext.displayName = "FavouritesContext";

export const useFavourites = () => {
  const context = React.useContext(FavouritesContext);
  if (context === undefined) {
    throw new Error(`useFavourites must be used within a FavouritesProvider`);
  }
  return context;
};

export function FavouritesProvider(props: React.PropsWithChildren<any>) {
  const [savedFavourites, saveFavourites] = useLocalStorage(
    `mathongo-favourites`,
    JSON.stringify(initialState)
  );
  const [state, dispatch] = React.useReducer(
    favouritesReducer,
    JSON.parse(savedFavourites!)
  );

  React.useEffect(() => {
    saveFavourites(JSON.stringify(state));
  }, [state, saveFavourites]);

  const addItemToFavourites = (item: Item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const removeItemFromFavourites = (id: Item["id"]) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const isInFavourites = useCallback(
    (id: Item["id"]) => !!getItem(state.items, id),
    [state.items]
  );

  const value = React.useMemo(
    () => ({
      ...state,
      addItemToFavourites,
      removeItemFromFavourites,
      isInFavourites,
    }),
    [isInFavourites, state]
  );
  return <FavouritesContext.Provider value={value} {...props} />;
}
