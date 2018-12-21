# -*- coding: utf-8 -*-

'''

@version: 0.0.1

@Time    : 2018/12/21 上午11:58

@Author  : wangxiaoye

@Desc : ==============================================

Life is Short I Use Python!!!                      ===

If this runs wrong,don't ask me,I don't know why;  ===

If this runs right,thank god,and I don't know why. ===

Maybe the answer,my friend,is blowing in the wind. ===

======================================================

@Project : algorithm

@FileName: BinarySearchTree.py

@Software: PyCharm

@Blog    ：

'''

class Node:

    def __int__(self, data = None, left = None, right = None):
        self.data =data
        self.left = left
        self.right = right


class Tree:
    def __int__(self):
        self._root = None
    def insert(self, data):
        if not data:
            return false

        print data


        if self._root is None:
            self._root = node
        else:
            def insertNode(root):
                if root.data > data:
                    if root.left is None:
                        root.left = node
                    else:
                        insertNode(root.left)
                else:
                    if root.right is None:
                        root.right = node
                    else:
                        insertNode(root.right)

t = Tree()
t.insert(1)
print t._root

