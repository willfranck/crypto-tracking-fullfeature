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
        hero: 'url(/crypto_graph.jpg)',
        dash: 'url(/blockchain.jpg)',
      },
      backgroundColor: {
        tint: 'rgba(0, 0, 0, 0.7)'
      },
      width: {
        22: '5.5rem',
        26: '6.5rem',
        86: '21rem',
        90: '22.5rem',
      },
      height: {
        hero: '70vh',
      },
      maxHeight: {
        cardGrid: '46.5rem',
      },
      minWidth: {
        ss: '21rem',
        sm: '23rem',
        cardMin: '18rem',
      },
      maxWidth: {
        ss: '21rem',
        sm: '23rem',
        page: '100rem',
        infoCard: '23rem',
      },
      screens: {
        sm: '464px',
        md: '768px',
        lg: '1024px',
        xl: '1396px',
      },
    },
  },
  plugins: [],
}
export default config
