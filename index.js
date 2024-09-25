
// card 1
const donationButtonOne = document.getElementById('donation-btn-1');
donationButtonOne.addEventListener('click', function () {
  const mainAmont = parseInt(document.getElementById('main-amont').textContent);
  const donationField = document.getElementById('donation-1');
  const donation = parseInt(donationField.value);
  
  
  const donetedAmount = parseInt(document.getElementById('doneted-amount-1').textContent);

  if (donation > mainAmont || donation < 1  
  ) { return window.alert("Invalid input") };
  
  if (donation < mainAmont || donation > 1 ) {
    return window.alert("Donation Success")
  }

  const newBlance = mainAmont - donation;
  const newDonatedAmount = donation + donetedAmount;
  

 document.getElementById('main-amont').textContent = newBlance;
  document.getElementById('doneted-amount-1').textContent = newDonatedAmount;
  
})


// card 2
 const donationButtonTwo = document.getElementById('donation-btn-2');
donationButtonTwo.addEventListener('click', function () {
  const mainAmont = parseInt(document.getElementById('main-amont').textContent);
  const donationField = document.getElementById('donation-2');
const donation = parseInt(donationField.value);
  const donetedAmount = parseInt(document.getElementById('doneted-amount-2').textContent);

  if (donation > mainAmont || donation < 1  
  ) { return window.alert("Invalid input") };
  
  if (donation < mainAmont || donation > 1 ) {
    return window.alert("Donation Success")
  }

  const newBlance = mainAmont - donation;
  const newDonatedAmount = donation + donetedAmount;

 document.getElementById('main-amont').textContent = newBlance;
 document.getElementById('doneted-amount-2').textContent = newDonatedAmount;
})


// card 3
 const donationButtonThree = document.getElementById('donation-btn-3');
donationButtonThree.addEventListener('click', function () {
  const mainAmont = parseInt(document.getElementById('main-amont').textContent);
  const donationField = document.getElementById('donation-3');
const donation = parseInt(donationField.value);
  const donetedAmount = parseInt(document.getElementById('doneted-amount-3').textContent);

  if (donation > mainAmont || donation < 1  
  ) { return window.alert("Invalid input") };
  
  if (donation < mainAmont || donation > 1 ) {
    return window.alert("Donation Success")
  }
  const newBlance = mainAmont - donation;
  const newDonatedAmount = donation + donetedAmount;

 document.getElementById('main-amont').textContent = newBlance;
 document.getElementById('doneted-amount-3').textContent = newDonatedAmount;
})


// history tab

const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function () {
  
  historyTab.classList.add(
    'bg-lime-200',
    'text-black',
    'font-semibold',
    'py-2', 'px-4',
    'rounded-lg',
    'hover:bg-lime-300');
  
  donationTab.classList.remove(
      'bg-lime-200',
      'hover:bg-lime-300',
    
    
    
    );
  donationTab.classList.add(
    
   'bg-white',
    'hover:bg-gray-200'
    
    );

  const mainBody = document.getElementById('main-body');
  mainBody.classList.add('hidden')
  
})

