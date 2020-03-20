export const formatArray = dict => {
  const arr2 = Object.keys(dict);
  const arr3 = [];
  arr2.forEach((item, i) =>
    arr3.push(dict[arr2[i]].user.name || dict[arr2[i]].user.id)
  );
  let outStr = '';
  if (arr3.length === 1) {
    outStr = arr3[0] + ' is typing...';
    dict;
  } else if (arr3.length === 2) {
    //joins all with "and" but =no commas
    //example: "bob and sam"
    outStr = arr3.join(' and ') + ' are typing...';
  } else if (arr3.length > 2) {
    //joins all with commas, but last one gets ", and" (oxford comma!)
    //example: "bob, joe, and sam"
    outStr =
      arr3.slice(0, -1).join(', ') +
      ', and ' +
      arr3.slice(-1) +
      ' are typing...';
  }

  return outStr;
};
