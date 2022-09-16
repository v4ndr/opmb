/*

*/
// in node_modules/youtube-audio-stream/node_modules/ytdl-core/lib/sig.js

// const extractNCode = () => {
//   let functionName = utils.between(body, `&&(b=a.get("n"))&&(b=`, `(b)`);
//   if (functionName.includes('[')) functionName = utils.between(body, `${functionName.split('[')[0]}=[`, `]`);
//   if (functionName && functionName.length) {
//     const functionStart = `${functionName}=function(a)`;
//     const ndx = body.indexOf(functionStart);
//     if (ndx >= 0) {
//       const subBody = body.slice(ndx + functionStart.length);
//       const functionBody = `var ${functionStart}${utils.cutAfterJS(subBody)};${functionName}(ncode);`;
//       functions.push(functionBody);
//     }
//   }
// };

const extractNCode = () => {
  let functionName = utils.between(body, '&&(b=a.get("n"))&&(b=', '(b)');
  if (functionName.includes('[')) functionName = utils.between(body, `${functionName.split('[')[0]}=[`, ']');
  if (functionName && functionName.length) {
    const functionStart = `${functionName}=function(a)`;
    const ndx = body.indexOf(functionStart);
    if (ndx >= 0) {
      const end = body.indexOf('.join("")};', ndx);
      const subBody = body.slice(ndx, end);
      const functionBody = `${subBody}.join("")};${functionName}(ncode);`;
      functions.push(functionBody);
    }
  }
};

// update to 4.10.1 ?
