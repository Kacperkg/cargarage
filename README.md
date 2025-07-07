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

## Core Features

- [ ] ADD PROTECT ROUTE - make a folder called (protected) and add layout.tsx to only allow signed in users see anything else than landing page
- [x] Implement user authentication
- [x] Set up database schema
- [ ] Create API endpoints
- [ ] Design and implement UI components
- [ ] Add form validation
- [ ] Implement error handling
- [ ] Set up testing framework
- [ ] Add documentation
- [ ] Add Breadcrumbs properly

- [x] Add dream car functionality
- [x] Display user's cars
- [x] Track miles logged
- [x] Calculate total horsepower
- [x] Implement wishlist (dream cars)
- [x] Add quick action buttons
- [x] Add dream car
- [x] Add project car

## Bugs to Fix

- [ ] Move useEffect from dashboard load
- [ ] Fix when i clicking on mycar or dreamcar it will show you car not found (fix user detection if the user is the owner)

## Potential Improvements

- [ ] Add dark mode support
- [ ] Improve accessibility features
- [ ] Implement rate limiting
