const data = require('../../data/data.json');
const fs = require('fs');

const hoteles = (req, res) => {
  return res.json(data);
}

const hotel = (req, res) => {
  const { id } = req.params;
  const index = data.indexOf(data.find(hotel => parseInt(hotel.id) === parseInt(id)))
  if (index === -1) {
    return res.status(404).json({
      ok: false,
      message: 'Hotel not found'
    });
  }

  const hotel = data[index];

  res.status(200).send(
    `<html>
    <head>    
    <style >
    h2{
      color: #33629a;
    }
    .hotels-list {
      position: relative;
      top: 75px;  
    }
    .hotel{
      padding: 5px 5px 15px 5px;
      margin-bottom: 15px;
      box-shadow: 0px 5px 10px 0px #ccc;
    }
    .image-hotel{
      width: 100%;
    }
    .star, .amenitie{
      height: 24px;
      margin: 5px 5px;
    }
    .separator{
      margin: 10px 0px 20px 0px;
      width: 100%;
      border: 2px dotted #aaa;
    }
    .price-info{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .price-info p{
      font-size: medium;
      color: #aaa;
    }
    .price span{
      font-size: 30px;
      color: #fd910d;
    }
    .price span:nth-child(2){
      font-weight: bold;
    }
    .price{
      padding: 20px 0px 10px 0px;
    }    
    </style>
<style media="screen and (min-width: 720px)">
body{
  background-color: #00f500;
}
.hotel{
  display: flex;
  flex-direction: row;    
}
.info-hotel{
  display: flex;
  flex: 1;
  padding: 20px;
  flex-direction: column;
}
.image-hotel{
  width: 30%;
  flex: 1.5;
  max-height: 250px;
  min-height: 220px;
  object-fit: contain;
}
.separator{
  margin: 0px 20px 0px 10px;
  width: 0px;
  border: 2px dotted #aaa;
  flex: 0
}
.star, .amenitie{
  height: 18px;
  margin: 3px 3px;
}
.price-info{
  flex: 1;
}
.price span{
  font-size: 20px;  
}
.price-info p{
  font-size: small;
  color: #aaa;
}
.btn{
  font-size: x-small;
}
.btn{
  display: flex;
  margin: 20px auto 10px auto;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  width: 70%;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  background-color: #1976d2;
}
</style>
    </head>
      <body>
      <section class="hotels-list">  
      <div class="hotel">    
        <img class="image-hotel" src="http://localhost:3000/assets/images/hotels/${hotel.image}" />
        <div class="info-hotel">
          <h2>${hotel.name}</h2>
        </div>
        <app-star>
        </app-star>
        <div class="separator"></div>
        <div class="price-info">
          <p>Precio por noche por habitación</p>
          <div class="price"><span>ARG </span><span>${hotel.price}</span></div>
          <button class="btn" type="button" onclick="infoHotel()">
            Ver Hotel
          </button>
        </div>
      </div>  
    </section>
    <script>
  const infoHotel=()=>{
    let amenities = new Intl.ListFormat("es").format(("${hotel.amenities}".split(",")));
    window.alert(\`Hotel: ${hotel.name}\nPrecio: ${hotel.price}\nEstrellas: ${hotel.stars}\nAmenities :\`+ amenities)
  }
  </script>
      </body>
    </html>`
  )

}

const addHotel = (req, res) => {
  const { name, stars, price, image, amenities } = req.body;

  const newHotel = {
    id: data.length + 1,
    name,
    stars,
    price,
    image,
    amenities
  }
  data.push(newHotel);

  fs.writeFile('./data/data.json', JSON.stringify(data), (err) => {
    if (err) {
      res.status(500).json({
        ok: false,
        message: 'Error saving the hotel',
        error: err
      });
    };
  });

  return res.status(200).json({
    ok: true,
    message: 'Hotel added',
    hotelAdded: newHotel
  });
}

const updateHotel = (req, res) => {
  const { id } = req.params;
  const { name, stars, price, image, amenities } = req.body;
  const index = data.indexOf(data.find(hotel => parseInt(hotel.id) === parseInt(id)));
  console.log(index);
  if (index === -1) {
    return res.status(404).json({
      message: 'Hotel not found'
    });
  }
  const hotelInfo = {
    id,
    name,
    stars,
    price,
    image,
    amenities
  }
  data[index] = hotelInfo;
  fs.writeFile('./data/data.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The hotel has been updated!');
  });
  return res.json({
    ok: true,
    message: 'Hotel updated',
    hotelUpdated: hotelInfo
  });
}

const deteleHotel = (req, res) => {
  const { id } = req.params;
  const index = data.findIndex(hotel => parseInt(hotel.id) === parseInt(id));

  if (index === -1) {
    return res.status(404).json({
      ok: false,
      message: 'Hotel not found'
    });
  }

  data.splice(index, 1);
  fs.writeFile('./data/data.json', JSON.stringify(data), (err) => {
    if (err) throw new Error('Error deleting the hotel');
  });

  return res.json({
    ok: true,
    message: 'Hotel deleted'
  });
}

module.exports = {
  hotel,
  hoteles,
  addHotel,
  deteleHotel,
  updateHotel
}