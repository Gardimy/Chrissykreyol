export function generateAgentId(
  nom: string,
  prenom: string,
): string {

  const nomPart = nom
    .substring(0, 2)
    .toUpperCase();

  const prenomPart = prenom
    .substring(0, 2)
    .toUpperCase();


  const randomNumber = Math.floor(
    100000 + Math.random() * 900000
  );


  return `${nomPart}${prenomPart}${randomNumber}`;
}
