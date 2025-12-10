// src/brochureData.js
export const kuberBali = {
  title: "Kuber Bali Adventure – ATV Quad Bike Tour",
  subtitle: "Welcome to Kuber Bali Adventure",
  description: `
If you are looking for a new way to explore the natural wonder of Bali,
Kuber Bali Adventure is the best choice for you. We offer a different and unique
All Terrain Vehicle tour. Why choose Kuber Bali Adventure? During the trip you will
pass waterfall, long tunnel, rice field, farms, jungle and village.

The location is in Ubud area, only one hour from Kuta, Legian and Seminyak area.
Our programs are suitable for both experienced and inexperienced riders
from age 6 until 65 years old. Book your adventure now!`,
  options: [
    {
      name: "Option A",
      duration: "Duration 1.5 Hours",
      points: [
        "Tunnel",
        "Waterfall",
        "Rice Field",
        "Fun-up Down Trail to Up Hill",
        "Fun Action",
      ],
      prices: [
        { label: "ATV Single", price: "Rp. 1.400.000" },
        { label: "ATV Tandem", price: "Rp. 1.800.000" },
      ],
    },
    {
      name: "Option B",
      duration: "Duration 1 Hour",
      points: [
        "Rice Field",
        "Fun-up Down Trail to Up Hill",
        "Fun Action",
      ],
      prices: [
        { label: "ATV Single", price: "Rp. 1.200.000" },
        { label: "ATV Tandem", price: "Rp. 1.600.000" },
      ],
    },
  ],
  otherActivities: [
    { label: "Rafting", price: "Rp. 1.100.000" },
    { label: "Swing", price: "Rp. 350.000" },
    { label: "Tubing", price: "Rp. 1.050.000" },
  ],
  schedule: [
    { trip: "Trip 1", time: "07.30 – 08.00" },
    { trip: "Trip 2", time: "09.30 – 10.00" },
    { trip: "Trip 3", time: "11.30 – 12.00" },
    { trip: "Trip 4", time: "13.30 – 14.00" },
    { trip: "Trip 5", time: "15.00 – 15.30" },
  ],
  programIncludes: [
    "Welcome Drink",
    "Lunch",
    "Insurance",
    "Towel & Shower Facilities",
    "Shoes",
    "Guide & ATV Equipments",
  ],
  toBring: ["Voucher", "Change Cloth", "Extra Money"],
};
