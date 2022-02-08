import React from 'react';
import { useEffect, useState } from 'react';


import HotelList from './components/HotelsList/HotelList';
import Header from './components/UI/Header/Header';

function App() {
  const [hotelsList, setHotelsList] = useState([])
  const [header, setHeader] = useState('')

  const hotelsUrl = 'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG';
  const roomsUrl = 'https://obmng.dbm.guestline.net/api/roomRates/OBMNG/';

  async function getRooms(item) {
    const resp = await fetch(roomsUrl + item.id)
    const data = await resp.json();
    item.rooms = data.rooms
  }

  async function getHotels(url) {
    const resp = await fetch(url);
    let data = await resp.json();
    data.forEach(hotel => getRooms(hotel))

 
    setHeader(data[0].images[0])
    return data;
  }

  useEffect(() => {
   getHotels(hotelsUrl)
   .then(response => setHotelsList(response))

   
  }, [])

  return (
    <div className="App">
      <Header image={header.url} />
      {/* <img src={`${header.url}`} /> */}


      <HotelList hotelList={hotelsList}/>
    </div>
  );
}

export default App;
