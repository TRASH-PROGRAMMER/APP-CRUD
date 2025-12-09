import { Component, Show } from "solid-js";
import { For } from "solid-js";
import ListItem from "../molecules/ListItem";

interface Item {
  _id?: string;
  text: string;
}

interface ItemListProps {
  items: Item[];
  onDelete: (id: string) => void;
  emptyMessage: string;
}

const ItemList: Component<ItemListProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        gap: "10px",
      }}
    >
      <For each={props.items}>
        {(item) => (
          <ListItem
            text={item.text}
            onDelete={() => item._id && props.onDelete(item._id)}
          />
        )}
      </For>
      <Show when={props.items.length === 0}>
        <p
          style={{
            "text-align": "center",
            color: "#999",
            padding: "40px",
            "font-size": "1.1rem",
          }}
        >
          {props.emptyMessage}
        </p>
      </Show>
    </div>
  );
};

export default ItemList;
