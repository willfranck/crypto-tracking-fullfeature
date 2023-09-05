import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        22: '5.5rem',
        86: '21rem',
        90: '22.5rem',
      },
      minWidth: {
        ss: '21rem',
        sm: '22.5rem',
      },
      maxWidth: {
        ss: '21rem',
        sm: '22.5rem',
      },
      screens: {
        sm: '396px',
        md: '768px',
        lg: '984px',
        xl: '1240px',
      }
    },
  },
  plugins: [],
}
export default config
