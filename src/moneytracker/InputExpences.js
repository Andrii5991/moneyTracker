import React, { Component } from "react";

class InputExpences extends Component{
    render() {
        return(
            <div className="card card-body">
                <form>
                    <label>Expences</label>
                    <input
                        className="form-control"
                        name="expenceTitle"
                    />
                    <label>Amount</label>
                    <input
                        className="form-control"
                        name="amount"
                    />
                    <button className="btn btn-dark btn-block mt-3">Submit</button>
                </form>
            </div>
        );
    }
}

export default InputExpences;