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

# Install serve globally for serving static files
RUN npm install -g serve@14.2.1

# Expose port 4321
EXPOSE 4321

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:4321/ || exit 1

# Start the application with serve command
CMD ["serve", "dist", "-l", "4321", "-s"]