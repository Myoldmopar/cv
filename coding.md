---
layout: page
title: Code
permalink: /coding/
---

# Coding Experience

I've been coding since 1990.  I have always loved it, and it became a thrill to see how I could put code to use for my day to day life while in college.

## Early Years

- [GW-Basic](https://en.wikipedia.org/wiki/GW-BASIC)
  - My first programming experience, in the year 1990. Many hours were spent copying the demo programs from the spiral bound user's manual.
- [QBasic](https://en.wikipedia.org/wiki/QBasic)
  - Many programs made using this language throughout the 90s, including graphical games, logic puzzles, and random projects
- [Linux](https://linux.org/)
  - I originally watched my brother install Mandrake 98 and was highly intrigued; it took a few years before I was brave enough to run Linux on my own hardware
  - I have been running Linux on my daily driver since 2010, but I still have to use both Mac and Windows regularly to diagnose issues on various projects

## 2000s

- [Visual Basic for Applications (VBA)](https://en.wikipedia.org/wiki/Visual_Basic_for_Applications)
  - First semester of college included a course on VBA
  - Ended up using VBA heavily for many projects, taking advantage of the connection to Excel to both read in data and print results
  - Many 2D finite difference problems were solved using VBA for both heat transfer and fluid flow
- [Visual Basic .Net (VB.Net)](https://en.wikipedia.org/wiki/Visual_Basic_(.NET))
  - In a desire to learn about software development, and make tools that other students and professors could use, I found myself using VB.Net heavily.
  - I developed multiple GUI products that oversaw simulation workflows, generated inputs, mined outputs, plotted results, and more.
  - This led me to developing proper GUIs with background threads for long running operations, event handling, saving configs in the Windows registry, and more.
- [Fortran](https://en.wikipedia.org/wiki/Fortran)
  - As a part of most engineering courses, we worked on various Fortran projects
  - I then continued using Fortran when developing simulation code and tools around the EnergyPlus ecosystem
  - Even today, I still have to use Fortran regularly as many EnergyPlus tools are still written in Fortran
- [Language Interop](https://en.wikipedia.org/wiki/Language_interoperability) **One of my favorite things :-)**
  - My first real experience getting languages talking together was when I first tried to get a VBA program to call out to a Fortran-based library
  - Marshalling data between VBA and Fortran required an understanding of library/API structure, underlying data types, and calling conventions between languages
- [LaTeX](https://en.wikipedia.org/wiki/LaTeX)
  - Began using LaTeX as a document language for all technical efforts and class homeworks and projects
  - Used LaTeX for my thesis and dissertation, ultimately helping convert the EnergyPlus (Microsoft Word) documentation to LaTeX

## 2010s to Present

- [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language))
  - Played with Ruby during my graduate research, but got into it heavily once working at NREL
  - Used it to develop a translator, taking manufacturers data for mechanical equipment and creating OpenStudio/EnergyPlus inputs from it
  - Still use Ruby for running the [CI system](https://github.com/Myoldmopar/decent_ci/) for EnergyPlus, which is a fork of Decent CI
- [Python](https://python.org)
  - For well over a decade, I have used, and continue to use, Python exhaustively for countless projects
  - Embedded a Python interpreter inside EnergyPlus to create the PythonPlugin system
  - Learned how to build and deploy Django web servers using Python
  - Created a Python API around EnergyPlus to enable new workflows
  - Debugged inside CPython's implementation to diagnose issues
- [C](https://en.wikipedia.org/wiki/C_(programming_language))/[C++](https://en.wikipedia.org/wiki/C%2B%2B)
  - While I used C and C++ in college, this took off heavily as we embarked on converting EnergyPlus from Fortran to C++
  - I oversaw many training sessions for the development team and have since embarked on countless refactoring efforts to utilize modern C++ capabilities
  - I use C++ daily to develop EnergyPlus, and am regularly answering code questions for developers working on defects and new features
- [Language Interop](https://en.wikipedia.org/wiki/Language_interoperability) (Again)
  - As author of the EnergyPlus C/Python API and Python Plugin System, I had to become intimately familiar with how to marshal data between C/C++ and Python
  - On multiple occasions, I have had to debug issues in the CPython implementation to understand how data is being handled within Python's runtime itself
