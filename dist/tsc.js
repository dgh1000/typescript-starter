function isSorted(xs) {
    for (var i = 0; i < (xs.length - 1); i++) {
        if (xs[i] > xs[i + 1]) {
            return false;
        }
    }
    return true;
}
function swap(xs, i1, i2) {
    var b = xs[i1];
    xs[i1] = xs[i2];
    xs[i2] = b;
}
function selectionSort(xs) {
    for (var i = 0; i < xs.length - 1; i++) {
        var indx = i;
        for (var j = i + 1; j < xs.length; j++) {
            if (xs[indx] > xs[j]) {
                indx = j;
            }
        }
        swap(xs, indx, i);
    }
    return xs;
}
function bubbleSortPass(xs) {
    var hasSwapped = false;
    for (var i = 0; i < xs.length - 1; i++) {
        if (xs[i] > xs[i + 1]) {
            swap(xs, i + 1, i);
            hasSwapped = true;
        }
    }
    return hasSwapped;
}
function merge(xs1, xs2) {
    var out = [];
    var i = 0;
    var j = 0;
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
function mergeSort(xs) {
    if (xs.length > 2) {
        var l1 = [];
        var l2 = [];
        for (var i = 0; i < xs.length; i++) {
            if (i < xs.length / 2)
                l1.push(xs[i]);
            else
                l2.push(xs[i]);
        }
        console.log(l1);
        console.log(l2);
        console.log("0");
        return merge(l1, l2);
    }
    else if (xs.length == 2) {
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
function bubbleSort(xs) {
    while (bubbleSortPass(xs)) {
    }
}
var xs = [9, 2, 4, 5, 1, 8, 7, 3];
bubbleSort(xs);
var xs2 = [1, 3, 5, 6];
var xs1 = [2, 4, 8, 10];
console.log(mergeSort(xs));
function bubblePass(xs) {
    throw "err";
}
function main() {
    console.log("whooee!");
}
//# sourceMappingURL=tsc.js.map