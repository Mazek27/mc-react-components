export interface IKeyWhitelist<T> {
  include: Array<keyof T>;
}

export interface IKeyBlacklist<T> {
  exclude: Array<keyof T>;
}

export function shallowCompareKeys<T extends object>(objA: T, objB: T, keys?: IKeyBlacklist<T> | IKeyWhitelist<T>) {
  // treat `null` and `undefined` as the same
  if (objA == null && objB == null) {
    return true;
  } else if (objA == null || objB == null) {
    return false;
  } else if (Array.isArray(objA) || Array.isArray(objB)) {
    return false;
  } else if (keys != null) {
    return _shallowCompareKeys(objA, objB, keys);
  } else {
    // shallowly compare all keys from both objects
    const keysA = Object.keys(objA) as Array<keyof T>;
    const keysB = Object.keys(objB) as Array<keyof T>;
    return (
      _shallowCompareKeys(objA, objB, {include: keysA}) && _shallowCompareKeys(objA, objB, {include: keysB})
    );
  }
}

function _shallowCompareKeys<T extends object>(objA: T, objB: T, keys: IKeyBlacklist<T> | IKeyWhitelist<T>) {
  return _filterKeys(objA, objB, keys).every(key => {
    return objA.hasOwnProperty(key) === objB.hasOwnProperty(key) && objA[key] === objB[key];
  });
}

function _filterKeys<T>(objA: T, objB: T, keys: IKeyBlacklist<T> | IKeyWhitelist<T>) {
  if (_isWhitelist(keys)) {
    return keys.include;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // merge keys from both objects into a big set for quick access
  const keySet = _arrayToObject(keysA.concat(keysB));

  // delete blacklisted keys from the key set
  keys["exclude"].forEach((key: any) => delete keySet[key]);

  // return the remaining keys as an array
  return Object.keys(keySet) as Array<keyof T>;
}

function _isWhitelist<T>(keys: any): keys is IKeyWhitelist<T> {
  return keys != null && (keys as IKeyWhitelist<T>).include != null;
}

function _arrayToObject(arr: any[]) {
  return arr.reduce((obj: any, element: any) => {
    obj[element] = true;
    return obj;
  }, {});
}

