Currency Converter
🔗 Link : https://currencyconverterapp-30dbf.firebaseapp.com

A simple web-based currency converter application that allows users to convert amounts between different currencies using real-time exchange rates. The application features a modern UI with flag icons for currencies, conversion history stored in Firebase, and responsive design.
Features

Convert amounts between various currencies using the ExchangeRate-API.
Displays country flags for selected currencies.
Stores conversion history in Firebase Realtime Database.
Responsive design with a gradient-themed UI, hover effects, and animations.
Input validation to ensure valid amounts.
Displays the latest conversion rates and historical conversions.

Technologies Used

HTML: Structure of the application.
CSS: Styling with custom properties, gradients, and responsive design.
JavaScript: Logic for fetching exchange rates, updating flags, and handling Firebase integration.
Firebase: Realtime Database for storing conversion history.
ExchangeRate-API: Provides real-time currency exchange rates.
FlagsAPI: Provides flag images for currencies.

File Structure
currency-converter/
├── index.html        # Main HTML file for the application
├── style.css        # CSS for styling the application
├── codes.js         # JavaScript for currency code to country code mapping
├── App.js           # Main JavaScript logic for the application
└── README.md        # Project documentation

Setup Instructions

Clone the Repository:
git clone https://github.com/Rishi-Rana01/currency-converter.git


Firebase Setup:

Create a Firebase project at Firebase Console.
Enable the Realtime Database.
Add your Firebase configuration to index.html in the <script> section (replace the placeholder Firebase SDK script).


ExchangeRate-API Key:

Sign up at ExchangeRate-API to get an API key.

Update the BASE_URL in App.js with your API key:
const BASE_URL = "https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest";




Serve the Application:

Host the files on a local server (e.g., using VS Code Live Server or any web server).
Alternatively, deploy to a hosting platform like GitHub Pages or Netlify.


Open the Application:

Open index.html in a browser to use the currency converter.



Usage

Enter the amount you want to convert.
Select the source and target currencies from the dropdown menus.
Click the "Get Exchange Rate" button to see the converted amount.
View the conversion history below the converter, which shows the last 10 conversions with timestamps.

Screenshots
To be added: Include screenshots of the application UI.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m "Add feature").
Push to the branch (git push origin feature-branch).
Create a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

ExchangeRate-API for currency data.
FlagsAPI for flag images.
Firebase for Realtime Database.

