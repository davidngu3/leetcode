# A hashset which is comprised of 1000 buckets and the hash function is key % 1000

class MyHashSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.hashset = [[] for i in range(1000)]
        

    def add(self, key: int) -> None:
        hashval = key % 1000
        if not self.contains(key):
            self.hashset[hashval].append(key)
        

    def remove(self, key: int) -> None:
        hashval = key % 1000
        self.hashset[hashval].remove(hashval)
        

    def contains(self, key: int) -> bool:
        """
        Returns true if this set contains the specified element
        """
        hashval = key % 1000
        return key in self.hashset[hashval]
        


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)