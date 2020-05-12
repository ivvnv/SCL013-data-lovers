import { houseG, houseS, houseR, houseH, san } from '../src/data';
import harryData from '../src/data/potter/potter'

describe("houseG", () => {
  test("returns characters from Gryffindor", () => {
    const input = [
      { name: 'Harry Potter', house: 'Gryffindor' },
      { name: 'Hermione Granger', house: 'Gryffindor' },
      { name: 'Draco Malfoy', house: 'Slytherin' }
    ];

    const output = [
      { name: 'Harry Potter', house: 'Gryffindor' },
      { name: 'Hermione Granger', house: 'Gryffindor' }
    ];

    expect(houseG(input, harryData)).toEqual(output);

  });
});

describe("houseS", () => {
  test("returns characters from Slytherin", () => {
    const input = [
      { name: 'Harry Potter', house: 'Gryffindor' },
      { name: 'Hermione Granger', house: 'Gryffindor' },
      { name: 'Draco Malfoy', house: 'Slytherin' }
    ];

    const output = [
      { name: 'Draco Malfoy', house: 'Slytherin' }
    ];

    expect(houseS(input, harryData)).toEqual(output);

  });
});

describe("houseR", () => {
  test("returns characters from Ravenclaw", () => {
    const input = [
      { name: 'Cho Chang', house: 'Ravenclaw' },
      { name: 'Luna Lovegood', house: 'Ravenclaw' },
      { name: 'Neville Longbottom', house: 'Gryffindor' }
    ];

    const output = [
      { name: 'Cho Chang', house: 'Ravenclaw' },
      { name: 'Luna Lovegood', house: 'Ravenclaw' }
    ];

    expect(houseR(input, harryData)).toEqual(output);

  });
});

describe("houseH", () => {
  test("returns characters from Hufflepuff", () => {
    const input = [
      { name: 'Cho Chang', house: 'Ravenclaw' },
      { name: 'Cedric Diggory', house: 'Hufflepuff' },
      { name: 'Argus Filch', house: '' }
    ];

    const output = [
      { name: 'Cedric Diggory', house: 'Hufflepuff' },
    ];

    expect(houseH(input, harryData)).toEqual(output);

  });
});

describe("san", () => {
  test("filter that returns characters that have pure-blood ancestry", () => {
    const input = [
      { name: 'Harry Potter', ancestry: 'half-blood' },
      { name: 'Hermione Granger', ancestry: 'muggleborn' },
      { name: 'Draco Malfoy', ancestry: 'pure-blood' }
    ];

    const output = [
      { name: 'Draco Malfoy', ancestry: 'pure-blood' }
    ];

    expect(san(input, harryData)).toEqual(output);

  });
});