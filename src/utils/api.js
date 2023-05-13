import Constants from "expo-constants";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": Constants.expoConfig.extra.apiKey,
    Authorization: "bearer " + Constants.expoConfig.extra.userToken,
  },
};

export async function getUser(id) {
  return await fetch(
    `https://int.strandscloud.com/fs-api/users/${id}`,
    options
  );
}

export async function getProducts() {
  return await fetch("https://int.strandscloud.com/fs-api/products", options);
}
