import Enum from '@enterwell/enum-helper';

/**
 * Genres enum data.
 */
const genresData = [
  { value: 0, name: "RNB", label: "R'n'B" },
  { value: 1, name: "POP", label: "Pop" },
  { value: 2, name: "COUNTRY", label: "Country" }
];

/**
 * Genres enum object.
 */
const genresEnum = new Enum(genresData);

export default genresEnum;