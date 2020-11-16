import React, {Component} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Register from './components/Register';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    
    return (
     
      <div className="App">
       <Router>
            <Navbar />
            <Switch>
              {/* <Route path="/" exact component={Home}/> */}
              <Route path="/about" component={About}/>
              <Route path="/shop" component={Shop}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/register" component={Register}/>
            </Switch>         
       </Router>
       
      
    <Sidebar 
        title   = {this.props.sidebarTitle} 
        rightnow={this.props.now}
        menu    ={this.props.menu}
        />
        <Main menu={ this.props.menu } />
      
        
        <div className="footer">
        <Footer /> 
        </div>
        
         
      </div>

    )
  }
}


export default App


App.defaultProps = {
  sidebarTitle: 'Daily Menu',
  now:  new Date   ().toString()
    .split(" ")
    .slice(0, 4)
    .join(" "),
    menu: {
      coffee: [
        { id: 1, name: 'Espresso', price: 4.00},
        { id: 2, name: 'Cafe Latte',            price: 5.90},
        { id: 3, name: 'Drip Coffee',           price: 3.90},
        { id: 4, name: 'Ice Coffee',            price: 2.90},
        { id: 5, name: 'Cold Brew Coffee',      price: 4.90},
        { id: 6, name: 'Cafe Americano',        price: 3.90},
        { id: 7, name: 'Cappuchino',            price: 4.90},
        { id: 8, name: 'Cafe Mocha',            price: 5.50},
      ],
      bread: [
        {  id: 9, name: 'Blueberry Scone',       price: 3.90},
        {  id: 10, name: 'Pumpkin Muffin',        price: 2.90},
        {  id: 11, name: 'Cinnamon Raisin Bagel', price: 2.90},
      ],
      
    }
}


//---Main component should display the current orders
//---and also give the users the ability to select items on the menu
class Main extends Component {
  state = {
    orders: [],
    menuValue: 'none',
    menuItemValue: 'none',
    menuItemAmountValue: 1
  }

  renderOrder = (order, idx) => <OrderItem order={order} key={idx} />

  onMenuSelected = ({target}) => this.setState({ menuValue: target.value })

  onMenuItemSelected = ({target}) => this.setState({ menuItemValue: target.value})

  handleItemAmountChange = ({target}) => this.setState({ menuItemAmountValue: target.value })

  renderMenuSelect = () => {
    const keys = Object.keys(this.props.menu)
    return (
      <select value={ this.state.menuValue} onChange={this.onMenuSelected}>
        <option value={'none'}>Select Menu</option>
        {
          keys.map((category, idx) => {
            return (
             <option value={category} key={idx}>{category} </option>
            )
          })
        }
      </select>
    )
  }
  renderMenuItemSelect = () => {
    const { menuValue } = this.state
    if ( menuValue === 'none' ) return null
    const items = this.props.menu[menuValue]

    return (
      <select 
      value={this.state.menuItemValue} 
      onChange={ this.onMenuItemSelected }
      >
      <option value={'none'}>Select Item</option>
      {
        items.map((item) => {
          return (
            <option value={ item.name} key={ item.id }>
              { item.name } - { item.price.toFixed(2) }
            </option>
          )
        })
      }
        
      </select>
    )
  }

  renderMenuItemAmountInput = () => {
      if ( this.state.menuItemValue === 'none') return null

      return (
        <input 
      value={this.state.menuItemAmountValue }
      onChange={ this.handleItemAmountChange }
      />
      )    
  }

  handleOrderSubmit = () => {
    const {  menuItemValue, menuItemAmountValue, orders } = this.state

    const newOrder = {
        customer: `Item #${ orders.length+1 }`,
        items: [
          { name: menuItemValue, amt: menuItemAmountValue }
        ]
    }

     this.setState((prevState) => {
       return {
         orders: [...prevState.orders, newOrder],
         menuValue: prevState.menuValue,
         menuItemValue: 'none',
         menuItemAmountValue: 1

       }
     })
  }
  render() {
    return (
      <div className="main">
        <div>
          <h2>Orders</h2>
          <hr />
        </div>
        
        <ul>
          {
            this.state.orders.length ?
            this.state.orders.map((order, idx) => this.renderOrder(order, idx))
            :
            <li key={-1}>No orders yet!</li>
          }
        </ul>
        <div className="select-menu-item">
           <hr />
           <p>
             Enter item here: &nbsp;
              {this.renderMenuSelect() }
              {this.renderMenuItemSelect()}
              {this.renderMenuItemAmountInput()}
              {
                this.state.menuItemValue !== 'none' &&
                <button 
                style={{ cursor: 'pointer' }}
                onClick={this.handleOrderSubmit}
                >
                  Order
                  </button>
              }
                
           </p>
        </div>
      </div>
    )
  }
}

function OrderItem( props ){
  const { customer, items } = props.order

  return (
    <li className="order-item">
      <strong>{ customer }</strong>
      <ul>
        {
          items.map((order, idx) => {
            return (
              <li className="menu-item" key= { idx }>
                  <span>{ order.amt } - </span> { order.name }
              </li>
            )
          })
        }
      </ul>
      <br/>
    </li>
  )
}

function Sidebar(props){
  return (
    <div className="sidebar">
      <h2>{ props.title }</h2>
      <p>Last updated: { props.rightnow }</p>
      <hr />
      <p><em>Coffee</em></p>
      <ul>
        {
          props.menu.coffee.map((item, idx) => {
            return (
              <li className="menu-item" key={idx}>
                  {item.name} <span>${item.price.toFixed(2)}</span>
              </li>
            )
          })
        }
      </ul>
      <p><em>Bread</em></p>
      <ul>
        {
          props.menu.bread.map((item, idx) => {
            return (
              <li className="menu-item" key={idx}>
                  {item.name} <span>${item.price.toFixed(2)}</span>
              </li>
            )
          })
        }
      </ul>
      
    </div>
  )
}
function Footer(){

  return (

    <div className="footer">
      <h5>&copy; 2020 Coffee Shop Inc</h5>
    </div>
  )
}

