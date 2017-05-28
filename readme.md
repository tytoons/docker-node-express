Just an example of node express app with Docker.

** Run **
docker build --tag web-server:1.1 .
docker run -p 8000:8000 -d web-server:1.1
(I used 'docker logs #id#' to check if it ran)
