# -*- mode: ruby -*-
# vi: set ft=ruby :


Vagrant.configure("2") do |config|

    config.vagrant.plugins = ["vagrant-notify-forwarder"]


    config.vm.box = "bento/ubuntu-16.04"
    config.vm.network "private_network", ip: "192.168.33.38"
    config.vm.hostname = "health-check"

    # Angular
    config.vm.network "forwarded_port", guest: 4200, host: 4200

    # NestJS
    config.vm.network "forwarded_port", guest: 3000, host: 3000

    # NFS mount the shared folder
    config.vm.synced_folder ".", "/var/www", :nfs => { :mount_options => ["dmode=777","fmode=666"] }

    # Only uncomment the below if NFS does not work for you above (be sure to comment out above line also)
    #config.vm.synced_folder ".", "/var/www", :mount_options => ["dmode=777", "fmode=666"]

    config.vm.provision :shell, privileged: false, :path => "provision.sh"

    config.vm.provider "virtualbox" do |v|
        v.memory = 4096
        v.cpus = 2
    end

end