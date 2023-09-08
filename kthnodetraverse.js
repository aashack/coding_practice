class Node {
     constructor(){
        this.data = 0;
        this.left = null;
        this.right = null;
     }
}

function newNode(data) {
    var temp = new Node();
    temp.data = data;
    temp.right = null;
    temp.left = null;
    return temp;
}

function kthTraversal(root, k) {

    let curr = root;
    let Klargest = null;

    let count = 0

    while (curr != null) {

        if( curr.right === null) {
            count += 1;
            if(count === k) {
                Klargest = curr;
            }

            curr = curr.left;

        } else {

            let successor = curr.right;

            while(successor.left !== null && successor.left !== curr) {
                successor = successor.left;
            }

            if (successor.left === null) {

                successor.left === curr;

                curr = curr.right;
            } else {

                successor.left = null;

                count += 1;
                
                if(count === k) {
                    Klargest = curr;

                }

                curr = curr.left;

            }

        }
    }
    return Klargest;
}


root = newNode(4);
root.left = newNode(2);
root.right = newNode(7);
root.left.left = newNode(1);
root.left.right = newNode(3);
root.right.left = newNode(6);
root.right.right = newNode(10);

console.log(("Finding K-th largest Node in BST : " + kthTraversal(root, 2)));


/**
 *  https://www.geeksforgeeks.org/kth-largest-element-bst-using-constant-extra-space/
 * 
 *  1) Initialize Current as root.
    2) Initialize a count variable to 0.
    3) While current is not NULL :
    3.1) If current has no right child
    a) Increment count and check if count is equal to K.
        1) If count is equal to K, simply return current 
            Node as it is the Kth largest Node.
    b) Otherwise, Move to the left child of current.

    3.2) Else, here we have 2 cases:
    a) Find the inorder successor of current Node. 
        Inorder successor is the left most Node 
        in the right subtree or right child itself.
    b) If the left child of the inorder successor is NULL:
        1) Set current as the left child of its inorder 
            successor.
        2) Move current Node to its right.
    c) Else, if the threaded link between the current Node 
        and it's inorder successor already exists :
        1) Set left pointer of the inorder successor as NULL.
        2) Increment count and check if count is equal to K.
            a) If count is equal to K, simply return current
                Node as it is the Kth largest Node.

      3) Otherwise, Move current to it's left child
 */