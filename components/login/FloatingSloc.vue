<script setup lang="ts">
import { slocSnippets } from '.'

const containerRef = ref<HTMLElement | null>(null)
const typeSpeed = 60 // ms per character

const slotRegions = [
  { top: '5%', left: '10%' },
  { top: '5%', left: '70%' },
  { top: '30%', left: '5%' },
  { top: '30%', left: '80%' },
  { top: '85%', left: '10%' },
  { top: '85%', left: '70%' },
  { top: '5%', left: '45%' },
  { top: '85%', left: '45%' },
]

const occupiedSlots = new Set<number>()
let intervalId: number | undefined

const typeSloc = (el: HTMLElement, text: string, slotIdx: number) => {
  let i = 0
  const typer = setInterval(() => {
    el.textContent += text[i++]
    if (i === text.length) {
      clearInterval(typer)
      el.classList.add('sloc-fadeout')
      setTimeout(() => {
        el.remove()
        occupiedSlots.delete(slotIdx)
      }, 4000)
    }
  }, typeSpeed)
}

const spawnSloc = () => {
  const container = containerRef.value
  if (!container) return

  const available = slotRegions.map((_, i) => i).filter(i => !occupiedSlots.has(i))
  if (!available.length) return

  const idx = available[Math.floor(Math.random() * available.length)]
  const { top, left } = slotRegions[idx]
  occupiedSlots.add(idx)

  const el = document.createElement('div')
  el.className = 'sloc-type text-muted-foreground'

  // -20 to +20 px offset to help avoid overlap
  const offset = () => Math.floor(Math.random() * 42) - 20

  el.style.top = `calc(${top} + ${offset()}px)`
  el.style.left = `calc(${left} + ${offset()}px)`

  container.appendChild(el)

  const snippet = slocSnippets[Math.floor(Math.random() * slocSnippets.length)]
  typeSloc(el, snippet, idx)
}

onMounted(() => {
  intervalId = window.setInterval(spawnSloc, 1000)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style>
.floating-sloc-container {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.sloc-type {
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  white-space: nowrap;
  padding: 0.25rem 0.5rem;
  opacity: 1;
  transition: opacity 4s ease-in;
}

.sloc-fadeout {
  opacity: 0;
}
</style>
<template>
  <div ref="containerRef" class="floating-sloc-container" aria-hidden="true" />
</template>