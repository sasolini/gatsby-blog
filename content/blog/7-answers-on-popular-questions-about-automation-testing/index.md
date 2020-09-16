---
title: 7 answers on popular questions about automation testing
date: 2020-09-16T09:02:40.096Z
description: Mysterious automation testing full of questions and myths. We tried
  to answer on seven popular questions about automation testing to clear it up.
featuredimage: vanna-phon.jpg
tags:
  - testing
  - automation
  - coding
---
Automation testing is a popular and fast-growing direction in testing. It has many miss issues and myths and misinterpretations.

Below you can find interesting and frequently asked questions about automation testing.

## Which test cases can be automated? 
When you decide to start test automation in your project, you may ask: " What I can automate, and what can't?" It's a good question because from one side test automation increases test quality, reduces time spent on tests, and saves resources. Another side of test automation is too expensive to apply it to all cases, and sometimes there is no need to do it. There's one good advice — use test automation where humans won't cope or one mistake can lead to fatal consequences.  

Other situations when you can automate are:  

1. If you have tests that need to run often and they stay unchanged from one session to another, you should automate it. 
When you have a deal with a large amount of data, it's better to automate test cases. Solving this problem through manual testing takes a long time, and you won't avoid mistakes. 
Automate when each release or build requires testing. It can be such tests as smoke, regression, and sanity. 
 

## What is a framework in automation testing? 
The automation testing framework is a set of recommendations, guidelines, and principles created for easier and more effective work with automation testing. The framework may contain final results and goals, test libraries, coding standards, test tools, etc. 

A framework isn't a common rule, but if you implement it in your project, you'll get better results such as reducing maintenance costs and risks, increasing a team's efficiency, and test accuracy.   

There are six types of automation testing framework which you can choose according to your project needs. 

1. Linear Automation Framework. It's a basic framework, with a quick and easy workflow. A framework perfect for small application and function 
2. Modular Based Testing Framework. To implement this framework, test engineers divide the application into separate modules. Each module is tested independently. Such a system is convenient for application changes, the engineer will change only a particular module and script, but the rest of the application remains unchanged. 
3. Library Architecture Testing Framework. This framework is based on a modular one. Testers do not divide the application into test cases but into functions under the library. These functions are called during testing if required. 
4. Data-Driven Framework. When you test an application, some functions are required to be tested several times with a different set of input data. To prevent test data from being embedded in a test script, this data is stored in external databases. That is, this framework allows you to separate test cases from a data set. 
5. Keyword-Driven Framework. For this framework, engineers write a set of keywords to conduct a specific action during testing. Each set of words is connected with a particular function. 
6. Hybrid Testing Framework. It's a combination of Keyword-driven and Data-driven frameworks. 
 

## What is the best programming language for automation testing? 
Many developers agree that Python is the best programming language for automation testing. According to Stack Overflow, 73.3% of developers chose Python as one of the best programming languages. Python has plain and easy syntax, even for beginners, it has a large library of useful packages and frameworks for testing such as pytest - Python-based framework that is used to write, and executes test codes. Among other benefits of Python are supporting IDE and running the entire testing process from the command-line. 

Other languages proper for automation testing are Java, JavaScript, C#, and Ruby. 

 

## Which test cases can’t be automated? 
Despite automation testing is quick, safe and convenient some tests can't be automated. These cases include:  

- Usability testing, because it requires human participation.  
- A small number of test cases. The cost of testing automation is too high to test ten test-cases, use manual testing for it.  
Unexplored test cases. Testing automation, in this case, can lead to false results. 
- Technically limitation in testing.  
- When there are errors in the automation testing code. When you use manual testing, you can find such errors.  
- Exploratory testing. When you need to explore the functionality and conduct testing without test cases. 
 

## What is the future of testing automation? 
Experts highlight several trends in the development of automated testing: 

- In the nearest future, automation testing will develop influenced by artificial intelligence and machine learning. AI and ML can replace humans in testing. Both these technologies are developing the ability to learn, analyze situations, and act comes out of current situations. AI will get the capability to see like humans and process visual information. 
- Competition will faster grow every year, therefore Agile and DevOps will implement more readily by companies. Through such methodologies as Scrum, Kanban, Waterfall, market-entry time will get shorter.  
- Automation testing will cover all types of testing and overall lead to automatization without human control. But some experts enhance that such an approach may end up with bad consequences, and human intervention is required.  
- Automation testing will use Natural Language Processing (NLP) as one of its instruments. NLP will enable testing without writing test cases, which will save time. NLP will be able to implement automation in a simple and natural language, understandable for any team member. 

## What is the difference between manual and automation testing? 
Manual testing is performed by a testing engineer. The tester manually prepares data sets, conducts software testing, identifies bugs, and writes reports without using any tools and scripts. Manual testing may not be accurate due to human factors, take more time and resources, but some tests as usability testing you can't conduct automatically. 

Automation testing requires scripts and code for automated verify test cases. Testing engineers write code and based on this code run automation testing. This type of testing enables you to simulate complex scenarios and increase the productivity of your team. On the other hand, you can't automate all scenarios, like exploratory testing, and the cost of automatization is too high compared with manual testing. 

Thus, manual and automation testing should be performed in conjunction. 

 

## Is 100% automation testing possible? 
 Perhaps in the distant future, when artificial intelligence will teach computers to perceive and process information as a human does, full automation will be possible. Now we are limited by the technology of our time, and full automation is impossible. Computers cannot answer whether conveniently for them to use the program, or what difficulties they are experiencing, is the background contrast sufficient relative to the font, etc. 

Testing automation should focus on tasks where the code does better than a human, for example, when checking a large amount of data. Also, sometimes writing scripts for automatic testing will take longer than conducting manual testing. 