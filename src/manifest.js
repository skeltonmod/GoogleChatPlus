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
      matches: ['https://mail.google.com/chat/*'],
      js: ['src/content/index.js'],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        'img/logo-16.png',
        'img/logo-34.png',
        'img/logo-48.png',
        'img/logo-128.png',
        'tailwind.css',
        'daisyui.css',
        'tailwind.js',
      ],
      matches: [],
    },
  ],
  permissions: ['activeTab', 'webRequest', 'identity', 'tabs'],
  oauth2: {
    client_id: '569848608913-i2650lfche8nejfm7lkk911bnv7n25g1.apps.googleusercontent.com',
    scopes: [
      'https://www.googleapis.com/auth/chat.memberships',
      'https://www.googleapis.com/auth/chat.memberships.readonly',
      'https://www.googleapis.com/auth/chat.messages',
      'https://www.googleapis.com/auth/chat.messages.create',
      'https://www.googleapis.com/auth/chat.spaces.readonly',
      'https://www.googleapis.com/auth/chat.spaces',
      'https://www.googleapis.com/auth/chat.messages.readonly'
    ],
  },
})
