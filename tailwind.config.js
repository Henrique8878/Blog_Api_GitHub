import img from './src/assets/Cover.png'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Nunito:"Nunito,sans-serif"
      },
      lineHeight:{
        pattern:"160%"
      },
      backgroundImage:{
        bg_title:"url(./src/assets/Cover.png)"
      },
      backgroundColor:{
        blue:"#3294F8",
        base_title:"#E7EDF4",
        base_subtitle:"#C4D4E3",
        base_text:"#AFC2D4",
        base_span:"#7B96B2",
        base_label:"#3A536B",
        base_border:"#1C2F41",
        base_post:"#112131",
        base_profile:"#0B1B2B",
        base_background:"#071422",
        base_input:"040f1A"
      },
      colors:{
        blue:"#3294F8",
        base_title:"#E7EDF4",
        base_subtitle:"#C4D4E3",
        base_text:"#AFC2D4",
        base_span:"#7B96B2",
        base_label:"#3A536B"
      },
      borderColor:{
        blue:"#3294F8",
        base_title:"#E7EDF4",
        base_subtitle:"#C4D4E3",
        base_text:"#AFC2D4",
        base_span:"#7B96B2",
        base_label:"#3A536B",
        base_border:"#1C2F41",
        base_post:"#112131",
        base_profile:"#0B1B2B",
        base_background:"#071422",
        base_input:"040f1A"
      },
      spacing: {
        'word-4': '4px',
        'word-8': '8px',
        'word-12': '12px',
        'word-16': '16px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
