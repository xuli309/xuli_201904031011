import React, { Component } from 'react'
// import "./css/product.css"


class ProductCategoryRow  extends Component{
    render(){
        return <tr>
            <th colSpan="2">{this.props.category}</th>
        </tr>
    }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
  }
}

class ProductTable extends Component{

    render(){
        const rows = [];
        
        let lastCategory = null;

        this.props.products.forEach((product,i) => {

            
            if (product.category !== lastCategory) {
                rows.push(
                  <ProductCategoryRow category={product.category} key={product.id} />
                );
            }

            rows.push(
                <ProductRow product={product} key={product.name} />
            );
            
            lastCategory = product.category;
        });

        return (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          );
    }
}

class SearchBar extends React.Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }
  




export default class ProductListDemo extends Component {
    constructor(props){
        super(props);
        this.state= {
            products: [
                {id:"1",category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {id:"2",category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {id:"3",category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {id:"4",category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {id:"5",category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {id:"6",category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
              ]
        }
    }
    render() {
        return (
            <div>
                <SearchBar />
                {<ProductTable products={this.state.products} />}
            </div>
        )
    }
}
