# Overview

## Features
- Panel animation effect upon navigation
- Staggering animation effect for each project
- Custom cursor
- Hover effects for custom cursor
- Hover effects for floating images

## Demo

# Skills used
- React
- Gatsby.js
    - graphql
- SASS
- Framer motion
# Lessons Learned
- React
    - The use of ```useState``` to determine the background color of panels upon animation effect complete
- Framer motion 
    - Using the timing of animation to create an effect for panels
    ``` JavaScript
    animate={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
    exit={{ height: [0, window.innerHeight, 0], top: [null, 0, 0] }}
    ```
- Gatsby.js
    - Making static query on graphql

# Acknowledgements
With [inspiration](https://loerarchitecten.com/en/projects/), and [styling and animation technique gained](https://www.youtube.com/watch?v=qvFLjZvz5Mw&t=2732s), this project was recreated.
* About component & its styling and animation effects
* Skills component & its styling and animation effects
* Contact component & its styling and animation effects
* General modification on design and layout to fit the project's purpose

