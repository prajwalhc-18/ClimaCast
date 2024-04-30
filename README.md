# ReactForecast

ReactForecast is a dynamic weather forecasting application built using React. It provides users with up-to-date weather information for various locations around the world, allowing them to plan their activities accordingly.

## Features

### 1. Current Weather Display
- View current weather conditions, including temperature, humidity, wind speed, and weather icon.

### 2. Forecast
- Check hourly, daily, and weekly weather forecasts for selected locations.

### 3. Location Search
- Search for weather forecasts for specific cities or locations.

### 4. Responsive Design
- Fully responsive design ensures a seamless experience across desktop, tablet, and mobile devices.

### 5. Real-time Updates
- Automatic updates ensure users have the latest weather information at their fingertips.

## Technologies Used

ReactForecast is built using the following technologies:

- **React**: Frontend library for building user interfaces.
- **React Router**: For managing navigation within the application.
- **CSS**: Styling and layout of components.
- **Axios**: Promise-based HTTP client for making API requests.
- **Weather API Integration**: Integration with the OpenWeatherMap API to fetch weather data.

## Architecture Overview

ReactForecast follows a component-based architecture:

- **Components**: React components are used to encapsulate different parts of the user interface, such as the current weather display, forecast display, and search functionality.
- **State Management**: React's useState and useContext hooks are used for managing component state, including weather data and user preferences.
- **Routing**: React Router is used for client-side routing to navigate between different pages or views within the application.

## Getting Started

To get started with ReactForecast, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/ReactForecast.git
    ```

2. Install dependencies:

    ```bash
    cd ReactForecast
    npm install
    ```

3. Obtain an API key from OpenWeatherMap by signing up at [OpenWeatherMap](https://openweathermap.org/).

4. Create a `.env` file in the root directory and add your API key:

    ```plaintext
    REACT_APP_WEATHER_API_KEY=your-api-key
    ```

5. Start the development server:

    ```bash
    npm start
    ```

6. Open `http://localhost:3000` in your web browser to view the application.

## Contributing

Contributions are welcome! If you encounter any bugs or have suggestions for new features, feel free to submit pull requests or open issues.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

