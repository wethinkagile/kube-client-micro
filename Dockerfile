FROM node:8.9.4

# Install zip
RUN npm i
RUN apt install zip dos2unix -y

# copy source
RUN mkdir -p /opt/source
WORKDIR /opt/source

# copy the package json and cache installed files
ADD ./package.json /opt/source
RUN npm install

# start the build process
ADD . /opt/source
RUN npm run build

# line endings for msv
RUN unix2dos data/staticEtlContent/*

# start app
EXPOSE 3033
CMD ["npm", "start"]
