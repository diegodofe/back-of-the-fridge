<p align="center">
  <img src="https://user-images.githubusercontent.com/63019625/215618136-732a09ab-a732-4607-a4f5-f8b5a5a84bd8.png" width="150" alt="Logo for back-of-the-fridge" />
</p>


<h1 align="center">
  Back of the Fridge
</h1>

<p align="center">
  Create a recipe using AI with whatever you've got in your fridge - <a rel="noopener noreferrer" target="_blank" href="https://back-of-the-fridge.vercel.app/">check it out here!</a> 
</p>

Back of the Fridge is a recipe website that helps users find recipes based on the ingredients they have on hand. It provides a user-friendly, efficient and easy-to-use solution for users to find recipes based on the ingredients they have on hand. Built in under 24 hours during [McHacks10](https://devpost.com/software/back-of-the-fridge?ref_content=my-projects-tab&ref_feature=my_projects)!

The front-end was built with React.js, Next.js, and TailwindCSS! The back-end was built with Python and Flask. Everything is hosted on Vercel! This repo is our web-app's front-end, so be sure to checkout our [back-end](https://github.com/arikaufman/McHack10-BackOfTheFridge-BackEnd) too! 

## Showcase

### Generating a recipe
![ezgif com-gif-maker](https://user-images.githubusercontent.com/63019625/215616051-2cd449c7-faa2-48b6-876c-8e55afc87563.gif)

### Browsing your saved recipes
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/63019625/215616833-922590ef-8539-4bf7-9777-c3eef341fd2e.gif)

## Overview

### Inspiration
The idea for the website came about when Alex was feeling hungry, but he didn't want to go to the store. He still wanted to make a dish with tzatziki, couscous, and onions, but he tried searching online for a recipe and couldn't find one that fit his specific ingredients. That's when he decided to enter the ingredients into a language model like ChatGPT and found a recipe that looked delicious!

### Details
To create a recipe using cohere, we give cohere our ingredients, then cohere returns to us a recipe title, instructions, and a list of ingredients used. We then take that title and give it to Surp API. Surp API then asks google for the top ranking images associated with that title. We pull down one of the top images and pass that up with the recipe object to the front end.

An image is uploaded to the front end, which is passed down to the backend, which asks Eden AI to analyze the image. Eden AI is an overlay of Google Cloud Vision. Google Vision API then processes the image and gives us back possible objects with predications on what these items are. We take all possible objects and match them with an internal dictionary of approved groceries and returns those back to the front end, to then be added to the ingredients list if desired.

### Challenges
Building Back of the Fridge was challenging for our team as we had to integrate several third-party services to make the website work as intended. One of the biggest challenges we faced was the time crunch, as we had to complete the project within a 24-hour tight deadline. One of the key components of the website is the integration of a natural language processing (NLP) API which helps to extract the ingredients from the user's input and match them with the appropriate recipes from our database. Integrating this API was a complex task as it required a lot of testing and fine-tuning to ensure that it was working correctly.

### What's next
We hope to turn this into a mobile application as well!
