import React from 'react';
import './home.css';
import Card from './Components/Card';
import TopBar from './Components/Top_bar';


const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="home" id="home">
        {/* <img className="main_page_bg" src="src\Images\main_page_back.jpg" alt="haha" /> */}
        <h1 className="new">NEW ARRIVALS👌</h1>
        <h1 className="greetings">All the new arrivals here</h1>
      </div>

      <div className="men" id="men">
        <div className="mid">
          <h1 className="men_popular">POPULAR IN MEN</h1>
          <div className="flex space-x-4 ml-20 mr-20 mt-16">
            <Card
              name="T-SHIRTS"
              description=""
              imageUrl="src/Images/adidas.png"
              link="/men_tees"
            />
            <Card
              name="SHORTS"
              description=""
              imageUrl="src/Images/shorts_men.png"
              link="/men_tees"
            />
            <Card
            link="/men_tees"
              name="SHIRTS"
              description=""
              imageUrl="src/Images/shirt.png"
            />
            <Card
            link="/men_tees"
              name="SHOES"
              description=""
              imageUrl="src/Images/shoes.png"
            />
          </div>
        </div>
      </div>

      <div className="women" id="women">
        <div className="mid">
          <h1 className="women_popular">POPULAR IN WOMEN</h1>
          <div className="flex space-x-4 ml-20 mr-20 mt-16">
            <Card
            link="/men_tees"
              className="card"
              name="TOPS"
              description=""
              imageUrl="src/Images/top.png"
            />
            <Card
            link="/men_tees"
              className="card"
              name="KURTAS"
              description=""
              imageUrl="src/Images/kurta.png"
            />
            <Card
            link="/men_tees"
              className="card"
              name="HEELS"
              description=""
              imageUrl="src/Images/heels.png"
            />
            <Card
            link="/men_tees"
              className="card"
              name="SAREES"
              description=""
              imageUrl="src/Images/saree.png"
            />
          </div>
        </div>
      </div>

      <div className="kid" id="kids">
        <div className="mid">
          <h1 className="kid_popular">POPULAR IN KIDS</h1>
          <div className="flex space-x-4 ml-20 mr-20 mt-16">
            <Card
              className="card"
              name="FROCKS"
              link="/men_tees"
              description=""
              imageUrl="src/Images/frock.png"
            />

            <Card
            link="/men_tees"
              className="card"
              name="TSHIRTS"
              description=""
              imageUrl="src/Images/tshirt.png"
            />
            <Card
            link="/men_tees"
              className="card"
              name="SHOES"
              description=""
              imageUrl="src/Images/shoes_k.png"
            />
            <Card
            link="/men_tees"
              className="card"
              name="JEANS"
              description=""
              imageUrl="src/Images/jeans.png"
            />
          </div>
        </div>
      </div>

      <div className="about" id="about">
        <h2>Contact Information</h2>
        <p>Email: example@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        {/* <!-- You can add more contact details here as needed --> */}
      </div>
    </div>
  );
};

export default Home;
