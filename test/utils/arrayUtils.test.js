import { expect } from 'chai';
import { bingo } from 'utils/arrayUtils';
import { PHONE_WIDTH, PAD_WIDTH } from 'constants/screen';

describe('array util', () => {
  let arr;
  beforeEach(() => {
    arr = [
      { big: true },
      { big: false },
      { big: true },
      { big: false },
      { big: false },
      { big: true },
      { big: false },
      { big: false },
      { big: false },
    ];
  });

  it('should return 4 items in a array when width is phone width', () => {
    window.innerWidth = PHONE_WIDTH - 1;
    const result = bingo(arr);
    expect(result.length).to.be.equal(3);
    expect(result[0]).to.deep.equal(
      [{ big: true }, { big: false }, { big: true }, { big: false }]);
    expect(result[1]).to.deep.equal(
      [{ big: false }, { big: true }, { big: false }, { big: false }]);
    expect(result[2]).to.deep.equal([{ big: false }]);
  });

  it('should return 2 small or 1 big items in a array when width is pad width', () => {
    window.innerWidth = PAD_WIDTH - 1;
    const result = bingo(arr);
    expect(result.length).to.be.equal(7);
    expect(result[0]).to.deep.equal([{ big: true }]);
    expect(result[1]).to.deep.equal([{ big: false }]);
    expect(result[2]).to.deep.equal([{ big: true }]);
    expect(result[3]).to.deep.equal([{ big: false }, { big: false }]);
    expect(result[4]).to.deep.equal([{ big: true }]);
    expect(result[5]).to.deep.equal([{ big: false }, { big: false }]);
    expect(result[6]).to.deep.equal([{ big: false }]);
  });

  it('should return 2 small or 1 big items in a array when width is pc width', () => {
    window.innerWidth = PAD_WIDTH;
    const result = bingo(arr);
    expect(result.length).to.be.equal(4);
    expect(result[0]).to.deep.equal([{ big: true }, { big: false }]);
    expect(result[1]).to.deep.equal([{ big: true }, { big: false }]);
    expect(result[2]).to.deep.equal([{ big: false }, { big: true }]);
    expect(result[3]).to.deep.equal([{ big: false }, { big: false }, { big: false }]);
  });
});
