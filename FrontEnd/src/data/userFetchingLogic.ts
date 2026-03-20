import { BackendURL } from "./backendURL";

export async function GetCustomerAge(name: string): Promise<number> {

    const response = await fetch(`${BackendURL}/customerage/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: number = await response.json();

    return data;
}
