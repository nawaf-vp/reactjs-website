import React from "react";
import "../styles/Home.scss";
import Carousel from 'react-bootstrap/Carousel'

// images
import carousel01 from "../images/carousel-01.jpg";
import carousel02 from "../images/carousel-02.jpg";
import carousel03 from "../images/carousel-03.jpg";
import carousel04 from "../images/carousel-04.jpg";
import carousel05 from "../images/carousel-05.jpg";


const Home = () => {
  return (
    <>
      <h1 className="text-center">Hotel name </h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ backgroundImage: `url(${carousel01})` }}
            alt=""
          />
          <Carousel.Caption>
            <h3>Experience this sunrise</h3>
            <p>Just a 30 minute walk from hotel.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ backgroundImage: `url(${carousel02})` }}
            alt=""
          />
          <Carousel.Caption>
            <h3>Breathe in, breathe out</h3>
            <p>Right next to hotel.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ backgroundImage: `url(${carousel03})` }}
            alt=""
          />
          <Carousel.Caption>
            <h3>Enjoy the view</h3>
            <p>Bench, hot coffee and silence.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ backgroundImage: `url(${carousel04})` }}
            alt=""
          />
          <Carousel.Caption>
            <h3>Rafting</h3>
            <p>An hour drive from hotel.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ backgroundImage: `url(${carousel05})` }}
            alt=""
          />
          <Carousel.Caption>
            <h3>Absorb everything</h3>
            <p>After two hours of climbing, this is the prize.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container-fluid">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, totam voluptatum, alias iste eius similique praesentium iusto odit ratione facilis accusamus aspernatur impedit modi laudantium sit optio odio fugiat temporibus consectetur. Quam incidunt sequi soluta excepturi itaque ex, dignissimos repellat? Quisquam, rem sapiente! Doloribus delectus dolorem fugiat provident ullam quae aspernatur eligendi cupiditate at ea autem officiis tenetur esse, dolorum, repudiandae minima ducimus eveniet quo itaque. Quam odio magnam, eveniet incidunt tenetur dolores enim rem nostrum fugiat dignissimos hic ex placeat vitae! Nemo nulla earum vitae, rem iste mollitia, magnam itaque a ab repellat minus quos ipsum est, voluptates aperiam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at error corporis dolores quibusdam facilis placeat natus voluptatem. Cumque rem, nam expedita dolorum sapiente quidem tenetur dolor ea? Sed nulla quae voluptates totam itaque velit autem reiciendis minima, quo quos? Neque, a vitae ea et, voluptates accusamus iste accusantium error nemo explicabo illo optio incidunt vero, nulla dolore? Sit asperiores harum necessitatibus culpa ipsum expedita rerum nesciunt incidunt cupiditate cum quaerat, suscipit sint facere officiis tempore! Illo tempore quasi iusto. Cupiditate nisi ea blanditiis aspernatur necessitatibus voluptas sunt nemo, nobis, repellat ducimus ab exercitationem, numquam temporibus consectetur quae beatae nam! Et soluta deserunt exercitationem magnam facere commodi consequuntur corporis omnis nesciunt totam eos, velit ad voluptatem a, sunt assumenda doloremque reiciendis expedita quae? Distinctio quam magnam ratione consequuntur laudantium iure hic nam fugiat facere eius. Dolorum exercitationem obcaecati maiores voluptatibus ipsam excepturi tempore consequuntur ut iste ex dolorem rerum praesentium non eius, ducimus eligendi eum expedita esse sequi blanditiis, consectetur ullam molestiae? Aspernatur excepturi perferendis voluptatem quia cupiditate, esse atque, explicabo qui itaque consectetur ipsum quisquam ex voluptates eius quam, quaerat hic expedita consequuntur ratione beatae debitis repellat fugit porro dignissimos! Explicabo voluptates minima quis facere, inventore voluptas ipsum quidem qui sunt, tempore laudantium esse nulla ducimus exercitationem natus cumque repellat! Fuga iste sequi accusamus doloribus voluptates assumenda ea sapiente dolores consequuntur voluptas, maxime illo, adipisci, expedita tempora aliquid voluptatem! Accusantium molestiae cum dolor sit dicta quasi unde id dolore libero vel aut omnis quas beatae pariatur corrupti, praesentium quisquam odit, nulla repudiandae ipsa officia nesciunt! Minus consequatur quo incidunt culpa dicta illum totam nostrum vel omnis inventore porro ducimus dolor repellat sunt dolorem, laboriosam mollitia commodi quisquam quibusdam nihil esse, autem cum! Laboriosam minus iusto, officiis voluptatem odio sapiente quo ratione placeat temporibus quis aut, maiores, tempora nobis magnam.</p>
      </div>
    </>
  );
};

export default Home;