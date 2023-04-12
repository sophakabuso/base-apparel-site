// Get the logo elements
const svgLogo = document.getElementById('svglogo');
// Create a logo image element and set its source
const logo = document.createElement("img");
logo.src = "./assets/images/logo.svg";
// Append the logo element to the logo web container
svgLogo.appendChild(logo);


// Get the image elements
const svgImage = document.getElementById('svgimage');
// Create a new image element and set its source
const image = document.createElement('img');
image.setAttribute("width", "450"); // Set the width to 200 pixels
image.setAttribute("height","610");
image.src = './assets/images/hero-desktop.jpg';
// Append the image element to the images web container
svgImage.appendChild(image);



//Get the contennt element
const svgContent = document.getElementById('svgcontent'); 
//Creat the content element
const content = document.createElement('content');
//ADD the content
content.innerHTML = `<p id='one'>WE'RE</p><p id='two'>COMING</p><p id='three'>SOON</p>
<p id='four'>Hello fellow shoppers! We're currently building our own new</br>
 fashion stores.Add your email below to stay up-to-date with</br>
 announcements and our launch deals.
</p>`
svgContent.appendChild(content);


const form = document.querySelector('#email-form');
const emailInput = document.querySelector('input[type=email]');
const sendReportBtn = document.querySelector('#send-report-btn');

sendReportBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Invalid email address');
  } else {
    form.submit();
  }
});
// Get the icon element
const svgIcon = document.getElementById('svgicon');
// Create a icon image element and set its source
const icon = document.createElement("img");
icon.src = "./assets/images/icon-arrow.svg";
// Append the logo element to the logo web container
svgIcon.appendChild(icon);
