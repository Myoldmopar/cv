---
layout: page
title: Code
permalink: /coding/
---

# Coding Experience

I've been coding since 1990.  I have always loved it, and it became a thrill to see how I could put code to use for my day-to-day life while in college.

## Early Years

{% raw %}
<div class="tab-panel">
  <div class="tab-buttons">
    <button data-tab="gw">GW-Basic</button>
    <button data-tab="qbasic">QBasic</button>
    <button data-tab="linux">Linux</button>
  </div>
  <div class="tab-content">
    <div id="gw">
      <p><a href="https://en.wikipedia.org/wiki/GW-BASIC" target="_blank">GW-Basic</a></p>
      <p>My first programming experience, in the year 1990. Many hours were spent copying the demo programs from the spiral bound user's manual.</p>
    </div>
    <div id="qbasic">
      <p><a href="https://en.wikipedia.org/wiki/QBasic" target="_blank">QBasic</a></p>
      <p>Many programs made using this language throughout the 90s, including graphical games, logic puzzles, and random projects.</p>
    </div>
    <div id="linux">
      <p><a href="https://linux.org/" target="_blank">Linux</a></p>
      <p>
        I know, it's not a coding language, but still an important part of my upbringing.  
        I originally watched my brother install Mandrake 98 and was highly intrigued; it took a few years before I was brave enough to run Linux on my own hardware.
        I have been running Linux on my daily driver since 2010, but I still have to use both Mac and Windows regularly to diagnose issues on various projects.
      </p>
    </div>
  </div>
</div>
{% endraw %}

## 2000s

{% raw %}
<div class="tab-panel">
  <div class="tab-buttons">
    <button data-tab="vba">VBA</button>
    <button data-tab="vbnet">VB.Net</button>
    <button data-tab="fortran">Fortran</button>
    <button data-tab="interop">Interop</button>
    <button data-tab="latex">
      <span style="font-family: 'Times New Roman', serif;">
        L
        <span style="vertical-align: -0.4ex;">A</span>
        T
        <span style="vertical-align: 0.5ex; font-size: 0.85em;">E</span>
        X
	  </span>
	</button>
  </div>
  <div class="tab-content">
    <div id="vba">
      <p><a href="https://en.wikipedia.org/wiki/Visual_Basic_for_Applications" target="_blank">Visual Basic for Applications (VBA)</a></p>
      <p>
		I was first introduced to VBA during my first semester of college, where it was part of a formal course. 
		I quickly found it to be a powerful tool, especially for projects involving data manipulation and reporting, thanks to its tight integration with Excel. 
		I ended up using VBA extensively across many assignments and personal projects, particularly for solving 2D finite difference problems in both heat transfer and fluid flow.
        One of my favorite projects around VBA was in 2025, when I coerced VBA to call and interact with the EnergyPlus API and provide user feedback on the sheet.  So many skills I might never use again lol.
      </p>
    </div>
    <div id="vbnet">
      <p><a href="https://en.wikipedia.org/wiki/Visual_Basic_(.NET)" target="_blank">Visual Basic .Net (VB.Net)</a></p>
      <p>
		Motivated by a desire to learn more about software development and create useful tools for fellow students and professors, I began using VB.NET extensively. 
		I developed several GUI-based applications that managed simulation workflows, including generating inputs, mining outputs, plotting results, and more. 
		I even developed the foundation heat exchanger simulation model for my PhD research in VB.Net before converting it to Fortran for implementation in EnergyPlus.
		Through this work, I gained experience with building responsive interfaces using background threads for long-running tasks, handling events, and storing configurations in the Windows registry.
		I'll also note that I took time to learn C# to round out my knowledge at this time, but did not use it for any major projects.
      </p>
    </div>
    <div id="fortran">
      <p><a href="https://en.wikipedia.org/wiki/Fortran" target="_blank">Fortran</a></p>
      <p>
		Fortran was a staple in many of my engineering courses, where we worked on a variety of projects using it. 
		I continued using Fortran beyond coursework, especially when developing simulation code and tools around the EnergyPlus ecosystem. 
		Even today, I regularly work with Fortran, as many components of EnergyPlus and its surrounding tools are still written in it.
      </p>
    </div>
    <div id="interop">
      <p><a href="https://en.wikipedia.org/wiki/Language_interoperability" target="_blank">Language Interop</a></p>
      <p>
		My first significant experience with language interoperability came when I attempted to have a VBA program call a Fortran-based library. 
		Successfully marshalling data between VBA and Fortran required a solid understanding of library and API structures, as well as the underlying data types and calling conventions used by each language.
      </p>
    </div>
    <div id="latex">
      <p><a href="https://en.wikipedia.org/wiki/LaTeX" target="_blank">LaTeX</a></p>
      <p>
		I began using LaTeX as my primary document language for all technical work, class homework, and projects. 
		LaTeX was also the foundation for my thesis and dissertation, and I played a key role in converting the EnergyPlus documentation from Microsoft Word to LaTeX.
      </p>
    </div>
  </div>
</div>
{% endraw %}


## 2010s to Present

{% raw %}
<div class="tab-panel">
  <div class="tab-buttons">
    <button data-tab="ruby">Ruby</button>
    <button data-tab="python">Python</button>
    <button data-tab="c">C/C++</button>
    <button data-tab="c_sharp">C#</button>
    <button data-tab="modelica">Modelica</button>
    <button data-tab="interop2">Interop (2)</button>
  </div>
  <div class="tab-content">
    <div id="ruby">
      <p><a href="https://en.wikipedia.org/wiki/Ruby_(programming_language)" target="_blank">Ruby</a></p>
      <p>
		I first experimented with Ruby during my graduate research but began using it extensively once I started working at NREL. 
		I developed a translator that converted manufacturers’ mechanical equipment data into OpenStudio and EnergyPlus input files. 
		I continue to use Ruby today to run the EnergyPlus continuous integration system, which is based on a fork of Decent CI.
      </p>
    </div>
    <div id="python">
      <p><a href="https://python.org" target="_blank">Python</a></p>
      <p>
		For well over a decade, I have extensively used Python for countless projects. 
		I embedded a Python interpreter inside EnergyPlus to develop the PythonPlugin system and created a Python API around EnergyPlus to enable new workflows. 
		Additionally, I learned how to build and deploy Django web servers using Python and have even debugged issues deep inside CPython’s implementation.
      </p>
    </div>
    <div id="c">
      <p><a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a> / <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank">C++</a></p>
      <p>
		Although I first used C and C++ in college, my involvement deepened significantly during the transition of EnergyPlus from Fortran to C++. 
		I led numerous training sessions for the development team and have since undertaken extensive refactoring efforts to leverage modern C++ features. 
		Today, I use C++ daily for EnergyPlus development and frequently assist other developers by answering questions related to defects and new features.
      </p>
    </div>
    <div id="c_sharp">
      <p><a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank">C#</a></p>
      <p>
		I briefly touched C# back when I was learning VB.Net, but at the time did not have a major need to develop in the language, so it was set aside.
        In 2025, I started working on C# projects again at Trane.
        In addition to just coming up to speed on them, I am now gaining an understanding of the package ecosystem and build workflows.
      </p>
    </div>
    <div id="modelica">
      <p><a href="https://en.wikipedia.org/wiki/Modelica" target="_blank">Modelica</a></p>
      <p>
		I attended multiple training sessions on using the Modelica language, focusing on how to utilize it for building science applications.
		I was highly intrigued at how the language integrated aspects such as documentation, icons, and mathematical operations, right into the language specification itself.
		When researching our psychrometric chamber design at Oklahoma State University, I used Modelica to perform some airflow and surface heat transfer calculations.
      </p>
    </div>
    <div id="interop2">
      <p><a href="https://en.wikipedia.org/wiki/Language_interoperability" target="_blank">Language Interop</a></p>
      <p>
		As the author of the EnergyPlus C/Python API and Python Plugin System, I developed an intimate understanding of how to marshal data between C/C++ and Python. 
		On several occasions, I have debugged deep within the CPython implementation to diagnose how data is managed inside Python’s runtime environment.
      </p>
    </div>
  </div>
</div>
{% endraw %}
