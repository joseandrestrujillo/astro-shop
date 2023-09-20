export function setOnClickHandle (querySelector: string, callback: (event: MouseEvent) => void): void {
  const element: HTMLElement = getDomElementOrThrow(querySelector)
  element.addEventListener('click', callback)
}

export function addChild (querySelector: string, element: HTMLElement): void {
  const parent: HTMLElement = getDomElementOrThrow(querySelector)

  parent.appendChild(element)
}

export function setChildren (querySelector: string, elements: HTMLElement[]): void {
  const parent: HTMLElement = getDomElementOrThrow(querySelector)

  parent.innerHTML = ''
  elements.forEach(element => { addChild(querySelector, element) })
}

export function getDomElementOrThrow<T extends HTMLElement = HTMLElement> (querySelector: string): T {
  const element: T | null = document.querySelector<T>(querySelector)

  if (element != null) {
    return element
  } else {
    throw new Error('There are not elements that matches with ' + querySelector)
  }
}
