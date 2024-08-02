type Variables = {
  [key: string]: string[];
};

type Combination = {
  [key: string]: string;
};

export const generateVariants = (
  variables: Variables
): { [key: string]: Combination } => {
  const result: { [key: string]: Combination } = {};

  // Helper function to generate combinations recursively
  function generateCombinations(
    currentCombination: Combination,
    keys: string[],
    index: number
  ) {
    if (index === keys.length) {
      // All properties have been processed, save the combination
      const combinationName = keys
        .map(
          (key) =>
            currentCombination[key].charAt(0).toUpperCase() +
            currentCombination[key].slice(1)
        )
        .join("");
      result[combinationName] = { ...currentCombination };
      return;
    }

    const key = keys[index];
    for (const value of variables[key]) {
      currentCombination[key] = value;
      generateCombinations(currentCombination, keys, index + 1);
    }
  }

  const keys = Object.keys(variables);
  generateCombinations({}, keys, 0);

  return result;
};
