import React from 'react'
import Card from './Card'

const Data = () => {

    const cardAarray = [
        {
            image: "images/img1.jpg",
            title: "Card Title 1",
            description: "This is the description for Card 1."
        },

        {
            image: "images/img2.jpg",
            title: "Card Title 2",
            description: "This is the description for Card 2."  
        },
        {
            image: "images/img3.jpg",
            title: "Card Title 3",
            description: "This is the description for Card 3."
        },
        {
            image: "images/img4.jpg",
            title: "Card Title 4",
            description: "This is the description for Card 4."
        },
        {
            image: "images/img1.jpg",
            title: "Card Title 5",
            description: "This is the description for Card 5."
        },
        {
            image: "images/Messi.jpg",
            title: "Card Title 6",
            description: "This is the description for Card 6."
        }


    ]

  return (
    <div>
      <Card carddata ={cardAarray}/>
    </div>
  )
}

export default Data
