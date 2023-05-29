# Use the official Node.js runtime as the parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code to the container
COPY . /app

# Expose port 3000 to the outside world
EXPOSE 3000

# Start nginx when the container starts
CMD ["npm", "start"]
