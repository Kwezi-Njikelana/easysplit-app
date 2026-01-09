import React from "react";
import type { Item, Person } from '../scan-bill/types';
import { Plus } from "lucide-react";
import ItemCard from "./ItemCard";

interface ItemsListProps {
  items: Item[];
  people: Person[];
  onAddItem: () => void;
  onUpdateItem: (
    id: number,
    field: keyof Item,
    value: string | number[]
  ) => void;
  onRemoveItem: (id: number) => void;
  onTogglePersonForItem: (itemId: number, personId: number) => void;
}

const ItemsList: React.FC<ItemsListProps> = ({
  items,
  people,
  onAddItem,
  onUpdateItem,
  onRemoveItem,
  onTogglePersonForItem,
}) => {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 flex items-center gap-2">
          Items
        </h2>
        <button
          onClick={onAddItem}
          className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-sm sm:text-base"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            people={people}
            onUpdateItem={onUpdateItem}
            onRemoveItem={onRemoveItem}
            onTogglePersonForItem={onTogglePersonForItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
