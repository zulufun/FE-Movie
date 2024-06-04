FROM node
WORKDIR /app
COPY package.json ./
COPY ./ ./
RUN npm install --force
EXPOSE 3000
CMD ["npm", "start"]
