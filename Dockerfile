# Stage 1: Build the React app
FROM node:14 as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the built React app to Nginx's web directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to make the app accessible
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
