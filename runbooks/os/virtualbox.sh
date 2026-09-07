#TODO: RawDisk referencing USB
sudo VBoxManage createmedium disk --filename="/home/$USER/VirtualBox VMs/manlnx/usb.vmdk" --format=VMDK --variant=RawDisk -
-property RawDrive=/dev/sdb