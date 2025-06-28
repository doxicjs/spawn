import App from '@/app'
import type { RouteObject } from 'react-router-dom'

import DefaultLayout from '@/layouts/default.layout'

// Routes
import PUBLIC_ROUTES from './public.routes'
import SYSTEM_ROUTES from './system.routes'

// All routes
export const PAGE_ROUTES = [...PUBLIC_ROUTES]
export const MENU_ROUTES = PUBLIC_ROUTES.filter((r) => ['/'].includes(r.path))

export const APP_ROUTES: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        element: <DefaultLayout />,
        children: PUBLIC_ROUTES
      },
      {
        children: SYSTEM_ROUTES
      }
    ]
  }
]
