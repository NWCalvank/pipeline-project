FROM node:11.1.0

# Create app directory
WORKDIR /app

# Copy config files
COPY vue.config.js ./
COPY tsconfig.json ./
COPY postcss.config.js ./
COPY babel.config.js ./
COPY .browserslistrc ./

# Install app dependencies
COPY package*.json ./

RUN npm ci

EXPOSE 8080

CMD ["npm", "run", "serve"]
