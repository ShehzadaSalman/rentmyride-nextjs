export default function handler(req, res) {
  //   const { pid } = req.query;

  res.status(200).send({
    meta: {},
    details: {
      dailyrent: 200,
      seats: 4,
      doors: 2,
      deposit: 300,
      carfeatures: [
        {
          icon:
            "https://cdn.rentmyride.ae/Portal/content/myrideImages/VehicleFeature/Cruise-Control.png",
          title: "Cruise Control",
        },
        {
          icon:
            "https://cdn.rentmyride.ae/Portal/content/myrideImages/VehicleFeature/Fog-Lights.png",
          title: "Fog Lights",
        },
        {
          icon:
            "https://cdn.rentmyride.ae/Portal/content/myrideImages/VehicleFeature/Front-Airbags.png",
          title: "Front Airbags",
        },
        {
          icon:
            "https://cdn.rentmyride.ae/Portal/content/myrideImages/VehicleFeature/Parking-Sensors.png",
          title: "Parking Sensors",
        },
        {
          icon:
            "https://cdn.rentmyride.ae/Portal/content/myrideImages/VehicleFeature/Leather-Seats.png",
          title: "Leather Seats",
        },
      ],
      description: "lorem ipsum dolor",
      crouselImages: [
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Mercedes-Benz-E300-in-Dubai1.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/77a08ea582004e71ae3a6d278a5112f0Rent-Mercedes-Benz-E-300-in-Dubai-RentMyRide.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/73ee83ec0d3d4c9aa7eca59f774913f6Mercedes-Benz-E-300-Rental-in-Dubai.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/22b9c8c8fb1f43deb7162dce5b24fd03Mercedes-Benz-E-300-Rental-in-Dubai-RentMyRide.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/ec227df3b1bd45fbb8e0a93972822095Mercedes-Benz-E-300-Rent-in-Dubai.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/16e1dcc39f3e4c12824b2e4645f99336Mercedes-Benz-E-300-Rent-in-Dubai-RentMyRide.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/bc805eb2c7b8412598b4060eeb19552cHire-Mercedes-Benz-E-300-in-Dubai.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/562de42440a84c3fbc99025560fd982aRent-A-Mercedes-Benz-E-300-in-Dubai-RentMyRide.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/dc878ea5ff244263ad6894cc246c8cc0Mercedes-Benz-E-300-Car-Hire-in-Dubai.jpg",
      ],
      crouselImageNavigation: [
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Mercedes-Benz-E300-in-Dubai1.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/77a08ea582004e71ae3a6d278a5112f0Rent-Mercedes-Benz-E-300-in-Dubai-RentMyRide.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/73ee83ec0d3d4c9aa7eca59f774913f6Mercedes-Benz-E-300-Rental-in-Dubai.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/22b9c8c8fb1f43deb7162dce5b24fd03Mercedes-Benz-E-300-Rental-in-Dubai-RentMyRide.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/ec227df3b1bd45fbb8e0a93972822095Mercedes-Benz-E-300-Rent-in-Dubai.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/16e1dcc39f3e4c12824b2e4645f99336Mercedes-Benz-E-300-Rent-in-Dubai-RentMyRide.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/bc805eb2c7b8412598b4060eeb19552cHire-Mercedes-Benz-E-300-in-Dubai.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/562de42440a84c3fbc99025560fd982aRent-A-Mercedes-Benz-E-300-in-Dubai-RentMyRide.jpg",
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/dc878ea5ff244263ad6894cc246c8cc0Mercedes-Benz-E-300-Car-Hire-in-Dubai.jpg",
      ],
    },
  });
}
