FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files to the container.
COPY package.json yarn.lock /app/

# Install dependencies
RUN yarn install

# Copy the rest of the application files to the container
COPY . .

# Copy the .env file to the container
COPY .env .

# Expose the development server port
EXPOSE 4000

# Start the application
CMD [ "yarn", "dev" ]