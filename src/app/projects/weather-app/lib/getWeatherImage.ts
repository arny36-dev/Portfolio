export function getWeatherImage(type: string): string {
    switch (type.toLowerCase()) {
        case "clear":
            return "clear.jpg";
        case "clouds":
            return "cloudy.jpg";
        case "rain":
        case "drizzle":
            return "rain.jpg";
        case "snow":
            return "snow.jpg";
        case "thunderstorm":
            return "thunderstorm.jpg";
        case "mist":
        case "fog":
        case "haze":
            return "fog.jpg";
        default:
            return "default.jpg";
    }    
}   