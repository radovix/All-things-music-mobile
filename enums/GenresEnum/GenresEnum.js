import Enum from '@enterwell/enum-helper';

/**
 * Genres enum data.
 */
const genresData = [
  { 
    value: 0, 
    name: "RNB", 
    label: "R&B" 
  },
  { 
    value: 1, 
    name: "POP", 
    label: "Pop" 
  },
  { 
    value: 2, 
    name: "COUNTRY", 
    label: "Country" 
  },
  { 
    value: 3, 
    name: "FUNK", 
    label: "Funk" 
  },
  { 
    value: 4, 
    name: "SOUL", 
    label: "Soul" 
  },
  { 
    value: 5, 
    name: "REGGAE", 
    label: "Reggae" 
  },
  { 
    value: 6, 
    name: "HIPHOP", 
    label: "Hip Hop"
  },
  { 
    value: 7, 
    name: "ROCK", 
    label: "Rock" 
  },
  { 
    value: 8, 
    name: "RAP", 
    label: "Rap" 
  }
];

/**
 * Genres enum object.
 */
const genresEnum = new Enum(genresData);

export default genresEnum;