import React, { Component } from "react";

const BudgetContext = React.createContext();

class BudgetProvider extends Component {
    render() {
        return(
            <BudgetContext.Provider>
                {this.props.children}
            </BudgetContext.Provider>
        )
    }
}

const BudgetConsumer = BudgetContext.Consumer;

export { BudgetProvider, BudgetConsumer}