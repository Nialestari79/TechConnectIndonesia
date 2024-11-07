document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const interest = document.getElementById('interest').value;

    if (name === '' || email === '' || phone === '' || interest === '') {
        showTooltip();
    } else {
        alert('Form submitted successfully!');
    }
});

function showTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'block';
    setTimeout(() => {
        tooltip.style.display = 'none';
    }, 3000);
}
