import React from "react";
import { Plus, Minus, Users } from "lucide-react";
import type { Person } from "../scan-bill/types";
// import { PERSON_COLORS } from "./constants";

interface PeopleListProps {
  people: Person[];
  onAddPerson: () => void;
  onRemovePerson: (id: number) => void;
  onUpdatePersonName: (id: number, name: string) => void;
}
const PeopleList: React.FC<PeopleListProps> = ({
  people,
  onAddPerson,
  onRemovePerson,
  onUpdatePersonName,
}) => {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 flex items-center gap-2">
          <Users className="w-4 h-4 sm:w-5 sm:h-5" />
          People
        </h2>
        <button
          onClick={onAddPerson}
          className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-sm sm:text-base"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {people.map((person) => (
          <div
            key={person.id}
            className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border-2"
            style={{
              borderColor: person.color,
              backgroundColor: `${person.color}10`,
            }}
          >
            <input
              type="text"
              value={person.name}
              onChange={(e) => onUpdatePersonName(person.id, e.target.value)}
              className="bg-transparent border-none outline-none w-20 sm:w-24 font-medium text-sm sm:text-base"
              style={{ color: person.color }}
            />
            {people.length > 1 && (
              <button
                onClick={() => onRemovePerson(person.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
