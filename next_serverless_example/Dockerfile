# Dockerfile

FROM node:12 as base
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

ENV CONTINUOUS_INTEGRATION=1
ENV NODE_ENV=production

COPY . .
RUN npm run build

# next 의 default port 는 3000 번 이지만 beanstalk 의 default port 는 8081 이기 때문에
# 간편하게 맞추고자 8081 로 실행합니다.
EXPOSE 8081 
CMD [ "npm", "start" ]