module.exports = function check(str, bracketsConfig) {
  let a=str.split("");

  for (let i=0; i<bracketsConfig.length; i++) {
    let b=bracketsConfig[i];
    for (let k=0; k<a.length; k++) {
      if (a[k]===b[0]&&a[k+1]===b[1]){
      a.splice(k,2);k--;i=-1;
      if (!a.length){return true}
    }}}

return false;
}
