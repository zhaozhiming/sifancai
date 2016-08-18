import { PHONE_WIDTH, PAD_WIDTH } from 'constants/screen';

function couldAdd(arr, item, maxArrLen) {
  if (arr.length < maxArrLen) return true;
  if (arr.length > maxArrLen) return false;
  if (arr.every(x => !x.big) && !item.big) return true;

  return false;
}

function transform(arr, maxArrLen) {
  const result = [];
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    if (couldAdd(tmp, arr[i], maxArrLen)) {
      tmp.push(arr[i]);
    } else {
      result.push(tmp);
      tmp = [arr[i]];
    }
  }
  result.push(tmp);
  return result;
}

export function bingo(arr) {
  const result = [];
  if (window.innerWidth < PHONE_WIDTH) {
    while (arr.length) {
      result.push(arr.splice(0, 4));
    }
    return result;
  }

  if (window.innerWidth < PAD_WIDTH) {
    return transform(arr, 1);
  }

  return transform(arr, 2);
}
