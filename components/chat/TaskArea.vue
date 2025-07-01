<script setup lang="ts">
import { Textarea } from '@/components/shadcn/textarea'
import {
  FormField,
  FormItem,
  FormMessage,
  FormControl
} from '@/components/shadcn/form'
import { Button } from '@/components/shadcn/button'
import { useForm } from 'vee-validate'
import { Mic, Laptop, Layers } from 'lucide-vue-next'

const { setFieldValue } = useForm()
const onSubmit = () => {}
</script>
<template>
  <div class="px-4 sm:px-6 lg:px-0 w-[80vh]">
    <div class="relative">
      <form @submit="onSubmit">
      <FormField v-slot="{ value }" name="message">
        <FormItem>
          <FormMessage />
          <FormControl>
            <Textarea
              v-bind:model-value="value"
              class="p-3 min-h-45 sm:p-4 pb-12 sm:pb-12 block w-full rounded-2xl"
              placeholder="Ask a question or describe a task..."
              :disabled="true"
              @update:model-value="(v) => setFieldValue('message', v as string, false)"
            />
          </FormControl>
        </FormItem>
      </FormField>
      <div class="absolute bottom-px inset-x-px p-2">
        <div class="flex justify-between items-center gap-2">
          <div class="flex items-center justify-center space-x-2">
            <Button size="sm" variant="outline">
              <Laptop class="h-8 w-8" /> Select a project
            </Button>
            <Button size="sm" disabled variant="outline">
              <Layers class="h-8 w-8" /> 1x
            </Button>
          </div>
          <Button size="sm" variant="secondary">
            <Mic class="h-8 w-8" />
          </Button>
        </div>
      </div>
    </form>
    </div>
    
  </div>
</template>
<style scoped>
textarea {
  resize: none;
}
</style>