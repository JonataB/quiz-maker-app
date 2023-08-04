interface IndexedArray {
  position: number;
  value: string;
}

export const shuffle = (array: string[]): string[] => {
  return array
    .map((el: string): IndexedArray => ({ position: Math.random(), value: el }))
    .sort((a, b) => a.position - b.position)
    .map((el: IndexedArray) => el.value);
};

export const replaceHtmlEntities = (value: string) =>
  value.replace(/&#039;|&quot;|&amp;/g, (match) => {
    switch (match) {
      case '&#039;':
        return "'";
      case '&quot;':
        return '';
      case '&amp;':
        return '&';
      case '&shy;':
        return 'x';
      default:
        return match;
    }
  });
