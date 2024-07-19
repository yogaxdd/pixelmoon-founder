document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('balance').textContent = `$${data.balance}`;
            document.getElementById('miner').textContent = data.miner;
            document.getElementById('pickaxe').textContent = data.pickaxe;
            document.getElementById('perHours').textContent = data.perHours;
        });
});

let mining = false;

function toggleMining() {
    mining = !mining;
    document.getElementById('toggle-mining').textContent = mining ? 'start mining' : 'start mining';
}

function withdraw() {
    const balance = parseFloat(document.getElementById('balance').textContent.slice(1));
    const amount = parseFloat(document.getElementById('amount').value);

    if (amount < 1) {
        alert("Minimum withdrawal amount is $1");
        return;
    }

    if (amount > balance) {
        alert("Insufficient balance");
        return;
    }

    const gasFee = (amount * 0.01).toFixed(2);
    document.getElementById('gas-fee').textContent = gasFee;

    // Here you can add functionality to process the withdrawal
    alert(`Withdrawing $${amount} with a gas fee of $${gasFee}`);
    document.getElementById('balance').textContent = `$${(balance - amount).toFixed(2)}`;
}
