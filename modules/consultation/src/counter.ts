export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}2`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
