import React from "react";
import BalanceDisplay from "./BalanceDisplay";
import ExpenceList from "./ExpenceList";

const DisplayBudget = () => {
    return (
        <div className="card card-body">
            <h3 className="text-center">Your Badget info</h3>
            <BalanceDisplay />
            <ExpenceList />
            <h2>Expences List</h2>
        </div>
    );
}

export default DisplayBudget;