var mergeTwoLists = function(list1, list2) {
    let msl = new ListNode()
    let temp = msl;
    while(list1 !== null && list2 !== null){
       if(list1.val <= list2.val ){
           temp.next = list1;
           temp = temp.next;
           list1 = list1.next
       }else{
            temp.next = list2;
           temp = temp.next;
           list2 = list2.next
           
       }
    }
    if(!list1){
       temp.next = list2;  
    }else{
         temp.next = list1;
    }
    return msl.next  
     
};