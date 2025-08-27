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

# Project Todo List

# REMINDER FOR ME

- [ ] Make sure when making forms its said thing OR NULL not empty string
- [ ] Improve design of edit car page but not top priority
- [ ] Make sure only the owner can edit
- [ ] input validate everywhere basically double check and implement where required
- [ ] folder rename to lower case for easier navigation via link and then change bread crumbs to load and while loading just capitalize it
- [ ] Image show case scaling issue on resize or on button press?

- [ ] Break down code even further
- [ ] Tidy up code
- [ ] Change to next image rather than img
- [ ] Implement client side deletion for image

## Core Features Left to do

- [ ] Add form validation
- [ ] Implement error handling
- [ ] Set up testing framework
- [ ] Add documentation
- [ ] Add Breadcrumbs properly

- [ ] Reformat code into smaller componments and make it more maintainable

## Potential Improvements

- [ ] Add dark mode support
- [ ] Improve accessibility features
- [ ] Implement rate limiting
