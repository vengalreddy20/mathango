import { Item } from "./FavouritesReducer";

export function addItem(items: Item[], item: Item) {
  return [...items, item];
}

export function getItem(items: Item[], id: Item["id"]) {
  return items.find((item) => item.id === id);
}

export function removeItem(items: Item[], id: Item["id"]) {
  return items.filter((existingItem) => existingItem.id !== id);
}
