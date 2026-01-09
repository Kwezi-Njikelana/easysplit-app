import React from 'react';
import type { PersonTotal } from '../scan-bill/types';

interface SplitDetailsProps {
  personTotals: PersonTotal[];
}

const SplitDetails: React.FC<SplitDetailsProps> = ({ personTotals }) => {
  return (
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
        Split Details
      </h2>
      <div className="space-y-3">
        {personTotals.map(person => (
          <div
            key={person.id}
            className="rounded-lg p-3 sm:p-4 border-l-4"
            style={{
              borderColor: person.color,
              backgroundColor: `${person.color}08`,
            }}
          >
            <div className="flex justify-between items-center mb-2 gap-2">
              <span
                className="font-semibold text-base sm:text-lg truncate"
                style={{ color: person.color }}
              >
                {person.name}
              </span>
              <span
                className="text-xl sm:text-2xl font-bold"
                style={{ color: person.color }}
              >
                R{person.total.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 gap-2">
              <span>Items: R{person.subtotal.toFixed(2)}</span>
              <span>Tax: R{person.tax.toFixed(2)}</span>
              <span>Tip: R{person.tip.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitDetails;