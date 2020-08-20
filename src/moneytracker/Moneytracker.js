import React from "react";
import InputBudget from "./InputBudget.js";
import InputExpences from "./InputExpences.js";
import DisplayBudget from "../display/DisplayBudget";

const Moneytracker = () => {
    return(
        <div className="row">
            <div className="col-lg-4">
                <InputBudget />
                <InputExpences />
            </div>
            <div className="col-lg-8">
                <DisplayBudget />
            </div>
        </div>
    )
}

export default Moneytracker;