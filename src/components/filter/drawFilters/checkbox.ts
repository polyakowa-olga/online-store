export function getInputValue(event: Event) {
  const el = event.target as HTMLElement;

 if (el.closest('.input-box')) {
           let nam: HTMLElement | null = el.closest('.input-box');

return nam ? nam.textContent : null;
}

}