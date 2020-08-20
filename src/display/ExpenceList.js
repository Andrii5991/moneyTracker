import React, { Component } from "react";

class ExpenceList extends Component{
    render() {
        return(
            <div className="card nt-5">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default ExpenceList;