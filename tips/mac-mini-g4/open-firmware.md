# Mac Mini G4

Use USB 1 (left USB, right to Firewire port) full path address. "path"=

`
/pci@f2000000/usb@1b,1/disk@1
`

For Leopard installation:

`
devalias ud + <path>
`

and

`
boot ud:3, \\:tbxi
`
