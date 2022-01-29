FROM node:16

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
  && apt-get -o Dpkg::Options::="--force-confold" install -y -q \
    libnss3-tools \
    libatk1.0 \
    libatk-bridge2.0 \
    libcups2 \
    libgtk-3-0 \
    libgbm1 \
    libasound2 \
  && rm -rf /var/lib/apt/lists/* \
  && useradd -m tesla \
  && mkdir -p /home/tesla/

COPY --chown=tesla main.js package.json /home/tesla/electron-cert-test/

WORKDIR /home/tesla/electron-cert-test

USER tesla

