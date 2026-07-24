import { createApp } from 'vue'

// Self-hosted (site's CSP is font-src 'self', so no Google Fonts CDN).
// Latin-only subset, regular + medium + semibold.
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'

import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
