import React, {Component} from "react";
import PortfolioItems from "./portfolio-items";

export default class PortfolioContainer extends Component {
    render() {
        return (
            <div>
                <h2>Aprendiendo a aprender ;/</h2>

                <PortfolioItems />
            </div>
        )
    }
}