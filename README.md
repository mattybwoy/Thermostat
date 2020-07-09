# Thermostat

**Specification**

```
- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default but it can also be turned off
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

```

## Progress so far
- Have implemented fucntions for increasing and decreasing temperature along with working tests.
- Minimum temperature set to 10 and test confirmed operational.
- Power saving functionality is now defaulted to on, test for maximum temperature in power saver mode is confirmed operational with error message displayed.
- Normal mode functionality confirmed to be working, test for maximum temperature not currently operational as error message not displayed.
- Error message fixed for maximum temperatures.
- Current usage functionality and reset function added along with passing tests accordingly.
- HTML and CSS files added for user interface.

## Improvements
- Complete JQuery styling for page
- Connect interface with javascript file

## Installation

To get up and running follow below steps

- clone repository

**To view in browser**

```bash

open SpecRunner.html
open index.html

```

### Collaborators
Mattybwoy, Dhara-95, JoshuaNg2332, indisaurusrex
