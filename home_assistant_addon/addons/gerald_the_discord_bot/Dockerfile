ARG BUILD_FROM
FROM $BUILD_FROM

ENV LANG C.UTF-8


RUN \ 
    apk add --no-cache \
        nodejs \
        npm \
        unzip

# Copy data for add-on
COPY *.zip /
RUN unzip *.zip && rm *.zip

COPY run.sh /
RUN chmod a+x /run.sh


CMD [ "/run.sh" ]