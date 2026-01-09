import React, { useState } from "react";
import { Camera } from "lucide-react";
import type { Item, Person } from "./features/scan-bill/types";
import ScanReceipt from "./features/scan-bill/ScanReceipt";
import PeopleList from "./features/people-management/PeopleList";
import { PERSON_COLORS } from "./features/people-management/constants";
import ItemsList from "./features/items-management/ItemsList";
import TaxTipInputs from "./features/tax-tip/TaxTipInputs";
import TotalSummary from "./features/split-summary/TotalSummary";
import SplitDetails from "./features/split-summary/SplitDetails";
import { useBillCalculations } from "./hooks/useBillCalculations";

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [people, setPeople] = useState<Person[]>([
    { id: 1, name: "Person 1", color: PERSON_COLORS[0] },
  ]);
  const [taxRate, setTaxRate] = useState<number>(15);
  const [tipRate, setTipRate] = useState<number>(15);
  const [showScanner, setShowScanner] = useState<boolean>(false);

  const addPerson = (): void => {
    const newId = Math.max(...people.map((p) => p.id), 0) + 1;
    setPeople([
      ...people,
      {
        id: newId,
        name: `Person ${newId}`,
        color: PERSON_COLORS[people.length % PERSON_COLORS.length],
      },
    ]);
  };

  const removePerson = (id: number): void => {
    if (people.length > 1) {
      setPeople(people.filter((p) => p.id !== id));
      setItems(
        items.map((item) => ({
          ...item,
          sharedBy: item.sharedBy.filter((pid) => pid !== id),
        }))
      );
    }
  };

  const updatePersonName = (id: number, name: string): void => {
    setPeople(people.map((p) => (p.id === id ? { ...p, name } : p)));
  };

  const addItem = (): void => {
    setItems([
      ...items,
      {
        id: Date.now(),
        name: "",
        price: "",
        sharedBy: [],
      },
    ]);
  };

  const updateItem = (
    id: number,
    field: keyof Item,
    value: string | number[]
  ): void => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const togglePersonForItem = (itemId: number, personId: number): void => {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          const sharedBy = item.sharedBy.includes(personId)
            ? item.sharedBy.filter((id) => id !== personId)
            : [...item.sharedBy, personId];
          return { ...item, sharedBy };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number): void => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleScanComplete = (scannedItems: Item[]): void => {
    setItems(scannedItems);
  };

  const { subtotal, tax, tip, total, personTotals } = useBillCalculations(
    items,
    people,
    taxRate,
    tipRate
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-indigo-50 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                EasySplit Bill
              </h1>
            </div>
            <button
              onClick={() => setShowScanner(true)}
              className="flex items-center gap-2 bg-[#0078FF] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#0066DD] transition text-sm sm:text-base"
            >
              <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
              Scan Receipt
            </button>
          </div>

          <ScanReceipt
            showScanner={showScanner}
            onClose={() => setShowScanner(false)}
            onScanComplete={handleScanComplete}
          />

          <PeopleList
            people={people}
            onAddPerson={addPerson}
            onRemovePerson={removePerson}
            onUpdatePersonName={updatePersonName}
          />

          <ItemsList
            items={items}
            people={people}
            onAddItem={addItem}
            onUpdateItem={updateItem}
            onRemoveItem={removeItem}
            onTogglePersonForItem={togglePersonForItem}
          />

          <TaxTipInputs
            taxRate={taxRate}
            tipRate={tipRate}
            onTaxRateChange={setTaxRate}
            onTipRateChange={setTipRate}
          />

          <TotalSummary
            subtotal={subtotal}
            tax={tax}
            taxRate={taxRate}
            tip={tip}
            tipRate={tipRate}
            total={total}
          />

          <SplitDetails personTotals={personTotals} />
        </div>
      </div>
    </div>
  );
};

export default App;
