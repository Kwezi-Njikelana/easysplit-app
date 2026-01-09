import type { Calculation, Item, Person, PersonTotal } from '../features/scan-bill/types';

export const useBillCalculations = (
  items: Item[],
  people: Person[],
  taxRate: number,
  tipRate: number
): Calculation => {
  // Total of all items (tax already included in prices)
  const total = items.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0);
  
  // Calculate what portion is tax (reverse calculation from total)
  // If VAT is 15%, then: total = subtotal * 1.15, so subtotal = total / 1.15
  const subtotal = total / (1 + taxRate / 100);
  const tax = total - subtotal;
  
  // Tip is calculated on the total (including tax)
  const tip = total * (tipRate / 100);
  const grandTotal = total + tip;

  const personTotals: PersonTotal[] = people.map(person => {
    const personItems = items.filter(item => item.sharedBy.includes(person.id));
    
    // Calculate person's share of items (with tax included)
    const itemsTotal = personItems.reduce((sum, item) => {
      const itemPrice = parseFloat(item.price) || 0;
      const splitCount = item.sharedBy.length || 1;
      return sum + (itemPrice / splitCount);
    }, 0);

    // Break down their total into subtotal and tax
    const itemsSubtotal = itemsTotal / (1 + taxRate / 100);
    const personTax = itemsTotal - itemsSubtotal;
    
    // Calculate their share of the tip based on their portion of the total
    const personTip = total > 0 ? (itemsTotal / total) * tip : 0;
    const personTotal = itemsTotal + personTip;

    return {
      ...person,
      subtotal: itemsSubtotal,
      tax: personTax,
      tip: personTip,
      total: personTotal,
    };
  });

  return { subtotal, tax, tip, total: grandTotal, personTotals };
};