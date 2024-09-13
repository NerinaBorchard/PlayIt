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






# Step 1: Base stage for building the frontend
FROM node:16 AS build-frontend

# Set the working directory for the frontend
WORKDIR /app/frontend

# Copy the package.json and package-lock.json to install dependencies
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy all frontend files
COPY frontend/ .

# Build the frontend using webpack
RUN npm run build

# Step 2: Base stage for building the backend
FROM node:16 AS build-backend

# Set the working directory for the backend
WORKDIR /app/backend

# Copy the package.json and package-lock.json for backend
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy all backend files
COPY backend/ .

# Transpile the backend server with webpack and babel
RUN npm run build

# Step 3: Final stage for running the application
FROM node:16

# Set the working directory for the entire app
WORKDIR /app

# Copy the transpiled frontend and backend from the build stages
COPY --from=build-frontend /app/frontend/public ./frontend/public
COPY --from=build-backend /app/backend/dist ./backend/dist

# Copy the backend package.json and package-lock.json to install production dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install --only=production

# Expose the port your backend server will run on (default 3000)
EXPOSE 3000

# Start the backend server
CMD ["node", "backend/dist/server.js"]

