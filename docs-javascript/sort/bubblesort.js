class BubbleSorting {
  Cin(arr, n) {
    // //faster
    // let swapped = false;
    //create loop check lenght of index
    for (let i = 0; i < n - 1; i++) {
      console.log("Loop-i= " + i + " < " + (n - 1));

      //swap requires at least two elements.
      //  the last item , it will be unsorted if doesnt have any pair,
      for (let j = 0; j < n - i - 1; j++) {
        console.log("Loop-j= " + j + " < " + (n - i - 1));
        //check jika curr lebih besar dari next
        // jika yes, swapp
        if (arr[j] > arr[j + 1]) {
          console.log(
            "Check item pertama : " +
              arr[j] +
              " > " +
              arr[j + 1] +
              " <- last item"
          );
          let temp = arr[j];

          arr[j] = arr[j + 1];
          console.log("swapped curr = nextItem");
          arr[j + 1] = temp;
          console.log("Temp: " + arr[j + 1]);
          // swapped = true;
        }
      }
      // IF no two elements were
      // swapped by inner loop / loop pertama, then break
      // if (swapped == false) {
      //   break;
      // }
    }
  }

  Cout(arr, n) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  }
}

function main() {
  const inputArr = [2, 85, 3, 10, 1, 4];
  const n = inputArr.length;
  const bs = new BubbleSorting();
  bs.Cin(inputArr, n);
  console.log("bubble sort :");
  bs.Cout(inputArr, n);
}
main();
