function minimumCost(arr) {
  let totalCost = 0;

  // Create a min heap of ropes
  let minHeap = [];
  for (let i = 0; i < arr.length; i++) {
    minHeap.push(arr[i]);
  }
  buildMinHeap(minHeap);

  // Repeat until there is only one rope left
  while (minHeap.length > 1) {
    // Extract the two smallest ropes
    let smallest1 = extractMin(minHeap);
    let smallest2 = extractMin(minHeap);

    // Connect the ropes and add the resulting rope to the queue
    let newRope = smallest1 + smallest2;
    totalCost += newRope;
    minHeap.push(newRope);
    heapifyUp(minHeap, minHeap.length - 1);
  }

  return totalCost;
}

function buildMinHeap(arr) {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapifyDown(arr, i);
  }
}

function extractMin(arr) {
  let min = arr[0];
  arr[0] = arr[arr.length - 1];
  arr.pop();
  heapifyDown(arr, 0);
  return min;
}

function heapifyDown(arr, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let smallest = i;
  if (left < arr.length && arr[left] < arr[smallest]) {
    smallest = left;
  }
  if (right < arr.length && arr[right] < arr[smallest]) {
    smallest = right;
  }
  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapifyDown(arr, smallest);
  }
}

function heapifyUp(arr, i) {
  let parent = Math.floor((i - 1) / 2);
  if (parent >= 0 && arr[parent] > arr[i]) {
    [arr[parent], arr[i]] = [arr[i], arr[parent]];
    heapifyUp(arr, parent);
  }
}
