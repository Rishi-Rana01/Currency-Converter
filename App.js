const BASE_URL = "https://v6.exchangerate-api.com/v6/296ef089230d4fb24f46c987/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || isNaN(amtVal) || amtVal <= 0) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/${fromCurr.value}`;
  try {
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.conversion_rates[toCurr.value];

    let finalAmount = (amtVal * rate).toFixed(2);
    window.firebasePush(window.firebaseRef(window.firebaseDB, "conversions"), {
      from: fromCurr.value,
      to: toCurr.value,
      amount: amtVal,
      result: finalAmount,
      date: new Date().toISOString()
    });

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rate. Please try again.";
    console.error("Fetch error:", error);
  }
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};
const loadHistory = () => {
  const refPath = window.firebaseRef(window.firebaseDB, "conversions");
  window.firebaseOnValue(refPath, (snapshot) => {
    const data = snapshot.val();
    const historyContainer = document.querySelector(".history");
    historyContainer.innerHTML = "<h3>Conversion History</h3>";

    if (data) {
      const table = document.createElement("table");
      table.innerHTML = `
        <tr>
          <th>Amount</th>
          <th>From</th>
          <th>To</th>
          <th>Result</th>
          <th>Time</th>
        </tr>
      `;
      Object.values(data)
        .reverse()
        .slice(0, 10)
        .forEach((entry) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${entry.amount}</td>
            <td>${entry.from}</td>
            <td>${entry.to}</td>
            <td>${entry.result}</td>
            <td>${new Date(entry.date).toLocaleString()}</td>
          `;
          table.appendChild(row);
        });

      historyContainer.appendChild(table);
    } else {
      historyContainer.innerHTML += "<p>No conversions yet.</p>";
    }
  });
};
window.addEventListener("load", () => {
  loadHistory();
});

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
