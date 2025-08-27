# Dream Cars - Car Enthusiast Dashboard

A comprehensive web application for car enthusiasts to track their vehicles, manage dream cars, and log their automotive journey.

## 🚗 Features

### Core Functionality

- **User Authentication**: Secure login/signup using Clerk
- **Car Management**: Add and track your personal vehicles
- **Dream Cars**: Create and manage your automotive wishlist
- **Project Cars**: Track vehicles you're working on
- **Mileage Tracking**: Log and monitor miles driven
- **Horsepower Calculator**: Calculate total horsepower across your fleet

### User Experience

- **Protected Routes**: Secure access to user-specific content
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Dynamic content updates without page refresh

## 🛠️ Tech Stack

- **Frontend**: React, Next.js 14 with App Router
- **Authentication**: Clerk -> did not feel like handeling email and passwords and this allows me to use sign in's like github
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM and Supabase -> allows for simple db setup and communicating via tRPCS to allow for full type safety and does not require me learning syntax for SQL
- **State Management**: React Context API
- **TypeScript**: Full type safety

# REMINDER FOR ME

- [ ] input validate everywhere basically double check and implement where required
- [ ] folder rename to lower case for easier navigation via link and then change bread crumbs to load and while loading just capitalize it

- [ ] Break down code even further
- [ ] Tidy up code
- [ ] Change to next image rather than img

# BREAKDOWN PAGE BY PAGE

## My Car

### Car

- [ ] Able to select image and for it to go into bigger view/main view
- [ ] pop up window to update miles
- [ ] pop up window to add log service

### Edit

- [ ] add remove to client side and then delete from db on save edit
- [ ] improve design as it looks lackluster
- [ ] give error message for user in case img too big etc
- [ ] Make sure only the owner can edit
- [ ] handle deletion on uploadthing as well
