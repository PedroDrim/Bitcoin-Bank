FROM node:carbon

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
ADD . /app

RUN npm install gulp-cli -g && npm install gulp -D 
RUN npm install && npm run build
# If you are building your code for production
# RUN npm install --only=production

EXPOSE 5000
CMD [ "npm", "start" ]