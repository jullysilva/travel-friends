# Use the official Node.js runtime as the parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 5000 to the outside world
EXPOSE 5000

# Start the application when the container starts
CMD ["npm", "start"]
