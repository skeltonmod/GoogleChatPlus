console.info('Background worker loaded')
const clientId = '569848608913-i2650lfche8nejfm7lkk911bnv7n25g1.apps.googleusercontent.com'
const redirectUri = 'https://chat-api-382303.firebaseapp.com/__/auth/handler' // Replace with your custom redirect URI
const scopes_arr = [
  'https://www.googleapis.com/auth/chat.memberships',
  'https://www.googleapis.com/auth/chat.memberships.readonly',
  'https://www.googleapis.com/auth/chat.messages',
  'https://www.googleapis.com/auth/chat.messages.create',
  'https://www.googleapis.com/auth/chat.spaces.readonly',
  'https://www.googleapis.com/auth/chat.spaces',
  'https://www.googleapis.com/auth/chat.messages.readonly',
]

const scopes = encodeURIComponent(scopes_arr.join(' '))
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`
chrome.tabs.create({ url: authUrl })
console.log(chrome.identity.getRedirectURL());
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url.startsWith(redirectUri) && changeInfo.status === 'complete') {
    const urlParams = new URLSearchParams(new URL(tab.url).search)
    const authCode = urlParams.get('code')
    console.log(authCode)
    // Exchange the authorization code for an access token
    // Close the tab
    chrome.tabs.remove(tabId)
  }
})

// console.log(chrome.tabs)
// console.log(chrome.identity)
// function getAccessToken() {
//   return new Promise((resolve, reject) => {
//     chrome.identity.getAuthToken({ interactive: true }, (token) => {
//       if (chrome.runtime.lastError) {
//         reject(chrome.runtime.lastError)
//       } else {
//         resolve(token)
//       }
//     })
//   })
// }

// // Usage example:
// getAccessToken()
//   .then((accessToken) => {
//     console.log('Access Token:', accessToken)
//     // Use the access token to make API calls
//   })
//   .catch((error) => {
//     console.error('Error fetching access token:', error)
//   })
export {}
