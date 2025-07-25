/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // New Main Color Scheme
        primary: {
          DEFAULT: "#F44B7F", // Flamingo Pink
          50: "#fef2f4",
          100: "#fde6ea",
          200: "#fbd0d9",
          300: "#f7aab9",
          400: "#f27a93",
          500: "#F44B7F", // Main
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "#FFB6B9", // Blush Peach
          50: "#fff8f8",
          100: "#fff0f0",
          200: "#ffe4e4",
          300: "#ffcdcd",
          400: "#ffa8a8",
          500: "#FFB6B9", // Main
          600: "#ff7a7a",
          700: "#ff4757",
          800: "#e63946",
          900: "#c92a2a",
          950: "#7a1e1e",
          foreground: "hsl(var(--accent-foreground))",
        },
        secondary: {
          DEFAULT: "#FF6F61", // Coral Orange
          50: "#fff4f2",
          100: "#ffe6e2",
          200: "#ffd1ca",
          300: "#ffb3a5",
          400: "#ff8a70",
          500: "#FF6F61", // Main
          600: "#f04438",
          700: "#d92d20",
          800: "#b42318",
          900: "#912018",
          950: "#4f0d0a",
          foreground: "hsl(var(--secondary-foreground))",
        },
        neutral: {
          light: "#FFF8F9", // Snow White
          dark: "#2F2F2F", // Gunmetal Gray
          50: "#FFF8F9",
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "#2F2F2F",
          950: "#1a1a1a",
        },
        premium: {
          DEFAULT: "#8E44AD", // Royal Violet
          50: "#f3e8ff",
          100: "#e9d5ff",
          200: "#d8b4fe",
          300: "#c084fc",
          400: "#a855f7",
          500: "#8E44AD", // Main
          600: "#7c3aed",
          700: "#6b21a8",
          800: "#581c87",
          900: "#4c1d95",
          950: "#2e1065",
        },
        gold: {
          DEFAULT: "#F7C873", // Soft Gold
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#F7C873", // Main
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },

        // Keep existing romantic colors for backward compatibility
        romance: {
          25: "#fffbfb",
          50: "#fef7f7",
          100: "#fdeaea",
          200: "#fad4d4",
          300: "#f5b1b1",
          400: "#ee8989",
          500: "#e25d5d",
          600: "#d14343",
          700: "#b53535",
          800: "#962d2d",
          900: "#7c2828",
          950: "#5c1f1f",
        },
        bollywood: {
          25: "#fffef9",
          50: "#fff9eb",
          100: "#ffeec6",
          200: "#ffdb88",
          300: "#ffc94a",
          400: "#ffb220",
          500: "#f99107",
          600: "#dd6b02",
          700: "#b74806",
          800: "#94370c",
          900: "#7a2e0d",
          950: "#4a1a06",
        },
        royal: {
          25: "#fdfcff",
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
        passion: {
          25: "#fefbfc",
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          950: "#4c0b2a",
        },
        marigold: {
          25: "#fffefb",
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        coral: {
          25: "#fffefe",
          50: "#fff5f5",
          100: "#ffe3e3",
          200: "#ffcdcd",
          300: "#ffa8a8",
          400: "#ff7676",
          500: "#ff4444",
          600: "#ed1515",
          700: "#c80d0d",
          800: "#a50f0f",
          900: "#881414",
          950: "#4c0707",
        },
        saffron: {
          25: "#fffffe",
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006",
        },
        // New flirty Indian colors
        sindoor: {
          50: "#fff1f0",
          100: "#ffe1de",
          200: "#ffc8c2",
          300: "#ffa199",
          400: "#ff6b5a",
          500: "#ff3d2b",
          600: "#ed1c0a",
          700: "#c8140a",
          800: "#a5140e",
          900: "#881813",
        },
        henna: {
          50: "#fef8f0",
          100: "#fdeee0",
          200: "#fad9b8",
          300: "#f6c089",
          400: "#f19e4e",
          500: "#ec7f26",
          600: "#d9661c",
          700: "#b54f1a",
          800: "#92401b",
          900: "#773619",
        },
        gulmohar: {
          50: "#fff4ed",
          100: "#ffe6d4",
          200: "#ffc9a8",
          300: "#ffa370",
          400: "#ff7336",
          500: "#ff4f0f",
          600: "#f03607",
          700: "#c72708",
          800: "#9e220f",
          900: "#7f1e10",
        },
        jasmine: {
          50: "#fffef7",
          100: "#fffbeb",
          200: "#fff4c6",
          300: "#ffe897",
          400: "#ffd558",
          500: "#ffbe2b",
          600: "#f09b0a",
          700: "#c67207",
          800: "#9e580a",
          900: "#7f480c",
        },
        mehendi: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        // Beautiful peach color palette for romantic UI
        peach: {
          25: "#fffef9",
          50: "#fff9f0",
          100: "#fff3e0",
          200: "#ffe4c7",
          300: "#ffd1a3",
          400: "#ffb574",
          500: "#ff9a56",
          600: "#ff7a2b",
          700: "#e55a1b",
          800: "#cc4916",
          900: "#a03d14",
          950: "#7a2e10",
        },
        // Soft coral for accents
        blush: {
          25: "#fffbfb",
          50: "#fff5f5",
          100: "#ffe8e8",
          200: "#ffd1d1",
          300: "#ffb3b3",
          400: "#ff8888",
          500: "#ff6b6b",
          600: "#fa5252",
          700: "#f03e3e",
          800: "#e03131",
          900: "#c92a2a",
          950: "#a61e1e",
        },
        // Soft cream
        cream: {
          25: "#fffffe",
          50: "#fffcf0",
          100: "#fff8e1",
          200: "#fff0c4",
          300: "#ffe69c",
          400: "#ffd54f",
          500: "#ffca28",
          600: "#ffb300",
          700: "#ff8f00",
          800: "#ff6f00",
          900: "#e65100",
          950: "#bf360c",
        },
        rose: {
          25: "#fef7f7",
          50: "#fff1f2",
          75: "#fecaca",
          100: "#ffe4e6",
          150: "#fda4af",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        pink: {
          25: "#fdf2f8",
          50: "#fdf2f8",
          75: "#f9a8d4",
          100: "#fce7f3",
          150: "#f472b6",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        purple: {
          25: "#faf5ff",
          50: "#faf5ff",
          75: "#c084fc",
          100: "#f3e8ff",
          150: "#a855f7",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};