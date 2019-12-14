FROM node:10
WORKDIR /api
COPY package*.json /api/
RUN npm install
COPY . /api/
EXPOSE 8000
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
RUN chmod +x /wait
CMD /wait && npm start