let total = 0;

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseInt(document.getElementById('itemPrice').value);
    
    if (!itemName || isNaN(itemPrice)) {
        alert('Please enter valid item details.');
        return;
    } else {
        total += itemPrice;
        document.getElementById('total').textContent = total;
        alert(`Item '${itemName}' added. Total: ${total} INR`);
        document.getElementById('itemName').value = '';
        document.getElementById('itemPrice').value = '';
    }
}
