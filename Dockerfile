# Use the official Node.js image as the base image
FROM node:16 AS dependencies

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm install --legacy-peer-deps

# Copy the project files to the container
COPY . .

# Install Webpack globally (optional)
RUN npm install -g webpack webpack-cli

# Build the project
RUN npm run build

# Use another stage to run the app
FROM node:16 AS runtime

WORKDIR /app

# Copy built files from the build stage
COPY --from=dependencies /app /app

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
