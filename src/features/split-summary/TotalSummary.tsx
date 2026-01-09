import React from 'react';

interface TotalSummaryProps {
  subtotal: number;
  tax: number;
  taxRate: number;
  tip: number;
  tipRate: number;
  total: number;
}

const TotalSummary: React.FC<TotalSummaryProps> = ({
  subtotal,
  tax,
  taxRate,
  tip,
  tipRate,
  total,
}) => {
  const billTotal = subtotal + tax; // Total before tip

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
      <div className="flex justify-between items-center text-gray-600 mb-2 text-sm sm:text-base">
        <span>Subtotal (excl. VAT):</span>
        <span className="font-semibold">R{subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center text-gray-600 mb-2 text-sm sm:text-base">
        <span>VAT ({taxRate}%):</span>
        <span className="font-semibold">R{tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center text-gray-700 mb-3 text-sm sm:text-base font-medium pt-2 border-t border-gray-200">
        <span>Bill Total:</span>
        <span>R{billTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center text-gray-600 mb-3 text-sm sm:text-base">
        <span>Tip ({tipRate}%):</span>
        <span className="font-semibold">R{tip.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center text-xl sm:text-2xl font-bold text-indigo-600 pt-3 border-t-2 border-indigo-200">
        <span>Total to Pay:</span>
        <span>R{total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default TotalSummary;