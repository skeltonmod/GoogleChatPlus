<script>
  import { onMount } from 'svelte'
  import Navbar from './components/Navbar.svelte'
  import Sidebar from './components/Sidebar.svelte'
  import ChatWindow from './screens/ChatWindow.svelte'
  const crx = 'create-chrome-ext'
</script>

<main data-theme="coffee" class="h-screen">
  <Navbar />
  <Sidebar />
  <ChatWindow />
</main>
