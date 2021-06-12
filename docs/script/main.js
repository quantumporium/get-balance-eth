// see if web3 defined
window.addEventListener('load', function () {
    if(typeof web3 !== 'undefined')
    {
        console.log('web3 detected !' + web3.currentProvider.constructor.name)
        window.web3 = new Web3(web3.currentProvider);
    } 
    else 
    {
        // if not, connect to http provider
        console.log('no web3 detected... using http provider');
        const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/24e7bac620214d7ca3f17532122edcf9"));
        window.web3 = new Web3(new web3.providers.HttpProvider('https://mainnet.infura.io/v3/24e7bac620214d7ca3f17532122edcf9'));
    }
})


//getBalence() function
function getBalance() {
    var address, wei, balence;
    address = document.getElementById("address").value;
    

    try
    {
        web3.eth.getBalance(address, function (error, wei )
        {       
            if(!error)
            {   
                var balence = web3.utils.fromWei(wei, "ether");

                document.getElementById("ouput").innerHTML = balence + 'ETH';
            };
        })
    }
    catch (err) 
    {
        document.getElementById("output").innerHTML = err;
    }
}