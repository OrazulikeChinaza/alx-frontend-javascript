export interface MajorCredits {
  credits: number;
  brand: 'major';
}

export interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// sum functions
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'major' };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'minor' };
}

// Example usage:
const m1: MajorCredits = { credits: 3, brand: 'major' };
const m2: MajorCredits = { credits: 4, brand: 'major' };
console.log(sumMajorCredits(m1, m2)); // {credits: 7, brand: 'major'}
