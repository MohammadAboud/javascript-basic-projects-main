# Tabs project

This project demonstrates a simple tabbed interface built using HTML, CSS, and JavaScript to display different content sections.

## Overview

The project consists of the following files:

- `index.html`: Contains the HTML structure of the tabs and content.
- `styles.css`: Stylesheet defining the appearance of the tabs and content.
- `app.js`: JavaScript file providing functionality to switch between tabs.

## HTML Structure

The HTML file (`index.html`) contains the necessary structure for the tabs and content:

- The tabs are created using `<button>` elements with respective `data-id` attributes.
- Content sections are enclosed within `<div>` elements with unique IDs corresponding to the `data-id` of the buttons.

## CSS Styles

The CSS file (`styles.css`) contains styles to enhance the visual representation of the tabs and content. Classes like `.tab-btn`, `.about-content`, `.content`, etc., define the appearance of various elements.

## JavaScript Functionality

The JavaScript file (`app.js`) handles the tab-switching functionality:

- It selects all the tab buttons and content sections.
- Attaches a click event listener to the container of the tabs.
- On click, it identifies the clicked tab using its `data-id`.
- It toggles the 'active' class among the tabs and content sections to display the relevant content based on the clicked tab.

## Usage

To use this tabs component in your project:

1. Include the `index.html`, `styles.css`, and `app.js` files in your project directory.
2. Ensure the HTML structure and classes/naming conventions match your requirements.
3. Customize the content within the tabs by modifying the text or adding additional HTML elements.

Feel free to customize the styles and functionality to suit your project needs!
