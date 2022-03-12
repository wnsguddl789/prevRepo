# Next.js Course: Full ECommerce Website By Nextjs [2021] 강의

## Skills Stack

- React.js
- Next.js
- Mongo DB
<hr>

## Lesson

1. Introduction

- What you will learn
- What you will build
- What Packages you will use

2. Install Tools

- VS Code
- Chrome
  Node.js
- MongoDB

3. Create Next App

- npx create-next-app
- add layout component
- add header, main and footer

4. Add Styles

- add css to header, main and footer

5. Fix SSR Issue on MaterialUI

- add \_documents.js
- add code to fix styling issue

6. List Products

- add data.js
- add images
- render products

7. Add header links

- Add cart and login link
- use next/link and mui/link
- add css classes for header links

8. Route Product Details Page

- Make Product cards linkable
- Create /product/[slug] route
- find product based on slug

9. Create Product Details Page

- Create 3 columns
- show image in first column
- show product info in second column
- show add to cart action on third column
- add styles

10. Add MaterialUI Theme

- create theme
- use theme provider
- add h1 and h2 styles
- set theme colors

11. Create Application Context

- define context and reducer
- set darkMode flag
- create store provider
  use it on layout

12. Connect To MongoDB

- install mongodb
- install mongoose
- define connect and disconnect
  use it in the api

13. Create Products API

- create product model
- seed sample data
- create /api/products/index.js
- create product api

14. Fetch Products From API

- use getServerSideProps()
- get product from db
- return data as props
- use it in product screen too

15. Implement Add to cart

- define cart in context
- dispatch add to cart action
- set click event handler for button
  Create Cart Screen
  create cart.js
  redirect to cart screen
  use context to get cart items
  list items in cart items
  Use Dynamic Import In Cart Screen
  Use next/dynamic
  Wrap cart in dynamic with out ssr
  Update Remove Items In Cart
  Implement onChange for Select
  Show notification by notistack
  implement delete button handler
  Create Login Page
  create form
  add email and password field
  add login button
  style form
  Create Sample Users
  create user model
  add sample user in seed api
  Build Login API 3. use jsonwebtoken to sign token 4. implement login api
  Complete Login Page
  handle form submission
  add userInfo to context
  save userInfo in cookies
  show user name in nav bar using menu
  Create Register Page
  create form
  implement backend api
  redirect user to redirect page
  Login and Register Form Validation
  install react-hook-form
  change input to controller
  use notistack to show errors
  Create Shipping Page 4. create form 5. add address fields 8. save address in context
  Create Payment Page
  create form
  add radio button
  save method in context
  Create Place Order Page
  display order info
  show order summary
  add place order button
  Implement Place Order Action
  create click handler
  send ajax request
  clear cart
  redirect to order screen
  create backend api
  Create Order Details Page
  create api to order info
  create payment, shipping and items
  create order summary
  Pay Order By PayPal
  install paypal button
  use it in order screen
  implement pay order api
  Display Orders History
  create orders api
  show orders in profile screen
  Update User Profile 1. create profile screen 2. create update profile api
  Create Admin Dashboard 1. Create Admin Menu 2. Add Admin Auth Middleware

3. Implement admin summary api
   List Orders For Admin
   fix isAdmin middleware
   create orders page
   create orders api
   use api in page
   Deliver Order For Admin
   create deliver api
   add deliver button
   implement click handler
   List Products For Admin 2. create products page 3. create products api 4. use api in page
   Create Product Edit Page
   create edit page
   create api for product
   show product data in form
   Update Product
   create form submit handler
   create backend api for update
   Upload Product Image
   create cloudinary account
   get cloudinary keys
   create upload api
   upload files in edit page
   Create And Delete Products
   add create product button
   build new product api
   add handler for delete
   implement delete api
   List Users For Admin
   create users page
   create users api
   use api in page
   Create User Edit Page
   create edit page
   create api for user
   show user data in form
   Deploy on Vercel
   create vercel account
   connect to github
   create altas mongodb db
   push code to github
   Review Products
   add reviews model
   create api for reviews
   create review form
   show reviews on home screen
   Create Sidebar
   add drawer
   list categories
   redirect to search screen
   Create Search Box
   add form
   handle form submit
   redirect to search screen
   Create Search Page
   create filters
   list products
   show filters
   Add Carousel
   create featured products
   feed carousel data
   show popular products
   Choose Location on Map
   add google map
   create map screen
   choose location
   show in order screen
