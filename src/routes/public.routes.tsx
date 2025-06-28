import type { TRouteObject } from '@/shared/utils/router'

const PUBLIC_ROUTES = [
  {
    path: '/',
    lazy: async () => {
      const { default: Component } = await import('@/pages/home.page')
      return {
        Component
      }
    },
    meta: {
      title: 'Spawn',
      description: 'An opinionated React template'
    }
  }
] satisfies TRouteObject[]

export default PUBLIC_ROUTES
