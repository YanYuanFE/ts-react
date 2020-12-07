interface ITextElement {
  type: string;
  props: {
    nodeValue: string;
    children: any[]
  }
}
function createTextElement(text: string): ITextElement {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    }
  }
}

function createElement(type: string, props: null | object, ...children: Array<object | string> ) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => {
        if(typeof child === "object") return child;
        return createTextElement(child);
      })
    }
  }
}
