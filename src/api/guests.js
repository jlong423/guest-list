import { API } from "../constants";

export async function getGuests() {
  try {
    const response = await fetch(API + "/guests");
    const result = await response.json();
    return result.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getGuest(id) {
  try {
    const response = await fetch(API + "/guests/" + id);
    const result = await response.json();
    return result.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
