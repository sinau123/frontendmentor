import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QRCodeView from '@/views/QRCodeView.vue'
import BlogPreviewView from '@/views/BlogPreviewView.vue'
import SocialLinks from '@/views/SocialLinks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: QRCodeView,
    },
    {
      path: '/blog-preview',
      name: 'blog-preview',
      component: BlogPreviewView,
    },
    {
      path: '/social-links',
      name: 'social-links',
      component: SocialLinks,
    },
  ],
})

export default router
