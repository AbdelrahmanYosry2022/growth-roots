export function createFragment(html: string): DocumentFragment {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content;
}

export function qs<T extends Element = Element>(sel:string, parent:ParentNode=document):T|null { return parent.querySelector(sel) as T|null; }
export function qsa<T extends Element = Element>(sel:string, parent:ParentNode=document):T[] { return Array.from(parent.querySelectorAll(sel)) as T[]; }
