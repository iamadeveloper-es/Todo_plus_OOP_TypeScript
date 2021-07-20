export const clearFormInpts = (...inpts: Array<HTMLInputElement>) => {
    return inpts.forEach(inpt => (inpt.value = ''));
  };
  