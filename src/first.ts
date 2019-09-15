
function isSorted(xs: number[]): boolean {
    for (let i = 0; i < (xs.length-1); i++) {
        if (xs[i] > xs[i+1]) {
            return false;
        }
    }    
    return true;   
}

function selectionSort(xs: number[]): number[] {
    for (let i = 0; i < xs.length-1; i++) {
        let indx = i;
        for (let j = i+1; j < xs.length; j++) {
            if (xs[indx] > xs[j]) {
                indx = j;
            }
        }
        let b = xs[indx];
        xs[indx] = xs[i];
        xs[i] = b;
    }
    return xs;
}

console.log(selectionSort([9, 2, 4, 5, 1, 8, 7, 3]));
