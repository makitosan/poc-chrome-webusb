console.log('this is webusb.js');

const auth = () => {
  const vendorId = 0x0d28; // ここにVendor ID
  const productId = 0x0204; // ここにProduct ID
  const serialNumber = 'XXXXXXXX'; // ここにSerial Number
  navigator.usb.requestDevice({ 'filters': [
      { 'vendorId': vendorId, 'productId': productId }
    ]
  }).then(device => {
    console.log(device.vendorId);
    console.log(device.productId);
    console.log(device.serialNumber);
    // invoke ivent for serial number
    var event = new CustomEvent('bitsensei.usb_serial', {'detail': {'serialNumber': device.serialNumber}});
    document.dispatchEvent(event);
    // return device.open;
  }).catch(error => {
    console.log(error);
  });
}

let button = document.getElementById('button');
button.addEventListener('click', function(event) {
  auth();
});
