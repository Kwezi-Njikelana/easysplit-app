# 🧾 EasySplit Bill

A modern, mobile-responsive React application for splitting bills among friends. Scan receipts, assign items to people, and automatically calculate fair splits including VAT and tip.

![TypeScript]
![React]
![Tailwind CSS]
![Vite]

## ✨ Features

- 📸 **Receipt Scanning** - Simulated receipt scanning functionality
- 👥 **Multi-Person Support** - Add unlimited people with color-coded tags
- 🍕 **Item Management** - Add items and assign them to specific people
- 💰 **Smart Splitting** - Automatically splits items between multiple people
- 🧮 **VAT Calculation** - Properly calculates VAT as included in item prices 
- 💵 **Tip Calculation** - Add tip percentage on top of the bill
- 📱 **Mobile Responsive** - Works perfectly on phones, tablets, and desktop


## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone
cd easysplit-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **[React](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon set


## 💡 How to Use

1. **Add People** - Click "Add" under the People section to add friends
2. **Add Items** - Click "Add" under Items to add bill items
3. **Assign Items** - Click on person tags under each item to assign who's sharing it
4. **Adjust VAT/Tip** - Modify the VAT and tip percentages as needed
5. **View Split** - See the breakdown of what each person owes at the bottom



## 🧮 How It Calculates

### VAT Calculation
VAT is calculated as **included** in the item prices (standard SA practice):
- If an item costs R115.00 with 15% VAT
- Subtotal (excl. VAT) = R115.00 ÷ 1.15 = R100.00
- VAT = R115.00 - R100.00 = R15.00

### Tip Calculation
Tip is calculated **on top** of the bill total:
- Bill Total = R500.00
- Tip (10%) = R500.00 × 0.10 = R50.00
- Total to Pay = R550.00

### Splitting Logic
Each person pays for:
1. Their share of assigned items (split equally if shared)
2. Their proportional share of VAT (based on their items)
3. Their proportional share of tip (based on their items)


