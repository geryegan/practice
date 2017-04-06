const Stack = function () {
  this.storage = '';
};

Stack.prototype.push = function (str) {
  if (this.storage.length === 0) {
    this.storage = str;
  } else { 
this.storage = `${str}+${this.storage}`;
}
};

Stack.prototype.pop = function () {
  const findBreak = (str) => {
    let target;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '+') {
        target = i;
        return target;
      }
    }
  };
  const firstBreak = findBreak(this.storage);
  let result = this.storage.substring(0, firstBreak);
  this.storage = this.storage.substring(firstBreak + 1, this.storage.length);
  if (this.storage.indexOf('+') === -1) {
    result = this.storage;
    this.storage = '';
  }
  return result;
};

Stack.prototype.size = function () {
  if (this.storage.length === 0) return 0;
  return this.storage.split('+').length;
};
