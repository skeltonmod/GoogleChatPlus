import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: 'Better Google Chat',
  description: 'Less Shitty Google Chat',
  version: '1.0.0',
  manifest_version: 3,
  icons: {
    16: 'img/logo-16.png',
    32: 'img/logo-34.png',
    48: 'img/logo-48.png',
    128: 'img/logo-128.png',
  },
  action: {
    default_popup: 'popup.html',
    default_icon: 'img/logo-48.png',
  },
  options_page: 'options.html',
  background: {
    service_worker: 'src/background/index.js',
    type: 'module',
  },
  content_scripts: [
    {
      "all_frames": true,
      "matches": ["https://chat.google.com/*"],
      "run_at": "document_end",
      "js": ['src/content/index.js'],
    },
  ],
  "host_permissions": [
    "https://*.google.com/*"
  ],
  web_accessible_resources: [
    {
      resources: [
        'img/logo-16.png',
        'img/logo-34.png',
        'img/logo-48.png',
        'img/logo-128.png',
      ],
      matches: [],
    },
  ],
})
