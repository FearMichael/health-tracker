# -*- mode: ruby -*-
# vi: set ft=ruby :

required_plugins = %w( vagrant-fsnotify )
required_plugins.each do |plugin|
   system "vagrant plugin install #{plugin}" unless Vagrant.has_plugin? plugin
end

Vagrant.configure("2") do |config|

    config.vm.box = "bento/ubuntu-16.04"
    config.vm.network "private_network", ip: "192.168.33.38"
    config.vm.hostname = "health-check"

    config.vm.network "forwarded_port", guest: 4200, host: 4200
    config.vm.network "forwarded_port", guest: 3000, host: 3000

    # NFS mount the shared folder
    # config.vm.synced_folder nfsPath, "/var/www", :nfs => { :mount_options => ["dmode=777","fmode=666"] }

    # Only uncomment the below if NFS does not work for you above (be sure to comment out above line also)
    config.vm.synced_folder ".", "/var/www", :mount_options => ["dmode=777", "fmode=666"]

    config.vm.provision :shell, privileged: false, :path => "provision.sh"

    config.vm.provider "virtualbox" do |v|
        v.memory = 2048
        v.cpus = 2
    end

end