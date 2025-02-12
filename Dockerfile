# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 (Next.js default port)
EXPOSE 3000

# Start the Next.js application in production mode
CMD ["npm", "run", "start"]
