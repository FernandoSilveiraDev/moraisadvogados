FROM nginx:latest

COPY nginx/conf.d/ /etc/nginx/conf.d/

# Copiar arquivos do site
COPY nginx/html/ /usr/share/nginx/html/
