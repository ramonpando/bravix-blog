FROM node:18-alpine

# Install serve package globally
RUN npm install -g serve

# Copy the built static files
COPY dist/ /app

# Set working directory
WORKDIR /app

# Expose port 80
EXPOSE 80

# Start serve on port 80
CMD ["serve", "-s", ".", "-p", "80"]