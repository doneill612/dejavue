<script setup lang="ts">
import { Button } from '@/components/shadcn/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/shadcn/card'
import { Label } from '@/components/shadcn/label'
import { Input } from '@/components/shadcn/input'
import { BrandIcon, Brand, DejaVue } from '@/components/icons'

definePageMeta({
  layout: 'theme'
})

const login = async () => {
  // TODO implement authentication... for now, go home.
  return navigateTo('/')
}

// TODO implement
const loginWithGoogle = async() => await login()
const loginWithFacebook = async() => await login()
const loginWithApple = async() => await login()

</script>
<template>
  <div class="flex h-[100vh] items-center justify-center">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle class="flex justify-center items-center">
          <span>Deja</span>
          <DejaVue class="h-8" />
          <span>ue</span>
        </CardTitle>
        <CardDescription class="text-center">Login to access your projects</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid gap-4">
            <Button @click="loginWithGoogle" variant="outline" class="w-full flex justify-center items-center">
              <BrandIcon :brand="Brand.GOOGLE" /> Continue With Google
            </Button>
            <Button @click="loginWithFacebook" variant="outline" class="w-full flex justify-center items-center">
              <BrandIcon :brand="Brand.FACEBOOK" /> Login with Facebook
            </Button>
            <Button @click="loginWithApple" variant="outline" class="w-full flex justify-center items-center">
              <BrandIcon :brand="Brand.APPLE" /> Sign in with Apple
            </Button>
            <hr />
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div class="grid gap-2">
              <div class="flex items-center">
                <Label for="password">Password</Label>
                <a href="#" class="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button @click="login" class="w-full">
              Login
            </Button>
          </div>
          <div class="mt-4 text-center text-sm">
            Don't have an account?
            <a href="#" class="underline">
              Sign up
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>