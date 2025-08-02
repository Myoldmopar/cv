---
layout: page
title: Dev
permalink: /development/
---

This page offers some targeted highlights of work, or work-tangential, tasks, especially in the realm of software development.

<ul>
  <li><a href="#operating-systems">Operating Systems</a> (Starting at the Hardware Level)</li>
  <li><a href="#pythonic">Pythonic</a> (A Summary of Python Fun)</li>
  <li><a href="#localization">Localization</a> (Un EnergyPlus Seguro Para Subprocesos)</li>
  <li><a href="#duolingo">Duolingo</a> (EnergyPlus Fortran to C++ Conversion)</li>
  <li><a href="#debugging">Debugging</a> (My Debugging Lifestyle)</li>
  <li><a href="#testing">Testing</a> (My Evolution as a Code Tester)</li>
  <li><a href="#developing">Developing</a> (From Code to Packaging: A Story)</li>
  <li><a href="#world-wide-web">World Wide Web</a> (An Exploration into Front-End Development)</li>
  <li><a href="#versioning">Versioning</a> (Report_final_v2_approved_EL_2025.ods -> Git)</li>
  <li><a href="#dll-heck">DLL Heck</a> (A Deep Dive into Binary Guts)</li>
  <li><a href="#tech-writing">Tech Writing</a> (Documenting the Documentation)</li>
  <li><a href="#microcontrollers">Microcontrollers</a> (Ending at the Hardware Level)</li>
</ul>

{:toc}

## Operating Systems

Before describing specific development tasks, I would like to share my experience with the big operating systems.
I still regularly open my VMs of DOS, Windows 3.1, and Windows 98 to dabble through nostalgia, and also challenge myself to get things building/running on the old systems.

- Linux
  - I have been running Linux directly on my daily driver hardware since 2010.
  - I am intimately familiar with Linux kernel operations, Unix-like filesystem hierarchy, file permissions, user management, and popular terminal shells.
  - No, I don't have driver issues, but yes, I do carefully select hardware that plays nicely with Linux
  - Although I do love a good coding IDE, I am also quite happy with Vim open and a gdb session running to debug my code.
- Windows
  - Although I don't remember installing Windows 3.1 on hardware, I definitely used it on my family's second home PC (The first was MS-DOS 6.22 with DOS Shell).
  - I do remember installing Windows 95 on my family's machine and helping others install it
  - Windows 2000 is my favorite non-Linux operating system
  - OK, back to reality, yes, I use Windows all the time.  I develop EnergyPlus and other tools on it to ensure Windows platform compatability.
- Mac
  - Yes, I use Mac all the time.  I develop EnergyPlus on my ARM Mac, and ensure platform compatibility as well.

## Pythonic

I created and maintain the Python API integration for EnergyPlus, transforming how users and researchers interact with the simulation engine.
Before my work, EnergyPlus had a built-in, but highly limited scripting language called the EnergyPlus Runtime Language. 
But now, EnergyPlus supports powerful runtime control through Python callbacks, user-defined functions, and real-time interaction via the plugin system.

This meant designing a stable API layer on top of the EnergyPlus core, managing memory, thread safety and type safety across the C++/Python boundary, and navigating CPython’s internals. 
I’ve debugged the CPython interpreter itself, handled raw `PyObject` pointers, and written logic to marshal complex simulation data structures between languages. 
I’ve also built the cross-platform build system to compile/link against the Python runtime reliably on all major OSes.

The plugin system has since enabled a variety of high-profile research and control strategies, from advanced fault detection to hybrid control schemes and occupancy-driven energy management.
One key project utilized the plugin system to connect EnergyPlus zone simulation to a highly detailed refrigerated case model in Python.
The project outcomes revealed how to properly handle demand response events to ensure food safety is maintained.

## Localization

For this topic, localization actually means two things.

First off, in some of my software projects, I have implemented localization to allow my software to work with different languages.
This was a fun side experience, and I learned about how to apply encodings and work with partners to implement language changes smoothly within a program.

And secondly, for EnergyPlus, there was a "localization" step made after the Python API was released, which was really more of a "deglobalization."
Prior to the Python work, EnergyPlus made heavy use of global state: 17,000 or so global or static lifetime variables.
This was fine while EnergyPlus was simply an executable that ran once and ended the process.
With the API, it was critical to have thread-safety and allow the program to run multiple times in the same process.
I worked with my EnergyPlus team to develop a strategy to collect these thousands of variables into a single state object that would be passed around EnergyPlus.
There was an incredible effort placed over weeks and months to get it wrapped up, but in the end, EnergyPlus became the thread-safe, non-global, API-client-friendly, library that it is today.

## Duolingo

EnergyPlus was originally written in Fortran, and by 2013, it was becoming difficult to find Fortran developers to contribute to the codebase. 
Autodesk initiated the C++ translation project, and my role was to bring that code up to release standards through inspection, testing, and regression analysis.
Since then, I’ve helped lead the modernization of the entire codebase and spent countless hours mentoring the team through the language transition. 
Beyond just finishing the translation, I’ve pushed for idiomatic C++ practices, proper object modeling, memory safety, and stripping away some of the workarounds that were in place from the Fortran to C++ conversion.
That evolution from procedural Fortran to maintainable, testable C++ has been core to the engine’s ongoing stability and extensibility.

## Debugging

Debugging complex simulations is a challenge, especially in a system as large as EnergyPlus.
I have spent thousands of hours debugging EnergyPlus, and developed tools to help along the way.
Way back in 2009-ish, when we used Compaq Visual Fortran as our IDE of choice, it was a huge burden to enter node data debug values into the watch window.
To remedy this, I created a small script that would take a couple inputs, "hijack" the keyboard, and inject a series of keystrokes that would rapidly fill out as many variable entries as needed.
More recently, I built a web-based debug visualizer that connects to two running debug sessions through a REST-style interface, controlling the debug sessions and also gathering data from the debugged programs.
The web visualizer also compares the data from the two programs to show whether data matches or not.

Recently I was also brought onto a project to assist with integrating an existing component model into EnergyPlus.
The component model was written in Python, but for a tight coupling with EnergyPlus, it needed to be integrated into the C++ codebase.
After a process of trimming down the Python project, the code was converted to C++.
After this conversion, the C++ version produced results that were close, but not close enough, to the original Python version.
Debugging the two essentially identical codebases was a major challenge, and I spent a lot of time jumping between the codebases inside debuggers, and constantly stepping and restarting sessions.
I came up with a wild solution, where I created a web server in Python that would interact with both running codebases while they were in debug mode.
A simple web server with a REST API allowed me to send commands to the two running programs and keep them in sync, while also receiving data from the two programs and visualizing them on a web page.
The web page eventually also included the ability to compare to the two results in a visual table that was color coded to spot the differences.
This work enabled me to quickly identify the causes of multiple subtle differences between the two codebases, and ultimately get agreement so that the code could move toward EnergyPlus implementation.
This is a snippet of the web page with some data from both codebases, along with controls:

![DiffLogger]({{ site.baseurl }}/assets/images/DiffLogger.png)

## Testing

When I took over EnergyPlus technical development in 2013, there were no unit tests.
Testing did occur, but it was not triggered by each change to the code, it was more of a periodic regression check.
Right away, we started requiring unit tests, and worked with the team to develop the structures needed in the code to support testing.
Today, we have thousands of unit tests, hundreds of integration tests, and rigorous regression testing.
In addition to unit, integration, and regression tests, I also recognized the importance of "other" tests, such as repository structure and license checks.
This led to a series of Python-backed tests that are also executed alongside all the other functional physics code tests.

I have experienced a lot of personal transition around software testing, which predates my current role of leading EnergyPlus.
In the early days I would use local VM snapshots to test my own software projects on "clean" images.
In the Middle Ages, Docker and Travis became my tools of choice, and I was fascinated by the integration of Travis and GitHub.
I used them heavily along with other code analysis platforms like Code Climate to grade my codebase, and Coveralls to report on code coverage.
In modern times, I use GitHub Actions extensively in all my public and private projects and often write custom workflows to handle multi-platform builds, matrix testing, artifact publishing, releasing to PyPi, and more.

As a final side topic around testing, I am also experienced with mocking for tests.
In many of my projects, I depend on external resources such as web queries and hardware access.
For our custom CI framework (Decent CI), which is written in Ruby, I wanted to create unit tests, but it makes many calls to GitHub's API to check status, upload and download, etc.
To accommodate this, I learned and implemented mock structures and patches that temporarily respond as if GitHub was responding, so that I can test the code under controlled conditions.
This was quite painful, but it has become a powerful addition to my expertise, and I have used it in my personal projects as well.
I regularly 

## Developing

Over the years, I’ve built a range of full-featured tools and libraries, including:

* **[MyPyOpt](https://github.com/Myoldmopar/MyPyOpt)**: a heuristic-search Python optimization framework that is highly accessible to drop into any workflow
* **[EnergyPlus Regression Tool](https://github.com/nrel/energyplusregressiontool)**: Scripts and a GUI to compare and analyze simulation results across builds
* **[EPLaunch 3](https://github.com/nrel/ep-launch)**: a cross-platform GUI for managing E+ simulation jobs
* **[Solar geometry utilities](https://github.com/Myoldmopar/SolarCalculations)** for accurate solar position calculations.
* **[Transition Utilities](https://github.com/Myoldmopar/EnergyPlusTransitionTools)**: tools to migrate legacy input files across versions
* **[EnergyPlus PET](https://github.com/Myoldmopar/EnergyPlusPET)**: Tools for generating parameter estimations and curve fits for HVAC equipment in EnergyPlus
* **EnergyPlus Focus**: A GUI to run EnergyPlus tests and simulations that I developed during grad school for my classmates and professors.

All these projects include structured source trees, test suites, extremely high code coverage, versioned releases, and user-facing documentation.

My live GitHub impact statistics are shown here:

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=myoldmopar&show_icons=true" />
</p>

And although I spent a majority of my life in the NREL/EnergyPlus repository, this is a live look at the language breakdown for my own personal repositories:

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=myoldmopar&hide=html&layout=compact" />
</p>

## World Wide Web

While most of my time is spent writing C++, Python, or Fortran code that runs EnergyPlus, simulates physics, or analyzes results, I have had the opportunity to broaden my horizons and dabble in web development periodically.
My first entry into this world was contributing on the [SEED Platform](https://www.energy.gov/eere/buildings/standard-energy-efficiency-data-seed-platform).
I was brought onto this Python project, which uses Django for web development, and asked to develop a new REST API for the project.
This required learning many new coding skills that were specific to Web, and even Django, but my experience as a software development made my time there a success as I developed a Swagger API page to accompany the new API endpoints I had added.

I leveraged this web skill in setting up small web projects over the years.
My son and I have multiple Django server instances running regularly within our house which serve our family with running game instances and "Neighborhood Olympics" record tracking.

## Versioning

As a graduate student, I noticed classmates regularly storing dozens, or hundreds, of copies of their simulation source code, and knew there had to be a better way.
My search revealed Subversion (this was ~2007).
I started using Subversion, teaching others to use it, setting up a server in our lab, and even setting up our research group with a cloud SVN storage before cloud was trendy.
There are still a few subversion folders set up on my backup that I will peer into occasionally, for nostalgia mostly.

As I joined the EnergyPlus team, I was introduced to StarTeam, and found it to be very comfortable, and enjoyed that it had built in issue tracking, and more.

Around 2011 I found Git, and GitHub, and have not looked back.
I use Git on the command line essentially every day on my life, and I am comfortable with nearly every repository "situation" out there.
Tools like gitk, TortoiseGit, and GitHub for Desktop are fine as well, but I’ve resolved every possible merge conflict scenario and know the ins and outs of rebase, bisect, submodules, and release branching right from the terminal.

## DLL Heck

I have had to deal with shared library dependency problems for what seems like my whole career.
I’ve handled cross-platform issues with `.dll`, `.dylib`, and `.so` files since trying to wire up VB.Net to the old EnergyPlus Fortran DLLs. 
Python integration made things worse? (more interesting?), requiring low-level work to resolve linking issues across platforms.
I routinely use `otool`, `install_name_tool`, `ldd`, and `Dependency Walker` to inspect and fix runtime dependency chains. Whether it’s CMake’s RPATH quirks or preparing Python native distributions for packaging within EnergyPlus, I have dealt with it.

## Tech Writing

When I took over EnergyPlus development, the documentation was contained in very heavy Word documents that had to be manually merged together whenever changes were made by a developer.
Since the team was hoping to continue to distribute PDFs with the package, this could not continue, so we evaluated options.
My initial hope was for LaTeX, because of course I loved it, but also because it would allow multiple collaborators on the source, and also provide meaningful warnings when there were build issues.
This was originally rejected, and we pushed toward a Markdown-based documentation system, which was better than Word, but the idea of basing built PDFs purely off of Markdown was a difficult ask at the time, so this only lasted a couple of years.
I then got my wish of moving toward LaTeX, and it has been a stable solution for nearly ten years.
Moving forward, I am hopeful that we eliminate the PDFs from each package and instead focus on hosted docs such as ReadTheDocs so that we can actually move back away from LaTeX and rely on industry standard tools for our documentation.

## Microcontrollers

Although not technically work related, but I have become fascinated by the use of microcontrollers in my everyday life.
I have become extremely fond of Raspberry Picos, and we use them in my family to monitor refrigerator temperatures, control cosplay costumes, and run chess timers.
We mostly program them in Python using CircuitPython, but there are applications where we prefer to use MicroPython itself, and I've even done some C operations.
It has been fun to work through really tough problems that only occur on a small embedded application like this with very limited bandwidth.
Many of the tasks I would normally have just threaded or brute forced would require much more thought and care when the CPU is only wanting to run single threaded.
