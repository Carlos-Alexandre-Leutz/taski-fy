<template>
  <div>
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
    <main>
      <slot />
    </main>

    <footer>
      <p>© 2025 Meu App</p>
    </footer>
  </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  components: {
    Link,
  },
}
</script>