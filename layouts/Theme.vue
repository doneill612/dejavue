<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/shadcn/dropdown-menu'
import { Button } from '@/components/shadcn/button'
import { Moon, Sun } from 'lucide-vue-next'
import { DejaVue } from '@/components/icons'

const colorMode = useColorMode()

const toggleMode = (mode: 'light' | 'dark' | 'system') => colorMode.preference = mode

</script>
<template>
  <main>
    <div class="absolute top-5 left-5">
      <div class="flex font-extrabold items-center justify-center">
        <DejaVue class="h-8" />
      </div>
    </div>
    <div class="absolute top-5 right-5">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">
            <Moon class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Sun class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span class="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem @click="toggleMode('light')">
            Light
          </DropdownMenuItem>
          <DropdownMenuItem @click="toggleMode('dark')">
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem @click="toggleMode('system')">
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <slot />
  </main>
</template>
