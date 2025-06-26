---
layout: page
title: Science
permalink: /science/
---

While my day to day life is heavily in producing software, my core education, and academic first love, is building science.
This pages covers some of my background and project highlights where I was able to utilize my building science credentials.

<ul>
  <li><a href="#a-building-science-foundation">A Building (Science) Foundation</a> (A Transcript)</li>
  <li><a href="#groundwork">Groundwork</a> (Modeling in the Deep)</li>
  <li><a href="#plant-refactors">Central Plant</a> (A Rewrite)</li>
  <li><a href="#shipping">Shipping</a> (A Special Seaside Project)</li>
  <li><a href="#plant-loop-heat-pump">Plant Loop Heat Pump</a> (It is spelled thEIR)</li>
  <li><a href="#one-coil-to-rule-them-all">One Coil to Rule Them All</a> (Coded within Mount Doom)></li>
  <li><a href="#emerald-town">Emerald Town</a> (A Residential Simulation Experience)</li>
</ul>

{:toc}

## A Building (Science) Foundation

I developed a very strong building science foundation while at school, and continue to learn new things regularly.
Some of my favorite subjects when I was in school include:
* Thermodynamics 1: This is where I first found success in college.  After struggling early on, this class was a major turning point, and I knew I had found my subject.
* Thermodynamics 2: This is where I met Dr. Dan Fisher, who showed me I could be very excited about this industry, and he became my life-long mentor right in that moment in Engineering South.
* Computational Heat Transfer: Although I had been using coding for my school work for a while, this class reinforced the way I could use coding for physical modeling applications.
* Indoor Environmental System Design 1, 2, and Advanced Thermal Systems: The design aspects in these classes taught me real-world details and assumptions when sizing an HVAC system or pumping configuration that are still key when I am writing or reviewing models or code.
* Advanced Thermodynamics (3): In this class, we were taught how to go back to the fundamentals of thermodynamics to dive deeper than ever into the theory, which solidified my understanding of many thermodynamic topics.

## Groundwork

Throughout my school, and in my work today, I regularly work on projects related to ground heat transfer.
I have built a simulation model for foundation heat exchangers that utilizes an efficient 3D grid for the ground, detailed grid around the pipe and fluid, transport delay, dual time step, and zone coupling.
I have integrated ground models into EnergyPlus that can perform basement and slab heat transfer without the need for preprocessing.
I have worked on multiple ground heat exchanger studies, and continue to contribute to ground heat transfer sizing and simulation research both at NREL and as a member of the Center for Integrated Building Science.

## Plant Refactors

When I joined the EnergyPlus team, I primarily worked on defects and enhancements for the central plant system.
I immediately noticed some major issues with the code in this area, primarily the amount of repeated functionality.
Initially there were separate routines for:

* Plant Loop Demand Side Calculation
* Plant Loop Supply Side Calculation
* Plant Loop Flow Resolver
* Condenser Loop Demand Side Calculation
* Condenser Loop Supply Side Calculation
* Condenser Loop Flow Resolver

I was a part of the team who collapsed this down into:

* Half Loop Calculation
* Half Loop Flow Resolver

This effort required learning intimate details of the simulation logic and history for central plants, and drastically reduced the amount of plant code.
With this, plus the added SetComponentFlowRate functionality, the number of central plant defects dropped incredibly low.

After joining NREL, I also led the effort to collect all the various plant components into a single base class PlantComponent.
This required designing the base class, holding multiple hackathon sessions, integrating dozens of branches from different developers, modifying the interface, testing, and polishing it all up.

## Shipping

As part of the "MPACT" project, I extended EnergyPlus to simulate ships, or in other words, buildings that move and rotate.
This involved changing the simulation engine for solar and other geometry calculations and also adding a water boundary condition to wall surfaces.
The project was highly successful, and was accompanied by actual experimental validation of a ship room, where the EnergyPlus model matched very well.

## Plant Loop Heat Pump

There were many industry partners who requested a single water loop heat pump that could be flexibly placed on plant loops and use a familiar curve formulation.
I implemented the plant loop heat pump object based on the EIR formulation, and it has since been enhanced to provide both air-source and water-source capabilities, and is currently undergoing further enhancements.

## One Coil to Rule Them All

As EnergyPlus has evolved, a large number of coil objects have been added, with various capabilities.
This is partly due to budget limitations, as it was cheaper to simply bolt on a new object rather then surgically enhance an existing object.
During my time leading EnergyPlus, I coordinated multiple efforts, along with both in-person and virtual hackathons, to build out a single Coil:Cooling:DX object that aims to replace all the other coils.
This required developing a deep understanding of coil physics and modeling strategies, understanding how the flow and control logic is communicated between the coil, parent objects, and fluid loops, and also furthering my understanding of coil sizing and rating.
This new object is being used, and in the future, I would love to see the other coils be deprecated in favor of moving toward the one coil to rule them all.

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
