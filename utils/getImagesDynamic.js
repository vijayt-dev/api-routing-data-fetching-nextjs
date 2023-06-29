export async function getImagesDynamic() {
  const image = await fetch("https://dog.ceo/api/breeds/image/random", {cache: "no-cache"});
  const data = await image.json();
  return data;
}
