function isSorted(xs: number[]): boolean {
    for (let i = 0; i < (xs.length-1); i++) {
        if (xs[i] > xs[i+1]) {
            return false;
        }
    }    
    return true;   
}

function swap(xs: number[], i1: number, i2: number): void {
    let b = xs[i1];
    xs[i1] = xs[i2];
    xs[i2] = b;
}

function selectionSort(xs: number[]): number[] {
    for (let i = 0; i < xs.length-1; i++) {
        let indx = i;
        for (let j = i+1; j < xs.length; j++) {
            if (xs[indx] > xs[j]) {
                indx = j;
            }
        }
        swap(xs, indx, i);
    }
    return xs;
}

function bubbleSortPass(xs: number[]): boolean {
    let hasSwapped = false;
    for (let i = 0; i < xs.length-1; i++) {
        if (xs[i] > xs[i+1]) {
            swap(xs, i+1, i);
            hasSwapped = true;
        }
    }
    return hasSwapped;
}

function merge(xs1: number[], xs2: number[]): number[] {
    let out = []; 
    let i = 0;
    let j = 0;
    while (i < xs1.length && j < xs2.length) {
        if (xs1[i] < xs2[j]) {
            out.push(xs1[i]);
            if (i < xs1.length)
                i++;
        }
        else if (xs2[j] < xs1[i]) {
            out.push(xs2[j]);
            if (j < xs2.length)
                j++;
        }
    }
    return out;
}


function mergeSort(xs: number[]): number[] {
    if (xs.length > 2) {
        let l1: number[] = [];
        let l2: number[] = [];
        for(let i = 0; i < xs.length; i++) {
            if (i < xs.length/2)
                l1.push(xs[i]);
            else
                l2.push(xs[i]);
        }
        return merge(l1, l2);
    }

    
    else if (xs.length == 2)  {
        if (xs[0] > xs[1]) {
            swap(xs, 0, 1);
            return xs;
        }
    }

    else if (xs.length == 1) {
        return xs;
    }

    else {
        return [];
    }
}
    
function bubbleSort(xs: number[]): void {
    while (bubbleSortPass(xs)) {

    }

}

let xs = [9, 2, 4, 5, 1, 8, 7, 3];
bubbleSort(xs)

let xs2 = [1, 3, 5, 6]
let xs1 = [2, 4, 8, 10]
console.log(mergeSort(xs));


