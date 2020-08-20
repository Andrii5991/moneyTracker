import React, { Component } from "react";

class InputBudget extends Component{
    render() {
        return (
            <div className="card card-body mb-3">
                <label>Your Budget</label>
                <form>
                    <input
                        className="form-control"
                        type="number"
                    />
                    <button className="btn btn-dark btn-block">Submit</button>
                </form>
            </div>
        );
    }
}

export default InputBudget;