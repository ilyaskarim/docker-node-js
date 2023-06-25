# Use the latest node version
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 4000 to allow external access
EXPOSE 1300

# Start the application
CMD [ "node", "index.js" ]
