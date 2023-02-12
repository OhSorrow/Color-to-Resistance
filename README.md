# Resistor Value Calculator

A JavaScript code that calculates the value of a resistor based on its color bands.

## Features

- Display real-time resistor value and tolerance
- Change the color of the band images based on the selected option
- Ability to select transparent band
- Four band and five band resistor value calculation

## Dependencies

- JavaScript
- HTML
- CSS

## How to run the code

1. Open the `index.html` file in a browser.
2. Select the color bands using the dropdown menus.
3. The resistor value and tolerance will be displayed real-time.

## Code structure

The code is structured as follows:

- `bandColor` and `bandValue` arrays store the color and value of the resistor bands respectively.
- `band4value` and `bandTlorans` arrays store the value multiplier for the fourth band and tolerance for the fifth band respectively.
- `selectBand1` to `selectBand5` variables store the references to the select elements for each band.
- `pic_band1` to `pic_band5` variables store the references to the picture elements for each band.
- `realTime` function calculates the resistor value based on the selected options and updates the display.
- Event listeners are added to the select elements to handle changes to the selected options and update the color of the corresponding picture elements.
