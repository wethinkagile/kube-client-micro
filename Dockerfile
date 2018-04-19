FROM node:latest

# Install npm modules
RUN npm i

# copy source
RUN mkdir -p /opt/source
WORKDIR /opt/source

# copy the package json and cache installed files
ADD ./package.json /opt/source
RUN npm install

# start app
EXPOSE 80
CMD ["npm", "start"]
