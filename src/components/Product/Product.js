import React from "react";
import "./product.css"
import avatar from "./images/ninja.jpg"

export class Product extends React.Component {
    render() {
        return (

            <section id="product">

                <div className="header">

                    <input type="submit" name="" value="PRODUCTS" className="medButton" />

                    <input type="submit" name="" value="EXPENSES" className="mediumButton" />

                    <p className="fullname">Marko Razmovski</p>

                    <img className="ninja" src="avatar" alt="" />

                </div>

                <select className="select-products">
                    <option value="Year">Year</option>
                    <option value="Highest prize">highest prize</option>
                    <option value="Lowest prize">Lowest prize</option>
                    <option value="Latest Purchraces">Latest Purchraces</option>
                </select>

                <p className="filter">Filter:</p>

                <h1 className="heading">Products</h1>

                <table className="table" >
                <tr className="fisrtRow">
                    <th>Product Name</th>
                    <th>Product Type</th>
                    <th>Product Description</th>
                    <th>Purchrase Date</th>
                    <th>Product Price</th>
                    <th>Emoji</th>
                </tr>

                <tr className="tableRow">
                    <td>Coca-Cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>75</td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-Cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>75</td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-Cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>75</td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-Cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>75</td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-Cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>75</td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-Cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>75</td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-Cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>75</td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-Cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>75</td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-Cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>75</td>
                </tr>
            </table>

                <div className="fixed-buttons">

                    <input type="submit" className="fixed-green-buttons" value="NEW CALCULATION" />

                    <input type="submit" className="fixed-gray-buttons" value="NEW PRODUCT" />

                </div>
            </section>

        );
    };
};