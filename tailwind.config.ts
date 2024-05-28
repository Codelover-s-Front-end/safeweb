import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-72': '4.5rem', // Custom font size equivalent to 72px
      },
      borderWidth: {
        '1': '1px', // Define other border widths as needed
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue1' : '#001C64',
        'blue2' : '#0070E0',
        'blue3' : '#001435',
        'gray1' : '#F3F3F6',
        'blue4' : '#001435',
        'blue5' : '#002C7C',
        'blue6' : '#E3F9FE',
        'gradient-blue' : '#001435',
        'link-hover' : '#A6D9E7',
        'link-hover2' : '#B9EFFC'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'], // Add hover variant for borderWidth
    },
  },
  plugins: [],
};
export default config;
