import unittest
# Problem 1108: Defanging an IP Address
# Given a valid (IPv4) IP address, return a defanged version of that IP address.
# A defanged IP address replaces every period "." with "[.]".

class Solution:
    def defangIPaddr(self, address: str) -> str:
        return address.replace('.', '[.]')


# testing
class TestSolution(unittest.TestCase):
    def testIP(self):
        self.assertEqual(Solution().defangIPaddr('255.100.50.0'), "255[.]100[.]50[.]0")

    def testIP2(self):
        self.assertEqual(Solution().defangIPaddr('1.1.1.1'), "1[.]1[.]1[.]1")

if __name__ == '__main__':
    unittest.main()