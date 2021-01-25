## Learning Through Code

Project created to learn react from the ground up

### The Brewery-TransportRefrigerationSensors

####Problem Description

Meet Baz. He works at The Brewery, a boutique micro brewery based in rural NSW, creators of 6 unique beer varieties. Baz is responsible for driving the large transport truck, each Thursday delivering goods from the brewery to a range of pubs across metropolitan Sydney.
Each beer has its own specific refrigeration needs whilst being transported:

| Beer   | Temperature |
| ------ | ----------- |
| Beer 1 | 4 °C - 6°C  |
| Beer 2 | 5 °C - 6°C  |
| Beer 3 | 4 °C - 7°C  |
| Beer 4 | 6 °C - 8°C  |
| Beer 5 | 3 °C - 5°C  |

The refrigerated truck is loaded with multiple containers, each set to a specific temperature and each containing a thermometer sensor.
While driving, Baz is alerted if any of the containers fall outside of the temperature range. Unfortunately this is common due to factors such as when unloading the truck, the heat of Sydney summer or sometimes due to human error in leaving the container doors ajar.
Instructions
Develop a solution that shows Baz the current temperature of each container and notifies him when the temperatures are out of the correct range.

## Project Installation

- run `nvm use` to ensure that you are using the correct node version (currently its v12.18.3) for this project
- When using yarn
  - install the dependencies using `yarn install`
  - To run the project, run `yarn start`
- Mock API
  - run the mock server using `yarn run mock-api`
  - to get the list of beers `curl -i http://localhost:9090/api/beers`
