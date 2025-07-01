<script setup lang="ts">
import { TaskArea, TaskList } from '@/components/chat'
import {
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList
} from '@/components/shadcn/tabs'
definePageMeta({
  layout: 'theme'
})
</script>
<template>
  <div class="flex flex-col items-center justify-center space-y-7 mt-20">
    <span class="text-3xl font-extrabold">Let's begin.</span>
    <TaskArea />
    <Tabs default-value="tasks" class="w-[80vh]">
      <TabsList>
        <TabsTrigger value="tasks">
          Tasks
        </TabsTrigger>
        <TabsTrigger value="archive">
          Archive
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tasks">
        <div class="flex justify-center items-center">
          <span>
            No active or completed tasks.
          </span>
        </div>
        <TaskList />
      </TabsContent>
      <TabsContent value="archive">
        <div class="flex justify-center items-center">
          <span>
            No archived tasks.
          </span>
        </div>
        <TaskList />
      </TabsContent>
    </Tabs>
  </div>
</template>