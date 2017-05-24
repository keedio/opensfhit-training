FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/openshift-training


# Install app dependencies
ADD ./ /usr/src/openshift-training/

WORKDIR /usr/src/openshift-training
