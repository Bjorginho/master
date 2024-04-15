# Use the official Node.js 16 image.
# Check https://hub.docker.com/_/node to see all available Node.js versions.
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json, package-lock.json/yarn.lock
# If you're using npm, you might need to replace `yarn.lock` with `package-lock.json`
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy local code to the container's workspace.
COPY . .

# Build the application for production.
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Run the app using Node.js
CMD ["npm", "start"]
