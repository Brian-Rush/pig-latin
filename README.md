# _Pig Latin Translator_

#### _Translates user input into Pig Latin, 05.03.2017_

#### By _**By Maria Del Castillo and Brian Rush**_

## Description

_This webpage translates user input into Pig Latin. It was created for an assignment teaching us about behavior-driven design (BDD)._

## Specifications:

Behavior | Input | Output
--- | --- | ---
The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels. | 3 | 3
The program adds "way" to single-letter words (beginning with a vowel). | i | iway
The program adds “way” to multiple-letter words beginning with a vowel. | at | atway
The program moves initial consonant to end of multiple-letter words beginning with a single consonant and then appends “ay” | pig | igpay
The program moves y to the end of multiple-letter words that begin with y, then appends “ay”. | yellow | ellowyay
The program moves initial consecutive consonants to end of multiple-letter words beginning with multiple consonants and then appends “ay” | drop | opdray
The program moves “qu” to end of multiple-letter words beginning with “qu” and then appends “ay” | quiet | ietquay
The program moves “qu” and preceding consonants to end of multiple-letter words in which qu is included in the initial consecutive consonant group, and then appends “ay” | squeal | ealsquay
The program splits sentences into individual words and applies all previous applicable rules to each word. | I want 1 sentence in your pretty quiet squealy example. | Iway antway 1 entencesay inway ouryay ettypray ietquay ealysquay exampleway.



## Setup/Installation Requirements

* _Download this repository_
* _Open index.html in an internet browser_

## Technologies Used

_HTML, CSS, Bootstrap, JavaScript, and jQuery._

### License

*This webpage is licensed under the MIT license*

Copyright (c) 2017 **_Maria Del Castillo, Brian Rush_**
