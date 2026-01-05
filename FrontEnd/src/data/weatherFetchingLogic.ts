import { BackendURL } from "./backendURL";
import type { WeatherData } from "./weatherInterface";

export async function GetWeather(count: number): Promise<WeatherData[][]> {
  const allData: WeatherData[][] = [];

  for (let index = 0; index < count; index++) {
    const response = await fetch(`${BackendURL}/weatherforecast`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: WeatherData[] = await response.json();
    allData.push(data);
  }

  return allData;
}
