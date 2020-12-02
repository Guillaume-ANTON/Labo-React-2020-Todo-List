export const getFact = async () => {
  try {
    const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
    const factJson = await response.json();
    if (factJson) {
      return factJson.text;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
