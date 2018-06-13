FROM node
EXPOSE 5005
ENV ELASTIC_USER *******
ENV ELASTIC_PASS *******
ENV NEWS_API_KEY *******
ENV AUTO_UPDATE_GITHUB 1
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json .
RUN npm install
ADD . .
RUN npm run build:production
CMD ["node", "app.js"]
