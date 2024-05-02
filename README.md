# Project Management Application

## Overview

This is a project management application built with next.js. It allows users to manage tasks and projects efficiently. The application includes features such as authentication(demo), project overview, task management, task filters, search functionality with interactive dashboard.

# Setup Instructions

```bash
git clone <repository_url>
cd project-management-app
```

# Install Dependencies

```bash
npm install
```

# Run the Development Server

```bash
npm run dev
```

Access the application in your web browser at visit[http://localhost:3000].

# Run Production Server for smooth experience

```bash
npm run build
npm start
```

Access the application in your web browser at visit[http://localhost:3000].

# Architecture

## Folder Structure

```tree
├── public/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── components/
│   │   ├── dashboard/
│   │   ├── global.css/
│   │   ├── layout.tsx/
│   │   ├── page.tsx/
│   │   ├── .../
│   ├── interface/
│   │   ├── .../
│   ├── mockData/
│   │   ├── .../
│   ├── reactQuery/
│   │   ├── .../
│   ├── store/
│   ├── App.js
│   ├── index.js
├── package.json
```

## State Management

- Zustand for efficient state management.
- State modules manage application-level state.

## Styling

- Tailwind CSS.

## Third-Party Libraries

- Ant Design for enhanced interactivity.
- React Query for data fetching and caching.
