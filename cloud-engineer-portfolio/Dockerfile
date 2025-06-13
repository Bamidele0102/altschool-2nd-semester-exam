# Use official Node.js LTS image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (including Tailwind CLI as a devDependency)
RUN npm install

# Copy the rest of the app
COPY . .

# Build Tailwind CSS
RUN npm run build:css

# Remove devDependencies for smaller image
RUN npm prune --omit=dev

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
