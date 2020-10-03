
#!/usr/bin/env bash

# GPG key for docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Add docker to apt-get
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

sudo apt-get update

# Install utilities
sudo apt-get install -y build-essential unzip git python3-pip mysql-client

# Set Timezone if needed
#sudo timedatectl set-timezone America/New_York

# Install node 12
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# Python package manager so we can install latest aws-cli
sudo apt-get install -y

# Upgrade Pip
sudo pip3 install --upgrade pip3

# Install AWS CLI
# sudo pip install awscli

# Docker
sudo apt-get install -y docker-ce

# Setup docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)"  -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

# setup permissions for vagrant to access docker (runs on tcp owned by root)
sudo groupadd docker
sudo usermod -aG docker vagrant

# Fix npm permissions issues (un-privileged provisioner)
sudo chown -R 1000:1000 "/home/vagrant/.npm"

# global NPM packages
sudo npm install -g typeorm @angular/cli typescript tslint nodemon ts-node @nestjs/cli

# Fix npm permissions issues (un-privileged provisioner)
sudo npm i -g npm
sudo chown -R $USER:$(id -gn $USER) /home/vagrant/.config
sudo chown -R 1000:1000 "/home/vagrant/.npm"

cd /var/www/api
npm install
cd /var/www/client
npm install

# Copy environment files from example if it doesn't already exist
cp -n /var/www/api/.env.example /var/www/api/.env

# Create a MySql docker container w/ a persistent volume that restarts with the VM automatically
sudo docker run --name test -p 3306:3306 -d --restart always -e MYSQL_ALLOW_EMPTY_PASSWORD=true -e MYSQL_DATABASE=test -v ~/home/docker/mysql-data:/var/lib/mysql mysql:8.0

# Wait for mysqld to initialize
while ! mysqladmin -u root -h 0.0.0.0 ping --silent ; do
    echo "Waiting for database connection..."
    sleep 2
done
