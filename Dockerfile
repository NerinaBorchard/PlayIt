# # Stage 1: Build frontend
# FROM node:16 AS build

# # Set the working directory
# WORKDIR /app

# # Install dependencies for both frontend and backend
# COPY package*.json ./
# RUN npm install --legacy-peer-deps

# # Copy frontend source code
# COPY frontend/ frontend/
# # Build the frontend
# RUN npm run build --prefix frontend

# # Stage 2: Build backend
# FROM node:16 AS backend

# # Set the working directory
# WORKDIR /app

# # Copy backend source code and built frontend assets
# COPY backend/ backend/
# COPY --from=build /app/frontend/build /app/backend/public

# # Build the backend (if needed)
# RUN npm run build --prefix backend

# # Stage 3: Final stage
# FROM node:16

# # Set the working directory
# WORKDIR /app

# # Copy the backend application from the backend stage
# COPY --from=backend /app/backend /app/backend

# # Expose the port the app runs on
# EXPOSE 3000

# # Command to run the app
# CMD ["node", "/app/backend/server.js"]

# Stage 1: Build frontend
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy frontend source code
COPY frontend /app/frontend

# Build the frontend
WORKDIR /app/frontend
RUN npm run build

# Stage 2: Build backend
FROM node:16 AS backend

# Set the working directory
WORKDIR /app

# Copy backend source code and built frontend assets
COPY backend /app/backend
COPY --from=build /app/frontend/build /app/backend/public

# Install backend dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Stage 3: Final stage
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the backend application from the backend stage
COPY --from=backend /app/backend /app/backend

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "/app/backend/server.js"]
