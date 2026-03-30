import { BackendURL } from "./backendURL";
import type { Customer } from "./userDataInterfaces";

export async function SetCustomer( customer: Customer ) {

    try {
        const payload = JSON.stringify(customer);

        const response = await fetch(`${BackendURL}/customer-set/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: payload
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response;
        console.log("Data set", data);
    }
    catch (error) {
        console.error(error)
    }
}