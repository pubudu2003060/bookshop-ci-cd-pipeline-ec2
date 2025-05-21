# Stage 1: Build the React app
FROM node:18-alpine AS builder

# 1. Set working directory
WORKDIR /app

# 2. Copy package manifests, install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# 3. Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:stable-alpine

# 4. Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# 5. Copy your build output to NGINX’s html folder
COPY --from=builder /app/build /usr/share/nginx/html

# 6. (Optional) Add custom NGINX config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 7. Expose port 80 and run NGINX in foreground
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
