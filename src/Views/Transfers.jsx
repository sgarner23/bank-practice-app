import React from "react";
import { useState } from "react";
import { Account } from "./Account";

export const Transfers = ({ balances, setBalances }) => {
  const [accountSelected, setAccountSelected] = useState("savings");
  const [accountTransferingTo, setAccountTransferingTo] = useState("savings");

  const [inputAmount, setInputAmount] = useState(0);

  function onSubmitHandler() {
    console.log("Loren has handled me");
    let savingsBalance = +balances.savings;
    let checkingBalance = +balances.checking;

    if (accountSelected === "savings") {
      console.log("account selected equals savings");
      savingsBalance -= +inputAmount;
    } else {
      console.log("First else");
      checkingBalance -= +inputAmount;
    }

    if (accountTransferingTo === "savings") {
      console.log("second if");
      savingsBalance += +inputAmount;
    } else {
      console.log("second else");
      checkingBalance += +inputAmount;
    }

    console.log(savingsBalance, checkingBalance);
    setBalances({
      savings: savingsBalance.toFixed(2),
      checking: checkingBalance.toFixed(2),
    });
  }

  return (
    <div>
      <p>From:</p>
      <select
        name="account-names"
        id="accounts"
        value={accountSelected}
        onChange={(e) => setAccountSelected(e.target.value)}
      >
        <option value="savings">Savings</option>
        <option value="checking">Checking</option>
      </select>
      <p>To:</p>
      <select
        name="account-transfer-to"
        id="transfer-list"
        value={accountTransferingTo}
        onChange={(e) => setAccountTransferingTo(e.target.value)}
      >
        <option value="savings">Savings</option>
        <option value="checking">Checking</option>
      </select>

      <input
        type="number"
        placeholder="Amount: "
        value={inputAmount}
        onChange={(e) => setInputAmount(e.target.value)}
      />
      <button type="submit" onClick={onSubmitHandler}>
        Submit
      </button>
      <Account balances={balances}></Account>
    </div>
  );
};
