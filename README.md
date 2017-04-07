# AngularOpenWeather
Simple Angular Application using Open Weather API to display weather information for 5 days of a week

# Feature
Displays the basic weather information like minimum, maximum temprature for today and the hext 4 days.
Provides a more button which allows the user to view more details such has the wind, pressure, humidity.

# Dependency
Install the latest stable version of NodeJS (https://nodejs.org/en/).
There are no other dependencies for running the application.
In case you want to run unit tests you will have to install Karma Jasmine.

# Steps to run the application
1. Download the application and store it in a local folder.
2. Install NodeJS.
3. Setup a local server using NodeJS.
  i. Open NodeJS command prompt.
  ii. Run command npm install http-server -g .This command will setup the server for you.
  iii. Run command http-server <Location of the project folder>.
      e.g. http-server "E:\WeatherApplication"
      Wait for node to display the message - "Hit CTRL-C to stop the server". This will ensure that your server is up and running and the application
      is deployed successfully.
4. In the browser access the URL - http://127.0.0.1:8080/#/home and you should be able to see the application.

# Application Limitations -
1. Currently the application is capable of only fetching the data for Pune City.

# Application Enhancements -
1. Allow user to choose the city for which he wants to see the weather details.
2. Add tabs containing names of the major cities around the world so that the user does not have to search for that information.

