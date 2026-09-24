const marathiDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

export function toMarathiDigits(value) {
  return String(value).replace(/\d/g, (d) => marathiDigits[d]);
}

export function formatYear(year, lang) {
  return lang === "mr" ? toMarathiDigits(year) : String(year);
}
