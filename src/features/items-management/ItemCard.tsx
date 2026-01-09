import React from 'react';
import { Trash2 } from 'lucide-react';
import type { Item, Person } from '../scan-bill/types';

interface ItemCardProps {
  item: Item;
  people: Person[];
  onUpdateItem: (id: number, field: keyof Item, value: string | number[]) => void;
  onRemoveItem: (id: number) => void;
  onTogglePersonForItem: (itemId: number, personId: number) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  people,
  onUpdateItem,
  onRemoveItem,
  onTogglePersonForItem,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
      <div className="flex gap-2 sm:gap-3 mb-3 flex-col sm:flex-row">
        <input
          type="text"
          placeholder="Item name"
          value={item.name}
          onChange={(e) => onUpdateItem(item.id, 'name', e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm sm:text-base"
        />
        <div className="flex gap-2">
          <div className="relative flex-1 sm:flex-initial">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm sm:text-base text-gray-400">
              R
            </span>
            <input
              type="number"
              placeholder="0.00"
              value={item.price}
              onChange={(e) => onUpdateItem(item.id, 'price', e.target.value)}
              className="w-full sm:w-28 pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm sm:text-base"
              step="0.01"
            />
          </div>
          <button
            onClick={() => onRemoveItem(item.id)}
            className="text-gray-400 hover:text-red-500 px-2"
          >
            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {people.map(person => (
          <button
            key={person.id}
            onClick={() => onTogglePersonForItem(item.id, person.id)}
            className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition"
            style={{
              backgroundColor: item.sharedBy.includes(person.id)
                ? person.color
                : 'transparent',
              color: item.sharedBy.includes(person.id) ? 'white' : person.color,
              border: `2px solid ${person.color}`,
            }}
          >
            {person.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;