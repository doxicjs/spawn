import type { TRouteObject } from '@/shared/utils/router'

const SYSTEM_ROUTES = [
  {
    path: '*',
    lazy: async () => {
      const { default: Component } = await import('@/pages/404')
      return {
        Component
      }
    },
    meta: {
      title: 'Not Found'
    }
  }
] satisfies TRouteObject[]

export default SYSTEM_ROUTES
