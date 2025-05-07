import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isProtectedRoute = createRouteMatcher(['/retos(.*)'])

export const onRequest = clerkMiddleware((auth, context) => {
    const {userId, redirectToSignIn} = auth()
    if (!userId && isProtectedRoute(context.request)) {
        // Add custom logic to run before redirecting
        return redirectToSignIn()
      }
});