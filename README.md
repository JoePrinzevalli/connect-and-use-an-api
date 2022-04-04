This project practices connecting to and using an api.

This app builds a fictional company called "Awesome Startup," a distributed company with remote employees working all over the world. I'll use the Random User Generator API (https://randomuser.me/) to grab information for 12 random "employees" and use that data to build a prototype for an Awesome Startup employee directory.

This projects requests a JSON object from the API and parses data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location. Clicking the employee's image or name will open a modal window with more detailed information, such as the employee's birthday and address.