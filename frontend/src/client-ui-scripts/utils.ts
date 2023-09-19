export function setOnClickHandle (querySelector: string, callback: (event: MouseEvent) => void): void {
  const element: HTMLElement | null = document.querySelector(querySelector)

  if (element != null) {
    element.addEventListener('click', callback)
  } else {
    throw new Error('There are not elements that matches with ' + querySelector)
  }
}

export function addChild (querySelector: string, element: HTMLElement): void {
  const parent: HTMLElement | null = document.querySelector(querySelector)

  if (parent != null) {
    parent.appendChild(element)
  } else {
    throw new Error('There are not elements that matches with ' + querySelector)
  }
}
