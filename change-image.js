function goNext(imgArr, imgElem, imgCnt){
  var numImgs = imgArr.length;
  for (var i = 0; i < numImgs; i++){
    if (imgElem.src === imgArr[i]){
      var imgIndx = (i+1)%numImgs;
      imgElem.src = imgArr[imgIndx];
      imgCnt.innerHTML = (imgIndx+1) + " / " + numImgs;
      return;
    }
  }
}

function goBack(imgArr, imgElem, imgCnt){
  var numImgs = imgArr.length;
  var newI;
  for (var i = 0; i < numImgs; i++){
    if (imgElem.src === imgArr[i]){
      if (i === 0){
        newI = numImgs;
      } else {
        newI = i;
      }
      imgElem.src = imgArr[newI-1];
      imgCnt.innerHTML = (newI) + " / " + numImgs;
      return;
    }
  }
}