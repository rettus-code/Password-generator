# password-generator
As per the instructions the HTML and CSS documents have been untouched. 
To start with a created an object called properties to hold the properties of the password as
selected by the user, the values are all set to null until user input is provided.

generate password function called on two more functions to get user input and append the appropriate data set based on those inputs. It uses a while loop to attach returned values into a string that will stop looping once the desired length is achieved. 

![](/images/Screenshot1.png)

the define parameters 1 function simply recieves and passes user requested password length, if null inputs are provided it only returns a null output, I could have had it return a string statement or an alert for user feedback but decided it wasn't really beneficial.

the define parameters 2 takes in two parameters one to ask the appropriate prompt and the second is the data set to be added to the object if chosen to be included for the password or null values if not. 

![](/images/Screenshot3.png)

The random value retriever first randomly selects an object property to use then pulls a random value from either the string or array. It does not discriminate against object values that are null, but it will simply return a null value that does not change the values in the final string passed to the user.


![](/images/Screenshot2.png)