import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Стілець сірий",
          img: "chair-grey.jpeg",
          desc: "lorem ipsum dolor sit amet",
          category: "chairs",
          price: "1000",
        },
        {
          id: 2,
          title: "Стіл",
          img: "table.jpeg",
          desc: "lorem ipsum dolor sit amet",
          category: "tables",
          price: "5000",
        },
        {
          id: 3,
          title: "Пуф трансформер",
          img: "puff-transformer.jpeg",
          desc: "lorem ipsum dolor sit amet",
          category: "chairs",
          price: "1500",
        },
        {
          id: 4,
          title: "Стіл чорний",
          img: "table-black.jpeg",
          desc: "lorem ipsum dolor sit amet",
          category: "tables",
          price: "6000",
        },
      ],
    };
    this.addToCard = this.addToCard.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToCard} />
        <Footer />
      </div>
    );
  }

  addToCard(item) {
    let isInCart = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInCart = true;
    });
    if (!isInCart)
      this.setState({ orders: [...this.state.orders, item] }, () => {});
  }
}
export default App;
