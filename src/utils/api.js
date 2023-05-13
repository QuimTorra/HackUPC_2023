import Constants from "expo-constants";

export default async function getUser(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": Constants.expoConfig.extra.apiKey,
      Authorization: "bearer " + Constants.expoConfig.extra.userToken,
    },
  };

  return await fetch(
    `https://int.strandscloud.com/fs-api/users/${id}`,
    options
  );
}
