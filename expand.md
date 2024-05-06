1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)

It is just more convenient and better for organization when IDs and Classes make sense.  Despite using 3 different languages, you understand what code you are manipulating without having to reread documentation.

2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?

Data attributes only you to create your own unique information.  They might be useful because default HTML, CSS, and JS values may not have the right words to accurately describe information.  In JS, you can access data attributes by ```getAttribute()```. As for things like microdata, using data attributes is similar to creating microdata as they both have customization aspects. However microdata seems to be more publicly accessible than data attributes. 

3. What is a DOM fragment? Why are they powerful?

A DOM fragment is a higher level of the DOM tree.  They are powerful because especially in JS, DOM fragments allow us to group various nodes together and have them act as a single node. 

4. What is the point of a “Virtual DOM”? What do you gain? What do you lose?

A "Virtual DOM" is typically used by frameworks like React.js to manipulating updating UI faster.  By using a "virutal DOM", you gain faster updates of only the updated UI elements rather than updating all of the children.  However, you may lose sight of efficient code as the "virtual DOM" faciliates patching behavior.  

5. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?

This is how class attributes in JS work because the object returned is a list of elements.  Therefore, to access a single element, you need the bracket to specify the index in the list.  

6. What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?
Both functions can execute the same actions "on click"; however, onClick() only writes for one event. That means we can not have multiple onClick() statements because each one will be overridden.  An advantage to onClick() is that it works in JS and HTML unlike addEventListener() which only works in JS.  
