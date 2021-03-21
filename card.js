import React from 'react';

const Card = ({ name, key, id, email }) => {
          return (
           <div key=key> 
              <p>{name}</p>
              <p>{id}</p>
              <p>{email}</p>
            </div>
          );
      }

export default Card;
