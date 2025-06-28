import { type RouteObject, matchPath } from 'react-router-dom'

import { PAGE_ROUTES } from '@/routes/app.routes'

import type { TIcon } from '@/shared/utils/icon'

export type TMeta = {
  title?: string
  description?: string
  icon?: TIcon
}

export type TRouteObject = Omit<RouteObject, 'path' | 'children'> & {
  path: string
  meta?: TMeta
  children?: TRouteObject[]
}

export const get_route_meta = (path: string) => {
  return PAGE_ROUTES.find((r) => matchPath(r.path, path))?.meta
}
