#!/bin/bash

# Build the docker container
docker build -t electron-cert-test .

# allow access from localhost
xhost + 127.0.0.1

docker run -e DISPLAY=host.docker.internal:0 -it --rm electron-cert-test /bin/bash

