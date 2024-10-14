/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CountryIdImport } from './routes/country/$id'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const CountryIdRoute = CountryIdImport.update({
  path: '/country/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/country/$id': {
      id: '/country/$id'
      path: '/country/$id'
      fullPath: '/country/$id'
      preLoaderRoute: typeof CountryIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/country/$id': typeof CountryIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/country/$id': typeof CountryIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/country/$id': typeof CountryIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/country/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/country/$id'
  id: '__root__' | '/' | '/country/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  CountryIdRoute: typeof CountryIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  CountryIdRoute: CountryIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/country/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/country/$id": {
      "filePath": "country/$id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
