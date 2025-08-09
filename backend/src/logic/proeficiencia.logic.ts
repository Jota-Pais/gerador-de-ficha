export function calculateProficiencia(nivel: number) {
if (nivel >= 1 && nivel <= 4) {
    return 2;
  }
if (nivel >= 5 && nivel <= 8) {
    return 3;
  }
if (nivel >= 9 && nivel <= 12) {
    return 4;
  }
if (nivel >= 13 && nivel <= 16) {
    return 5;
  }
if (nivel >= 17 && nivel <= 20) {
    return 6;
  }
else {
  throw new Error("Nível inválido. Deve ser entre 1 e 20.");
}


}
   