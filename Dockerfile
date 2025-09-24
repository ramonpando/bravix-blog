FROM httpd:2.4-alpine

# Copy the built static files
COPY dist/ /usr/local/apache2/htdocs/

# Create simple Apache config
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["httpd-foreground"]