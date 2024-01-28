function showDetails(name, price) {
    const itemDetails = document.getElementById('item-details');
    const itemName = document.getElementById('item-name');
    const itemPrice = document.getElementById('item-price');

    itemName.innerText = `Name: ${name}`;
    itemPrice.innerText = `Price: $${price}`;

    itemDetails.style.display = 'block';

    generateQRCode(`${name} - $${price}`);
}


function generateQRCode(data) {
    const qrCodeContainer = document.getElementById('qr-code');
    
    // Use a QR code library to generate QR code based on the data
    // For example, you can use a library like 'qrcode.js' or 'jsQR'
    // Include the library in your project for this to work
    // Example using 'qrcode.js':
    // qrCodeContainer.innerHTML = '';
    // const qr = new QRCode(qrCodeContainer, data);
    // Note: You need to include the 'qrcode.js' library for this to work
}
