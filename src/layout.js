function setRootFontSize() {
  let fontSize = 10;
  // You can do some RWD staff here
  const elem = document.documentElement;
  elem.style.fontSize = `${fontSize}px`;
}

setRootFontSize();