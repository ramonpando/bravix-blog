FROM busybox:latest

# Copy the built static files
COPY dist/ /www

# Create a simple HTTP server script
RUN echo '#!/bin/sh' > /serve.sh && \
    echo 'cd /www' >> /serve.sh && \
    echo 'while true; do' >> /serve.sh && \
    echo '  echo -e "HTTP/1.1 200 OK\r\n\r\n$(cat index.html)" | nc -l -p 80 -q 1' >> /serve.sh && \
    echo 'done' >> /serve.sh && \
    chmod +x /serve.sh

# Expose port 80
EXPOSE 80

# Start simple server
CMD ["/serve.sh"]