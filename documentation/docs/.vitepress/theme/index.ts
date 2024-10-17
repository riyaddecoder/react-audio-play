// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import '../styles/app.css'  // Import your custom CSS here

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // You can add more custom logic here if needed
  }
}
