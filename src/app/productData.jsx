const productsData = {
    items: [
      {
        id: "mobile3",
        name: "iPhone 14 Pro",
        price: 129999,
        specs: [
          { key: "Processor", value: "Apple A16 Bionic" },
          { key: "RAM", value: "6GB" },
          { key: "Storage", value: "128GB/256GB/512GB" },
          { key: "Water Resistant", value: "Yes" },
        ],
        category: "Phones",
      },
      {
        id: "mobile2",
        name: "Xiaomi Mi 11",
        price: 39999,
        specs: [
          { key: "Processor", value: "Snapdragon 888" },
          { key: "RAM", value: "8GB" },
          { key: "Storage", value: "128GB/256GB" },
          { key: "Water Resistant", value: "No" },
        ],
        category: "Phones",
      },
      {
        id: "mobile4",
        name: "Samsung Galaxy S23 Ultra",
        price: 124999,
        specs: [
          { key: "Processor", value: "Snapdragon 8 Gen 2" },
          { key: "RAM", value: "12GB" },
          { key: "Storage", value: "256GB/512GB" },
          { key: "Water Resistant", value: "Yes" },
        ],
        category: "Phones",
      },
      {
        id: "mobile",
        name: "Nokia X20",
        price: 31999,
        specs: [
          { key: "Processor", value: "Snapdragon 480" },
          { key: "RAM", value: "8GB" },
          { key: "Storage", value: "128GB" },
          { key: "Water Resistant", value: "Yes" },
        ],
        category: "Phones",
      },
      {
        id: "laptop1",
        name: "Apple MacBook Air (M2, 2022)",
        price: 119900,
        specs: [
          { key: "Processor", value: "Apple M2" },
          { key: "RAM", value: "8GB" },
          { key: "Storage", value: "256GB/512GB" },
          { key: "Touchscreen", value: "No" },
        ],
        category: "Laptops",
      },
      {
        id: "laptop2",
        name: "Lenovo IdeaPad Flex 5",
        price: 62990,
        specs: [
          { key: "Processor", value: "AMD Ryzen 5 5500U" },
          { key: "RAM", value: "16GB" },
          { key: "Storage", value: "512GB SSD" },
          { key: "Touchscreen", value: "Yes" },
        ],
        category: "Laptops",
      },
      {
        id: "laptop3",
        name: "HP Victus 16",
        price: 109990,
        specs: [
          { key: "Processor", value: "AMD Ryzen 7 5800H" },
          { key: "RAM", value: "16GB" },
          { key: "Storage", value: "1TB SSD" },
          { key: "Touchscreen", value: "No" },
        ],
        category: "Laptops",
      },
      {
        id: "speaker3",
        name: "JBL Charge 5",
        price: 14999,
        specs: [
          { key: "Type", value: "Portable Bluetooth" },
          { key: "Battery Life", value: "20 hours" },
          { key: "Water Resistant", value: "Yes" },
          { key: "Built-in Microphone", value: "No" },
        ],
        category: "Speakers",
      },
      {
        id: "speaker2",
        name: "Sony SRS-XB43",
        price: 26990,
        specs: [
          { key: "Type", value: "Portable Bluetooth" },
          { key: "Battery Life", value: "24 hours" },
          { key: "Water Resistant", value: "Yes" },
          { key: "Built-in Microphone", value: "No" },
        ],
        category: "Speakers",
      },
      {
        id: "headphones",
        name: "Sony WH-1000XM5",
        price: 34990,
        specs: [
          { key: "Type", value: "Over-Ear" },
          { key: "Battery Life", value: "30 hours" },
          { key: "Noise Cancellation", value: "Yes" },
          { key: "Foldable", value: "No" },
        ],
        category: "Headphones",
      },
      {
        id: "headphones3",
        name: "Skullcandy Crusher Evo",
        price: 14999,
        specs: [
          { key: "Type", value: "Over-Ear" },
          { key: "Battery Life", value: "40 hours" },
          { key: "Noise Cancellation", value: "No" },
          { key: "Foldable", value: "Yes" },
        ],
        category: "Headphones",
      },
      {
        id: "headphones2",
        name: "Bose QuietComfort 45",
        price: 29900,
        specs: [
          { key: "Type", value: "Over-Ear" },
          { key: "Battery Life", value: "24 hours" },
          { key: "Noise Cancellation", value: "Yes" },
          { key: "Foldable", value: "No" },
        ],
        category: "Headphones",
      },
      {
        id: "headphones4",
        name: "Jabra Elite 85h",
        price: 24999,
        specs: [
          { key: "Type", value: "Over-Ear" },
          { key: "Battery Life", value: "36 hours" },
          { key: "Noise Cancellation", value: "Yes" },
          { key: "Foldable", value: "No" },
        ],
        category: "Headphones",
      },
      {
        id: "tv3",
        name: "Samsung QN90B Neo QLED",
        price: 159999,
        specs: [
          { key: "Screen Size", value: "55 inches" },
          { key: "Resolution", value: "4K" },
          { key: "Smart TV", value: "Yes" },
          { key: "HDR Support", value: "Yes" },
        ],
        category: "Television",
      },
      {
        id: "tv2",
        name: "LG OLED C2",
        price: 229990,
        specs: [
          { key: "Screen Size", value: "65 inches" },
          { key: "Resolution", value: "4K" },
          { key: "Smart TV", value: "Yes" },
          { key: "HDR Support", value: "Yes" },
        ],
        category: "Television",
      },
      {
        id: "tv1",
        name: "Panasonic TX-55HZ2000",
        price: 249990,
        specs: [
          { key: "Screen Size", value: "55 inches" },
          { key: "Resolution", value: "4K" },
          { key: "Smart TV", value: "Yes" },
          { key: "HDR Support", value: "Yes" },
        ],
        category: "Television",
      },
      {
        id: "console2",
        name: "PlayStation 5",
        price: 49990,
        specs: [
          { key: "Storage", value: "825GB SSD" },
          { key: "Resolution", value: "4K" },
          { key: "Controller", value: "DualSense" },
          { key: "VR Support", value: "Yes" },
        ],
        category: "Gaming Consoles",
      },
      {
        id: "PSConsole",
        name: "PlayStation 4 Pro",
        price: 34990,
        specs: [
          { key: "Storage", value: "1TB HDD" },
          { key: "Resolution", value: "4K" },
          { key: "Controller", value: "DualShock 4" },
          { key: "VR Support", value: "Yes" },
        ],
        category: "Gaming Consoles",
      },
    ],
  };
  
  export default productsData;
  