import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ['/', '/api/generate'],
    
})

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};