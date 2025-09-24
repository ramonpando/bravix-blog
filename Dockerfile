FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Install serve to serve static files
RUN npm install -g serve

# Expose port
EXPOSE 4321

# Start the application
CMD ["serve", "dist", "-l", "4321"]