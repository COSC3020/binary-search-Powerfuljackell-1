//Used geeksforgeeks binary search lesson and previous code written to improve this code
function binarySearch(list, element) {
    var start = 0
    var end = list.length-1
    var mid = Math.floor((start + end)/2)
    while (start<=end){
        if(list[mid] == element){
            //while(list[mid-1] == list[mid]) mid--; //used to return "first" instance of the value's position
            if(list[0] == element) mid = 0; //worked on with Aaron Krapes to find a more efficient solution
            return mid;
        }else if(list[mid] < element){
            start = mid
        }else{
            end = mid
        }
        mid = Math.floor((start + end)/2)
    }
    return -1;
}