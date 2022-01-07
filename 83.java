class Solution83 {
    public static void main(String[] args) {
        ListNode83 a = new ListNode83(1);
        ListNode83 b = new ListNode83(1);
        ListNode83 c = new ListNode83(2);
        a.next = b;
        b.next = c;

        deleteDuplicates(a);
    }

    public static ListNode83 deleteDuplicates(ListNode83 head) {
        ListNode83 ret = head;

        while (head != null) {
            if (head.next != null && head.val == head.next.val) { 
                // find next non-duplicate node
                ListNode83 cont = head.next;
                while (cont != null && cont.val == head.val) {
                    cont = cont.next;
                }
                head.next = cont;
            }
            head = head.next;
        }

        return ret;
    }
}


class ListNode83 {
    int val;
    ListNode83 next;
    ListNode83() {}
    ListNode83(int val) { this.val = val; }
    ListNode83(int val, ListNode83 next) { this.val = val; this.next = next; }
}