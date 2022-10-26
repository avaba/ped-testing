declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.pdf' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}