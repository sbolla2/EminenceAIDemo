FROM node:18-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY . .

RUN npm run build

#Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]