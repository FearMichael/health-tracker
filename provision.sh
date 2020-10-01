#!/usr/bin/env bash
# export DEBIAN_FRONTEND="noninteractive"

# GPG key for docker
# curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

#GPG key for Mongo
# sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

# Create list file for Mongo
# echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

# Add docker to apt-get
# sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

sudo apt-get update

# Install utilities and Mongo
# sudo apt-get install -y build-essential unzip git mongodb-org memcached jq

# Set Mongo to start on boot
#sudo systemctl enable mongod.service

# Start Mongo
#sudo service mongod start

# Set Timezone if needed
#sudo timedatectl set-timezone America/New_York

# Install node 8
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

# Python package manager so we can install latest aws-cli
# sudo apt-get install -y python-pip

# Upgrade Pip
# sudo pip install --upgrade pip

# Install AWS CLI
# sudo pip install awscli
# sudo apt-get --yes --force-yes install mysql-server
# sudo mysqladmin -u=root password 'root'

# Install global packages
sudo npm install -g nodemon ts-node @nestjs/cli @angular/cli typeorm

# Install Docker
# sudo apt-get install -y docker-ce

# Setup docker-compose
# sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)"  -o /usr/local/bin/docker-compose 

# Set execute permissions for docker-compose
# sudo chmod +x /usr/local/bin/docker-compose

# setup permissions for vagrant to access docker (runs on tcp owned by root)
# sudo groupadd docker
# sudo gpasswd -a vagrant docker

# Install Heroku command line
#sudo snap install --classic heroku

# Fix npm permissions issues (un-privileged provisioner)
sudo npm i -g npm
sudo chown -R $USER:$(id -gn $USER) /home/vagrant/.config

cd /var/www/api
npm install
cd /var/www/client
npm install

# Copy environment file from example if it doesn't already exist
cp -n .env.example .env