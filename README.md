# robokid
I need help with this plz help me!
I know this is not the best weay to do it but i am new tih github anywho here it is

index.js:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './cardArray';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import {robots} from "./robots";
ReactDOM.render(

    <CardList robots={robots}/>
    


, document.getElementById("root"))   
    
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

cardArray.js:
  
import React from 'react';
import card from './card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;

robot.js

export const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz'
    }
  ];
  
  
  card.js:
  
  import React from 'react';
const card = ({name, email, id}) => {
 return(
  <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img alt="photo" src={`https://robohash.org/${id}?200x200`} />   
   <div>
     <h2> {name}</h2>
     <p>{email}</p>
   </div>
  </div>
 );   
}
export default card;

Plz help Ztm
  
  
