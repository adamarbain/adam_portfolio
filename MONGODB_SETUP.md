# MongoDB Visitor Counter Setup

This project now uses MongoDB to store visitor count data instead of localStorage.

## Setup Instructions

### 1. MongoDB Atlas Setup
1. Create a MongoDB Atlas account at https://www.mongodb.com/atlas
2. Create a new cluster (free tier is sufficient)
3. Create a database user with read/write permissions
4. Get your connection string from the cluster

### 2. Environment Variables
1. Copy `env.example` to `.env.local`
2. Replace the `MONGODB_URI` with your actual MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

### 3. Database Structure
The visitor counter will automatically create a `visitors` collection with a single document containing:
- `count`: Number of visitors
- `lastUpdated`: Timestamp of last update
- `createdAt`: Document creation timestamp
- `updatedAt`: Document update timestamp

### 4. Features
- **Session-based counting**: Each browser session is counted only once
- **Real-time updates**: Visitor count is stored in MongoDB
- **Error handling**: Graceful fallback if database is unavailable
- **Loading states**: Shows loading and error states appropriately

### 5. API Endpoints
- `GET /api/visitors`: Fetch current visitor count
- `POST /api/visitors`: Increment visitor count

### 6. Deployment
When deploying to platforms like Vercel:
1. Add the `MONGODB_URI` environment variable in your deployment settings
2. Ensure your MongoDB Atlas cluster allows connections from your deployment platform's IP addresses

## Migration from localStorage
The new implementation automatically handles the transition from localStorage to MongoDB. The visitor count will start fresh in the database, but the component will work seamlessly. 