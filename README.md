# Counter Logic TypeScript (Ts)

A simple **TypeScript-only** project that implements a counter with increment, decrement, and reset buttons, along with a live clock.  
This project focuses on **clean TypeScript logic, proper DOM typing, and beginner-friendly frontend fundamentals**.

---

## ✨ Features

- 🎯 Increment, decrement, and reset the counter
- ⏰ Live digital clock updated every second
- 🛡️ Type-safe DOM handling with TypeScript
- ✅ Clean logic without unnecessary if-else nesting
- 💻 Fully written in TypeScript, no direct JavaScript
- 🎨 Minimal, readable UI with responsive design

---

## 🧠 What I Learned

- How to safely access DOM elements in TypeScript using type assertions
- Updating DOM elements dynamically and handling `textContent` possibly being `null`
- How to structure event listeners for buttons efficiently
- How TypeScript catches potential logic issues before runtime
- Writing clean, maintainable frontend logic

---

## 🛠 Tech Stack

- **TypeScript** (no direct JS)
- HTML
- CSS

---

## 🚀 How It Works

- Each button (`+`, `-`, `Reset`) has an event listener attached
- `+` increases the counter, `-` decreases it, and `Reset` sets it to 0
- A separate interval updates the clock every second
- TypeScript ensures all DOM elements are properly typed
- Counter value and clock are dynamically updated in the DOM

---



## 💻 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/HasibCoderLab/counter-logic-typescript.git
```

## 1️⃣ npm init
```
npm init -y
```
### 2️⃣ TypeScript install
```
npm install typescript --save-dev
```
### 3️⃣ TypeScript config generate
```
npx tsc --init
```

### 4️⃣ Compile & run
```
npx tsc --watch
```


📁 Project Structure

```
counter-logic-TypeScript/
│
├── src/
│   ├── script.ts            # TypeScript 
│   └── assets/
│       └── screenshot1.png   # preview image for README
│       └── screenshot2.png 
│       └── screenshot3.png     
│       └── screenshot4.png                                   
├── dist/
│   └── script.js            # compiled JS
│
├── index.html               # main HTML file
├── style.css                # styling
├── tsconfig.json            # TypeScript config
├── package.json             # npm project config
├── vite.config.ts           # optional,
└── README.md                # project README with preview + link
```

![Preview](./src/assets/screenshot1.png)
![Preview](./src/assets/screenshot2.png)

### 🎯 Why This Project

This project was built to strengthen my TypeScript basics and understand how simple UI logic becomes more reliable with proper typing.

Strong developers are built from strong fundamentals.

### ❤️Final Note

This is a learning-focused project, intentionally kept simple.
