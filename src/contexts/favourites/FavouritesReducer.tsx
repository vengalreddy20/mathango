import { addItem, removeItem } from "./FavouritesUtils";

export type Item = {
  image: string;
  title: string;
  id: number;
};
type Action =
  | { type: "ADD_ITEM"; item: Item }
  | { type: "REMOVE_ITEM"; id: Item["id"] };

export interface State {
  items: Item[];
}
export const initialState: State = {
  items: [],
};
export function favouritesReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_ITEM": {
      const items = addItem(state.items, action.item);
      return generateFinalState(state, items);
    }
    case "REMOVE_ITEM": {
      const items = removeItem(state.items, action.id);
      return generateFinalState(state, items);
    }

    default:
      return state;
  }
}

const generateFinalState = (state: State, items: Item[]) => {
  return {
    ...state,
    items: items,
  };
};
