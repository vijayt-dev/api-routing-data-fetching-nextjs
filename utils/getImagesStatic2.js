export async function getImagesStatic2() {
  const image = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: { revalidate: 10 },
  });
  const data = await image.json();
  return data;
}
