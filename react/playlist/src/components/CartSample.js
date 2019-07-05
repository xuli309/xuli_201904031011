import React, { Component } from 'react'

function Cart(props) {
    return (
        <table>
            <tbody>
                {props.data.map(d => (
                    <tr key={d.text}>
                        <td>{d.text}</td>
                        <td>
                            <button onClick={()=>props.minuCount(d)}>-</button>
                            {d.count}
                            <button onClick={()=>props.addCount(d)}>+</button>
                        </td>
                        <td>￥{d.price*d.count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default class CartSample extends Component {
    constructor(props){
        super(props);
        this.state = {
            goods:[
                {id:1,text:'web架构师1',price:666},
                {id:2,text:'web架构师2',price:666},
                {id:3,text:'web架构师3',price:666},
            ],
            text:'',//商品名
            cart:[]
        };

        //回调写法1:
        // this.addGood = this.addGood.bind(this);
    }
    //  回调写法2:
    addGood = () =>{
        this.setState(prevState=>({
            goods:[...prevState.goods,{id:4,text:prevState.text,price:666}]
        }))
    }

    textChange = (e) =>{
        this.setState({
            text:e.target.value
        })
    }

    addToCart(good){
        const newCart = [...this.state.cart];
        const idx = newCart.findIndex(c=>c.text === good.text);
        const item = newCart[idx];
        if(item){
            newCart.splice(idx,1,{...item,count:item.count+1})
        }else{
            newCart.push({...good,count:1})
        }
        this.setState({cart:newCart})
    }

    addCount = (item) =>{
        const newCart = [...this.state.cart];
        const idx = newCart.findIndex(c=>c.text === item.text);
        newCart.splice(idx,1,{...item,count:item.count+1})
        this.setState({cart:newCart})
    }

    minuCount = (item) =>{
        const newCart = [...this.state.cart]; console.log(newCart)
        const idx = newCart.findIndex(c=>c.text === item.text);
        newCart.splice(idx,1,{...item,count:item.count-1 < 0 ? 0:item.count-1})
        this.setState({cart:newCart})
    }

    render() {
        const title = this.props.title?<h1>{this.props.title}</h1>:null;
        // 循环： 将js对象数组转换为jsx数组
        const goods = this.state.goods.map(good=> (
            <li key={good.id}>
                {good.text}
                <button onClick={()=>this.addToCart(good)}>添加购物车</button>
            </li>
        ))

        return (
            <div>
                {/* 条件语句  */}
                {title}
                {/* 添加商品 */}
                <div>
                    <input type="text" value={this.state.text} onChange={(e)=>this.textChange(e)} />
                    {/* 回调函数写法3 */}
                    {/* <button onClick={(e)=>this.addGood(e)}>添加商品</button> */}
                    <button onClick={this.addGood}>添加商品</button>
                </div>
                {/* 列表渲染 */}
                <ul>{goods}</ul>
                {/* 购物车 */}
                <Cart data={this.state.cart} addCount={this.addCount} minuCount={this.minuCount}></Cart>
            </div>
        )
    }
}
