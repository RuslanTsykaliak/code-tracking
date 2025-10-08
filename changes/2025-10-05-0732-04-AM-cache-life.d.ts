// Type definitions for Next.js cacheLife configs

declare module 'next/cache' {
  export { unstable_cache } from 'next/dist/server/web/spec-extension/unstable-cache'
  export {
    revalidateTag,
    revalidatePath,
    unstable_expireTag,
    unstable_expirePath,
  } from 'next/dist/server/web/spec-extension/revalidate'
  export { unstable_noStore } from 'next/dist/server/web/spec-extension/unstable-no-store'

  
    /**
     * Cache this `"use cache"` for a timespan defined by the `"default"` profile.
     *