export const fetchProperties = async () => {
    const response =  await fetch("/property.json");
    const data = await response.json();
    return data;
}
