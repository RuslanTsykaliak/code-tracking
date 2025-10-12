// File: /Users/mac/Documents/CODING/jourIn/app/api/register/route.ts
import * as entry from '../../../../../app/api/register/route.js'
import type { NextRequest } from 'next/server.js'

type TEntry = typeof import('../../../../../app/api/register/route.js')

type SegmentParams<T extends Object = any> = T extends Record<string, any>
  ? { [K in keyof T]: T[K] extends string ? string | string[] | undefined : never }
  : T

// Check that the entry is a valid entry
checkFields<Diff<{
  GET?: Function
  HEAD?: Function
  OPTIONS?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
  PATCH?: Function
  config?: {}
  generateStaticParams?: Function
  revalidate?: RevalidateRange<TEntry> | false
  dynamic?: 'auto' | 'force-dynamic' | 'error' | 'force-static'
  dynamicParams?: boolean
  fetchCache?: 'auto' | 'force-no-store' | 'only-no-store' | 'default-no-store' | 'default-cache' | 'only-cache' | 'force-cache'
  preferredRegion?: 'auto' | 'global' | 'home' | string | string[]
  runtime?: 'nodejs' | 'experimental-edge' | 'edge'
  maxDuration?: number
  
}, TEntry, ''>>()

type RouteContext = { params: Promise<SegmentParams> }
// Check the prop type of the entry function
if ('GET' in entry) {
  checkFields<
    Diff<
      ParamCheck<Request | NextRequest>,
      {
        __tag__: 'GET'
        __param_position__: 'first'
        __param_type__: FirstArg<MaybeField<TEntry, 'GET'>>
      },
      'GET'
    >
  >()
  checkFields<
    Diff<
      ParamCheck<RouteContext>,
      {
        __tag__: 'GET'
... (truncated for brevity)