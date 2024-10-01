
# # Step 1: Base stage for installing dependencies
# FROM node:16 AS dependencies

# # Set the working directory at the root
# WORKDIR /app

# # Copy the root package.json and package-lock.json to install dependencies
# COPY package*.json ./

# # Install all dependencies
# RUN npm install --legacy-peer-deps

# # Step 2: Build the frontend
# FROM node:16 AS build-frontend

# # Set the working directory for the frontend
# WORKDIR /app/frontend

# # Copy all files from the app
# COPY --from=dependencies /app/node_modules /app/node_modules
# COPY frontend/ ./

# # Build the frontend using webpack
# RUN npm run build

# # Step 3: Build the backend
# FROM node:16 AS build-backend

# # Set the working directory for the backend
# WORKDIR /app/backend

# # Copy all files from the app
# COPY --from=dependencies /app/node_modules /app/node_modules
# COPY backend/ ./

# # Transpile the backend server with webpack and babel
# RUN npm run build

# # Step 4: Final stage for running the application
# FROM node:16

# # Set the working directory for the entire app
# WORKDIR /app

# # Copy the transpiled frontend and backend from the build stages
# COPY --from=build-frontend /app/frontend/public ./frontend/public
# COPY --from=build-backend /app/backend/dist ./backend/dist

# # Copy the root package.json for production dependencies
# COPY package*.json ./

# # Install only production dependencies
# RUN npm install --only=production --legacy-peer-deps

# # Expose the port your backend server will run on (default 3000)
# EXPOSE 3000

# # Start the backend server
# CMD ["npm", "start"]




# Step 1: Base stage for installing dependencies
FROM node:16 AS dependencies

# Set the working directory at the root
WORKDIR /app

# Copy the root package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install all dependencies
RUN npm install --legacy-peer-deps

# Step 2: Build the frontend and backend
FROM node:16 AS build-app

# Set the working directory at the root
WORKDIR /app

# Copy node_modules from the dependencies stage and the entire app
COPY --from=dependencies /app/node_modules /app/node_modules
COPY . .

# Build the app (frontend & backend)
RUN npm run build

# Step 3: Final stage for running the application
FROM node:16

# Set the working directory for the entire app
WORKDIR /app

# Copy the transpiled app from the build stage
COPY --from=build-app /app /app

# Install only production dependencies
RUN npm install --only=production --legacy-peer-deps

# Expose the port your backend server will run on (default 3000)
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
