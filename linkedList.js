function linkedList() {
  let head;

  function append(value) {
    if (!head) {
      head = node(value);
    } else {
      let currentNode = head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = node(value);
    }
  }

  function prepend(value) {
    let newNode = node(value);
    newNode.nextNode = head;
    head = newNode;
  }

  function size() {
    let size = 0;
    let currentNode = head;
    while (currentNode) {
      size++;
      currentNode = currentNode.nextNode;
    }
    return size;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    if (!head) {
      return null;
    } else {
      let currentNode = head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }

  function at(index) {
    if (!head) {
      return null;
    } else {
      let currentNode = head;
      for (let i = 0; i < index; i++) {
        if (currentNode.nextNode === null) {
          return null;
        }
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }

  function pop() {
    if (!head) {
      return null;
    } else {
      let currentNode = head;
      let previousNode;
      while (currentNode.nextNode !== null) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }
      previousNode.nextNode = null;
      return currentNode;
    }
  }

  function contains(value) {
    if (!head) {
      return false;
    } else {
      let currentNode = head;
      while (currentNode) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      return false
    }
  }

  function find(value) {
    let currentNode = head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      } else {
        currentNode = currentNode.nextNode;
        index++;
      }
    }
    return null
  }

  function toString() {
    if (!head) {
      throw new Error("list is empty!");
    } else {
      let currentNode = head;
      let nodes = "";
      while (currentNode.nextNode !== null) {
        nodes += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      nodes += `( ${currentNode.value} ) -> null`;
      return nodes;
    }
  }

  function insertAt(value, index) {
    if (!head) {
      throw new Error("list is empty!");
    } else {
      let currentNode = head;
      let previousNode;
      let i = 0;
      for (i; i < index; i++) {
        if (currentNode.nextNode === null) {
          throw new Error("index is higher than list length!");
        }
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }
      const newNode = node(value);
      previousNode.nextNode = newNode;
      newNode.nextNode = currentNode;
    }
  }

  function removeAt(index) {
    if (!head) {
      throw new Error("list is empty!");
    }
    if (index === 0 && head.nextNode === null) {
      head = null;
      return;
    } else if (index === 0 && head.nextNode !== null) {
      head = head.nextNode;
      return;
    }
    let currentNode = head;
    let previousNode;
    let i = 0;
    for (i; i < index; i++) {
      if (currentNode.nextNode === null) {
        throw new Error("index is higher than list length!");
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = currentNode.nextNode;
  }

  return {
    append,
    prepend,
    size,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
    toString,
  };
}

function node(value = null) {
  let nextNode = null;
  return { value, nextNode };
}

export default linkedList;
