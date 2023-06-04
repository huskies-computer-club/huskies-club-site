/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        dark: {
          primary: '#23553e', // dark green
          secondary: '#547634', // lighter green
          accent: '#00ffc6',
          neutral: '#171717',
          info: '#93c5fd',
          success: '#BBF7D0',
          warning: '#fdba74',
          error: '#DC2626',
          // 'base-content': '#FAFAFA', // Base text content color
          // 'base-100': '#171717', // Base background color
        }
      },
      { 
        light: {
          primary: '#23553e',
          secondary: '#547634',
          accent: '#00ffc6',
          neutral: '#171717',
          info: '#bfdbfe',
          success: '#BBF7D0',
          warning: '#fed7aa',
          error: '#DC2626',
        } 
      }
    ],
    darkTheme: 'dark'
  },
}

