#  Mad Libz

## What is Mad Libs? 
See [wikipedia](https://en.wikipedia.org/wiki/Mad_Libs). Yes, I know this section is short, do not skip this, **please read what Mad Libs is or the rest of this will make no sense**. In normal mad libs, you usually just insert the word, but in this version, it's more like a "fill in the blank" of an existing story.

## 

<img width="1512" alt="‏لقطة الشاشة ٢٠٢٣-٠٣-٢٤ في ١١ ٠٤ ١٩ ص" src="https://user-images.githubusercontent.com/49036484/227461048-b839a736-35df-470f-8c3a-9ec91069f1df.png">


##
<img width="448" alt="‏لقطة الشاشة ٢٠٢٣-٠٣-٢٤ في ١١ ٠٥ ٠٠ ص" src="https://user-images.githubusercontent.com/49036484/227461077-14854ed4-b533-48dd-b6d0-15622f13db40.png">


### Write a story

In `story.txt`, you'll find a brief story **that we need to replace with our own**. By the way, for the purposes of [parsing](https://en.wikipedia.org/wiki/Parsing), we're only allowed to use periods and commas as grammar.

For example:
* `Louis[n]`: normally it says Louis, but the user should replace it with a *noun*
* `went[v]`: normally it says went, but the user should replace it with a *verb*
* `[a]` for adjective...

Note that when we write a story, the period and commas should go after the part of speech, e.g., `Louis[n].` (NOT `Louis.[n]`).

### Code

In this project, we use HTML, CSS, and JS in unison in order to create a variant of a Mad Libs game with the story of your choice. 

### Demo

(https://202212-giz-ye-few.github.io/mad-libs-tech-titans/)

#### Featurs

0. **Responsiveness**: When the screen is small, the story should take the full width of the screen. When the screen is larger, as on a computer. Values "small" and "large" are up to you to decide.

1. **Flexbox**: we Use at least one flexbox.

2. **Highlighting currently focused input**: There should be three possible styles of inputs (style is a vague word here, they just need to be distinguishable to the user):
* currently highlighted input (if the user is typing in one)
* filled out input (the user has already put a word there -- might require JS here ;) )
* empty input (the user has not already put a word there).


