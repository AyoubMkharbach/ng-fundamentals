/*
  private restrictedWords(formControl: FormControl): { [key: string]: any}{
    // We can change indexOf with includes without the test !== -1
    return formControl.value.indexOf('foo') !== -1 ? {'restrictedWords': 'foo'} : null
  }
   */

import {FormControl} from '@angular/forms';

export function restrictedWords(words) {
  return (control: FormControl): { [key: string]: any} => {
    if (!words) { return null; }

    const invalidWords = words
      .map(word => control.value.indexOf(word) !== -1 ? word : null)
      .filter(word => word != null);

    return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : null;
  };
}
