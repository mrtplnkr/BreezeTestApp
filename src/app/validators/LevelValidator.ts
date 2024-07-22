import { AbstractControl } from '@angular/forms';

// custom validator to check that two fields match
export function LevelValidator(controlName: string) {
    return (group: AbstractControl) => {
        const level = group.get('selectedLevel')?.value;
        const mathTest = group.get('mathTest');
        const aLetterTest = group.get('aLetterTest');
        if (level === 1) {
            if (mathTest?.value.length === 0 || mathTest?.value != 4) {
                mathTest?.setErrors({ MathTest: true });
            }
        } else {
            mathTest?.setErrors(null);
        };
        if (level === 2) {
            if (aLetterTest?.value.length === 0 || aLetterTest?.value.includes('a')) {
                aLetterTest.setErrors({ ALetterTest: true });
            }
        } else aLetterTest?.setErrors(null);
        return null;
    }
}