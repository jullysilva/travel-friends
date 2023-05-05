# Use the official Node.js runtime as the parent image
FROM node:14.16.1-alpine3.13 as build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Use an nginx image as the final image
FROM nginx:1.21.0-alpine

# Copy the build directory from the previous stage to the nginx image
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
