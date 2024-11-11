/*
let web3;
let userAccount;
let isConnected = false; // Track the connection state

document.getElementById('connectWalletBtn').addEventListener('click', () => {
    const walletOptions = document.getElementById('walletOptions');
    if (isConnected) {
        disconnectWallet(); // If connected, disconnect
    } else {
        walletOptions.style.display = walletOptions.style.display === 'none' || walletOptions.style.display === '' ? 'flex' : 'none';
    }
});

// Function to update status
function updateStatus(message, isSuccess = false, color) {
    const statusDiv = document.getElementById('status');
    statusDiv.innerText = message;
    statusDiv.style.color = color
    statusDiv.classList.toggle('success', isSuccess, 'green');
    statusDiv.classList.toggle('error', !isSuccess, 'red');
}

const disConnect = document.getElementById("disconnectButton");
disConnect.addEventListener('click', disconnectWallet);

function disconnectWallet() {
    web3 = null;
    userAccount = null;
    isConnected = false;
    updateStatus('Disconnected');
    // Hide profile icon and connect button
    document.getElementById('Profile').style.display = 'none'; // Hide profile icon
    document.getElementById('connectWalletBtn').style.display = 'inline-block'; // Show Connect Wallet button
    document.getElementById('walletOptions').style.display = 'none'; // Hide options after disconnect
    document.getElementById("profileMenu").style.display = 'none'
}

// Update the profile menu and icon visibility
function updateProfileInfo() {
    document.getElementById('walletAddress').innerText = userAccount;
    document.getElementById('Profile').style.display = 'inline'; // Show profile icon
    document.getElementById('connectWalletBtn').style.display = 'none'; // Hide Connect Wallet button
}

// Handle profile icon click to toggle profile menu
document.getElementById('Profile').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'flex';
});

// MetaMask Connection
document.getElementById('connectMetaMask').addEventListener('click', async () => {
    console.log('Attempting to connect to MetaMask...');
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            web3 = new Web3(window.ethereum); // Correct Web3 initialization
            const accounts = await web3.eth.getAccounts();
            userAccount = accounts[0];
            isConnected = true;
            // updateStatus(`MetaMask Connected`, true, 'green' );
            updateProfileInfo(); // Call to update profile info
            document.getElementById('walletOptions').style.display = 'none'; // Hide options after connecting
            console.log('MetaMask account:', userAccount);
        } catch (error) {
            console.error('MetaMask connection failed:', error, 'red');
            updateStatus('MetaMask connection failed. Check console for details.', false);
        }
    } else {
        alert('MetaMask is installed but not detected. Please ensure it is enabled in your browser.');
    }
   
});

// OKX Wallet Connection
document.getElementById('connectOKX').addEventListener('click', async () => {
    console.log('Attempting to connect to OKX Wallet...');
    if (typeof window.okxwallet !== 'undefined') {
        try {
            const okxProvider = window.okxwallet;
            await okxProvider.request({ method: 'eth_requestAccounts' });
            web3 = new Web3(okxProvider); // Correct Web3 initialization
            const accounts = await web3.eth.getAccounts();
            userAccount = accounts[0];
            isConnected = true;
            // updateStatus(`OKX Wallet Connected`, true, 'green');
            updateProfileInfo(); // Call to update profile info
            document.getElementById('walletOptions').style.display = 'none'; // Hide options after connecting
            console.log('OKX Wallet account:', userAccount);
        } catch (error) {
            console.error('OKX Wallet connection failed:', error, 'red');
            updateStatus('OKX Wallet connection failed. Check console for details.', false);
        }
    } else {
        alert('OKX Wallet is installed but not detected. Please ensure it is enabled in your browser.');
    }
});


// Disconnect the wallet
const quest1 = document.getElementById("questOne");
const quest2 = document.getElementById("questTwo");
const quest3 = document.getElementById("questThree");

// Show quest text when a quest card is clicked
quest1.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent the body click from firing
    document.getElementById("questTest1").style.display = 'block';
    document.getElementById("questTest2").style.display = 'none';
    document.getElementById("questTest3").style.display = 'none';
});

quest2.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent the body click from firing
    document.getElementById("questTest2").style.display = 'block';
    document.getElementById("questTest1").style.display = 'none';
    document.getElementById("questTest3").style.display = 'none';
});

quest3.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent the body click from firing
    document.getElementById("questTest3").style.display = 'block';
    document.getElementById("questTest1").style.display = 'none';
    document.getElementById("questTest2").style.display = 'none';
});

// Hide quest texts when clicking anywhere outside of the cards

document.body.addEventListener('click', e => {
    // If the click is not inside any quest card or quest item
    if (!e.target.closest('.quest-card') && !e.target.closest('.quest-item')) {
        document.getElementById("questTest1").style.display = 'none';
        document.getElementById("questTest2").style.display = 'none';
        document.getElementById("questTest3").style.display = 'none';
    
    }

    const profileMenu = document.getElementById('profileMenu');
    if (!e.target.closest('#profileMenu') && !e.target.closest('#Profile')) {
        profileMenu.style.display = 'none'; // Hide the profile menu
    }
});
*/
