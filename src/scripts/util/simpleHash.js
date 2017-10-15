/* eslint-disable no-bitwise, operator-assignment */
// based on the djb2 hashing algortihm
const simpleHash = (str = '') => {
  let hash = 5381;

  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i += 1) {
    const code = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + code;
    hash = hash & hash;
  }

  return hash;
};

export default simpleHash;
