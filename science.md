---
layout: page
title: Science
permalink: /science/
---

While my day to day life is heavily in producing software, my core education, and academic first love, is building science.

<ul>
  <li><a href="#building">Pythonic</a> (A Sumamry of Python Fun)</li>
  <li><a href="#building">Pythonic</a> (A Sumamry of Python Fun)</li>
  <li><a href="#shipping">Shipping</a> (A Special Seaside Project)</li>
  <li><a href="#emerald-town">Emerald Town</a> (A Residential Simulation Experience)</li>
</ul>

{:toc}

## A Building (Science) Foundation

Describe the classes I took and loved. Maybe key projects.

## Building Technologies

Describe the technologies and physics I feel especially good in.

## Shipping

As part of the "MPACT" project, I extended EnergyPlus to simulate ships, or in other words, buildings that move and rotate.
This involved changing the simulation engine for solar and other geometry calculations and also adding a water boundary condition to wall surfaces.
The project was highly successful, and was accompanied by actual experimental validation of a ship room, where the EnergyPlus model matched very well.


## Emerald Town

Alright, this is a fun one.
Around 2020, my son and I decided to make an incredibly detailed model of our own house.
We measured every wall and window down to the nearest inch or so, and I translated this into a CAD model (LibreCAD) that also included height information for the various heights in our house.
I then took this three-dimensional data of the house and made a Python project that could generate EnergyPlus inputs from this dataset.
I moved this model onto GitHub, added a GitHub Action runner that would automatically download EnergyPlus, generate the input file, and run it.

With this running, I then added HVAC data, schedule information, thermostat control, material properties, and more, to create a decent model of our house.
Next was taking 2019 utility data, chopping it and reforming it into calendar month energy use values; and taking 2019 weather data from a local site, and processing it into EnergyPlus input weather data.
The energy comparison between EnergyPlus and utility bills was very good, and over time I realized I had forgotten things, that I went back and added to the model (who knew I had a water heater in a closet?).
The results seemingly got better and better as I narrowed in my model with more and more data.
