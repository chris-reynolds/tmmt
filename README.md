---
title: Software Development for Lazy Bastards
author: Chris Reynolds
rights:  Creative Commons Non-Commercial Share Alike 3.0
language: en-US
...

\pagebreak
\pagebreak

#10 Introduction
##In search of the Silver Bullet 

 Fashions come and go in software development sometimes better and sometimes worse. Just when good developers have come 
up to speed on a good development platform, the world moves on and they have to start again.

Not only do the developers have to retool, but project managers, testers, business analysts and users are caught up in 
the cost of change. Because software development is so hard, organizations put up with sub-optimal systems for many years.

We are in an age where many software solutions are crafted by hand on a particular platform, often designed by a 
business analyst with limited technical expertise. This is expensive and tedious for all, easy to get wrong and 
hard to get right.

The only way to get off this treadmill is **STOP WRITING SOLUTIONS** or perhaps I should say, write solutions as a 
last resort. 

The essence of the lazy software development approach is:

	Problem Definition x Transformation  $\approx$ Solution
	
A trivial example might be a todo list that requires a *Task* database table.

Now you might be tempted to write 'Create Table tbl_task...'.

However, if we break it into problem definition and transformation, we could get a problem definition of :
'-Store Task'

And a transformation of:
```
%For each store in  stores
  Create Table  tbl_{Store.name| lowercase }...
```
In this example, just writing *Create table* is simpler to understand and less effort. 

However, once we have a *Store* to *Create Table* transform we can use it for any number of stores, any number of 
systems and adapt it to other database engines. 

Note that the transformation includes some knowledge of the technical platform (SQL Database) and even our naming 
standards (e.g. all tables start with  'tbl_'.

Of course, we might also setup transformations for *View Task*, *Search Task*, *New Task*, *Regression Test of New Task* 
and so on.

As your repertoire of transformations increase, so does your software development velocity. In the above example, 
the transformation is known as a template or model-to-text transformation.

Now if a transformation is going to have any chance of turning out a reasonable solution, it needs a good problem 
definition. In this situation, the first and most important criterion for the problem definition is to be structured 
in a predictable manner.

The more formal and structured it is, the easier to transform. However, that makes it harder for mere humans to verify. 
Before we worry too much about transformations, let's see if we can find some reasonable way to structure a problem 
definition.


##Problem Definition

 Once upon a time, long long ago and far far away, there was a computer. It was locked up securely in a computer centre.  
It had no network. It had no terminals. It didn't even have disks. At meal times it was fed punched cards and spat out 
printed reports. If kept all its information on magnetic tapes and because the information was in the wrong order, 
it would spend most of its time, sorting and merging information between the tape drives.

Business processes were being computerized for the first time. This was done by a systems analyst who went round 
seeing how paper forms were used, where and how they were filed and who needed what reports. This person could be 
non-technical. Once the processes were documented, the Systems Designer would design a shiny new computer system. 
So one of the roles was problem oriented and the other was solution oriented.

In a modern organization where we are computerizing a process for the fourth time, we now have business analysts 
that turn out requirements documents. Because the business users are now more computer-literate, these requirements 
documents are often a combination of problem definition and solution details. 

Of course, there is no absolute line between *problem definition* and *solution design* as the web and smartphones 
intrudes on business processes 
but that shouldn't stop us from trying to express the problem in as non-technical way as possible and trying to keep 
the specifics about the implementation in a transformation.


##Refinement

 The more observant of you will have noticed the curly 'equal sign' in my formula above:

	Problem Definition x Transformation &lt;=   Solution

This curly equal sign is the symbol for *approximately equal* so a more accurate formula would be:

	Problem Definition x Transformation  + Refinement = Solution

The Delta is all the customisation that is needed after transform to provide the users with the required solution.

So now we have separated the art of software development into three core skills:
1. Problem Specification.
2. Transformation Definition.
3. Refinement


\pagebreak

##A Peek

 What does a problem definition look like? It could be a set of UML diagrams, an XML document, a JSON object or 
structured text. We don't really care as long as we can access it easily from the transformations. 
The three important aspects are that it is easy for the author to create,easy for the end user to verify and easy to 
access from the transformations.

User understandability of requirements is not a new problem at all and various people have made an attempt to provide an answer. 
The Cucumber/Gherkin people have an approach that appeals to me with their Given/When/Then structured approach 
to specifying tests that a user can validate as a useful test.
Over the last ten years or so, my preferred format has been analysis-oriented UML diagrams. However, for the purposes of 
this discussion and to keep the concepts light we shall be using structured text.
We will start with a comparatively trivial problem and then gradually elaborate.
Let start with a task that has a description, some notes, a target date and whether it is done. 
These tasks can be grouped into task groups.

###Personal Task List Definition
```
#Problem
    #Glossary
        #Record Task
            #Item Description : identifier upto 60 characters
            #Item Notes 
            #Item Target Date : optional
            #Item Done YesNo
            #Link Task Group
        #Record Task Group
            #Item Name : identifier upto 60 characters
            #Link-Many Tasks
```

###The nature of life and death
Let us discuss the sentence 'The quick brown fox jumps over the dead dog'. 

In simple terms, we have a couple of nouns 'fox' and 'dog', three adjectives 'quick', 'brown' and 'dead' and a 
verb *jumps over*.

From this we can infer that foxes have speed and colour attributes as well as a *jumps over* action, while the dog has a 
status of dead.

```
#Problem
    #Glossary
        #Record Task
            #Item Description identifier upto 60 characters
            #Item Notes 
            #Item "Target Date" optional
            #Status "Pending,In Progress,Done,Held"
                #Action Create to "Pending"
                #Action Start from "Pending,Held" to "In Progress"
                #Action Hold from "Pending,In Progress" to "Held"
                #Action Complete from "Pending,In Progress" to "Done"
                #Action Delete from "Held,Done" using question "Are you sure?"
            #Link "Task Group"
        #Record "Task Group"
            #Item Name identifier upto 60 characters
            #Link Many Tasks
```


#20 Overview
 


\pagebreak

#30 Problem Definition
 


\pagebreak

##Kipling

 "I Keep Six Honest 
 Serving Men ..." 




I KEEP six honest serving-men  
 (They taught me all I knew);  
Their names are What and Why and When   
 And How and Where and Who.  
I send them over land and sea,  
 I send them east and west;  
But after they have worked for me,  
 I give them all a rest.  
by Rudyard Kipling


#40 Transformations
##Cascading Defaults?

 DRY

One source of truth


##Simple String Transformation

 The simplest useful transformation that we are likely to meet is a function that takes a string and returns a string.
If we are dealing with an inventory problem domain, the users may refer to a "Storage Area".

Now that means as part of the solution, we may need a database table called tbl_storage_area, a Java StorageAreaDTO, 
an HTML element div-storage-area-create-form and so on.
The technical naming standards are often constrained by external technical considerations.

Rather than invent a set of functions to do likely transforms, I will be inspired by the underscore/lodash 
javascript library.
* _.camelCase('Foo Bar') becomes 'fooBar'
* _.camelCase('--foo-bar--') becomes 'fooBar'
* _.camelCase('--Foo-Bar--') becomes 'fooBar'

Not only do we have camelCase, there is also capitalize, deburr, escape, escapeRegExp, kebabCase, lowerCase,
lowerFirst, snakeCase, startCase, toLower, toUpper, trim, trimStart, trimEnd, unEscape, upperCase, upperFirst.


##The Nature of Data

 Before we can discuss transformations, we need to have a vocabulary
for describing the data that is being transformed.
The simplest form of data is a single data element that may be of type string
 or number. We may enrich that with types such as boolean, date, currency and 
 such like, however  in some sense it is a single value.
 We will call that a *simple* value.
 
If we have several of these *simple* values in an anonymous list then we 
will call it an *simple array*. 

If we have several values with names as a set of
name-value pairs, then we will call it an *object*.


If all of the values of an *object* are *simple* we will call
 it a *simple object*.

If we have several of these objects in an anonymous list then we 
will call it an *object array*.


##Transformation Types

 Model-to-Model M2M

Model-to-Text M2T

Text-to-Text T2T

###Model-toModel(M2M)

 

\pagebreak

#50 Refinement
##Callback and Event listeners
##Custom Code Markers
##Definition

 There are a number of ways of categorizing refinements but perhaps the most useful is to describe them as Early or Late. An early refinement is one that is locked in by the developers because of inadequacies or complexities of the transformation process. 
A Late refinement is one that can be done by a User expert to the running system in the style of personal or group preferences.

###EarlyorLate

 There are a number of ways of categorizing refinements but perhaps the most useful is to describe them as Early or Late. An early refinement is one that is locked in by the developers because of inadequacies or complexities of the transformation process. 
A Late refinement is one that can be done by a User expert to the running system in the style of personal or group preferences.
###Whatisit?

 A Refinement is an an adaption to a generated system that survives regeneration.
So if someone scaffolds out a system and then just edits the scaffolded source files, these changes may not survive a regeneration and so should not be considered *Refinements*.

##Inheritance
##Line Numbers
##Partial Classes
##Runtime ReConfiguration

 Property Bags for Personal and Group Preferences
Form-layout Overrides


##Search Paths

 PHP directories.


\pagebreak

#60 Patterns of Containment
