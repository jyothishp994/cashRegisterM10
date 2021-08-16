# cashRegisterM10

Problem Statement
Your program has currencies of Rs. 1, 5, 10, 20, 100, 500, 2000.
User enters a bill amount say Rs. 243.
User then enters cash given say Rs. 2000.
Now, help the user by telling how can he/she return the change to the customer with a minimum number of notes?
 Validate the Bill amount and Cash amount
 
# How to use?
-Calculate the change to be returned.
- amount to be returned = cash given - bill amount
- we can iterate through all the notes from the highest to the lowest denomination
- we go from highest to lowest because we want to return the change in a minimum number of notes
- notes = [2000, 500, 100, 20, 10, 5, 1]
- no of Notes of current denomination = amount to be returned / notes[i]
- amount left to be returned = current amount % notes[i]



# Programming Language:

-HTML
-CSS
-Javascript

Don't forget to leave a  ⭐  if you found this useful.
