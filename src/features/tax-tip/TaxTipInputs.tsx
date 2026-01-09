import React from 'react';

interface TaxTipInputsProps {
  taxRate: number;
  tipRate: number;
  onTaxRateChange: (rate: number) => void;
  onTipRateChange: (rate: number) => void;
}

const TaxTipInputs: React.FC<TaxTipInputsProps> = ({
  taxRate,
  tipRate,
  onTaxRateChange,
  onTipRateChange,
}) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
          VAT Rate (%)
        </label>
        <input
          type="number"
          value={taxRate}
          onChange={(e) => onTaxRateChange(parseFloat(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm sm:text-base"
          step="0.1"
        />
      </div>
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
          Tip (%)
        </label>
        <input
          type="number"
          value={tipRate}
          onChange={(e) => onTipRateChange(parseFloat(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm sm:text-base"
          step="0.1"
        />
      </div>
    </div>
  );
};

export default TaxTipInputs;