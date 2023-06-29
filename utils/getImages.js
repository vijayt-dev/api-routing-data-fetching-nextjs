export async function getImage() {
  const image = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await image.json();
  return data;
}
