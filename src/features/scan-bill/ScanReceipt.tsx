import React from "react";
import { Camera } from "lucide-react";
import type { Item } from "./types";
import { MOCK_RECEIPT_ITEMS } from "./constants";

interface ScanReceiptProps {
  showScanner: boolean;
  onClose: () => void;
  onScanComplete: (items: Item[]) => void;
}

const ScanReceipt: React.FC<ScanReceiptProps> = ({
  showScanner,
  onClose,
  onScanComplete,
}) => {
  const simulateReceiptScan = (): void => {
    onScanComplete(MOCK_RECEIPT_ITEMS);
    onClose();
  };

  if (!showScanner) return null;

  return (
    <div className="mb-4 sm:mb-6 p-4 sm:p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 text-center">
      <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3" />
      <p className="text-gray-600 mb-4 text-sm sm:text-base">
        Receipt scanning feature
      </p>
      <button
        onClick={simulateReceiptScan}
        className="bg-[#0078FF] text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-[#0066DD] transition text-sm sm:text-base"
      >
        Simulate Scan (Demo)
      </button>
    </div>
  );
};
export default ScanReceipt;
