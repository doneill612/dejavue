<script setup lang="ts">
import { siGoogle, siFacebook, siApple, type SimpleIcon } from 'simple-icons'

const props = defineProps<{
  brand: 'google' | 'facebook' | 'apple'
  size?: number
  fill?: string
}>()

const iconMap: Record<typeof props.brand, SimpleIcon> = {
  'google': siGoogle,
  'facebook': siFacebook,
  'apple': siApple
}

const size = props.size || 24
const icon = computed(() => iconMap[props.brand])
const viewBox = computed(() => {
  const match = icon.value.svg.match(/viewBox="([^"]+)"/)
  return match?.[1] ?? '0 0 24 24'
})

</script>
<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor"
    v-html="icon.svg"
    :width="size" 
    :height="size" 
    :viewBox="viewBox" 
  />
</template>