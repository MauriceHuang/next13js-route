
# Tasks 
- create a complete routing structure for an e-commerce project using different routes. Here are the expected routes:

- [x] Home page: "/"
- [x] Product listing page: "/products"
- [x] Product detail page:"/products/{productId}"
- [x] Shopping cart page:"/cart"
- [x] Checkout page:"/checkout"
- [x] Order confirmation page:"/order/{orderId}"
- [x] User account page:"/account"
- [x] Login page:"/login"
- [x] Registration page:"/register"
- [x] Search results page:"/search?q={searchQuery}"
- [x] Explain how does the next.js routing differ from React.js routing?

## File-system-based Routing (Next.js) vs. Config-based Routing (React Router):

*Next.js*: Next.js has a unique file-system-based routing mechanism. That means the routing is determined by the file and folder structure inside the pages directory. For example, a file at `pages/about.js` corresponds to the `/about`` route.
*React Router*: React Router uses a configuration-based approach, where you explicitly define your routes inside your components using <Route> and <Switch> components.

## Automatic Code Splitting:

*Next.js*: By default, Next.js automatically performs code splitting. Each page in the pages directory becomes its own bundle. This ensures that a user only downloads the minimal amount of code necessary for a particular route.
*React Router*: With React Router, code splitting can be achieved using React's React.lazy() and <Suspense> but requires manual setup.

## Server Side Rendering (SSR):

*Next.js*: Offers built-in SSR capabilities. By default, each page in the pages directory is pre-rendered and can be either statically generated or server-side rendered depending on your data-fetching strategy.
*React Router*: Doesn't have built-in SSR support. To achieve SSR with React Router, you typically have to integrate and set up additional libraries and configurations.

## API Routes:

*Next.js*: Provides a feature to create API routes by placing files inside the pages/api directory. This allows you to easily build backend functionality within the same Next.js app.
*React Router*: Does not have a built-in feature for creating API routes. Backend logic is typically separate from the client-side routing logic.

## Linking Between Routes:

*Next.js*: Uses its own <Link> component to navigate between routes. This component provides client-side transitions between routes.
*React Router*: Also has a <Link> component for navigating between routes, with similar functionality.

## Dynamic Routes:

*Next.js*: Supports dynamic routing by using file and folder naming patterns in the pages directory. For example, pages/posts/[id].js would match routes like `/posts/1` or `/posts/hello-world`.
*React Router*: Dynamic routing is done through the path prop in the <Route> component, e.g., <Route path="/posts/:id" />.

## Shallow Routing:

*Next.js*: Offers shallow routing, which allows you to change the URL without running data fetching methods again, useful for filtering, pagination, etc.
*React Router*: Doesn’t have a direct equivalent. Any change in the route often leads to remounting or re-rendering components unless manually optimized.

## Middleware:

*Next.js 12 and above*: Offers built-in middleware support. Middleware allows you to run code before your route is being accessed.
*React Router*: Does not have a built-in middleware system, but you can implement your own logic to achieve similar effects.

In summary, while both Next.js and React Router provide routing solutions for React applications, they differ in their approach and features. Next.js emphasizes a convention-over-configuration approach with its file-system-based routing and offers integrated solutions like SSR, while React Router offers more flexibility with its configuration-based routing but might require more setup for certain features.

- [x] What is the purpose of route groups, and how can they be created in Next.js?

## Route Groups
In the `app` directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a Route Group to prevent the folder from being included in the route's URL path.

This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.

Route groups are useful for:

Organizing routes into groups e.g. by site section, intent, or team.
Enabling nested layouts in the same route segment level:
Creating multiple nested layouts in the same segment, including multiple root layouts
Adding a layout to a subset of routes in a common segment
Convention
A route group can be created by wrapping a folder's name in parenthesis: (folderName)

- [x] What is a dynamic route, and why should we create dynamic routes in web applications?

## Dynamic Routes
When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.

Convention
A Dynamic Segment can be created by wrapping a folder's name in square brackets: `[folderName]`. For example, `[id]` or `[slug]`.

Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.

