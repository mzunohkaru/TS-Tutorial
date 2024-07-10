const SPORT_OBJ = {
  baseball: "野球",
  basketball: "バスケットボール",
  soccer: "サッカー",
} as const;
type ObjKeyType = keyof typeof SPORT_OBJ;
type ObjValType = (typeof SPORT_OBJ)[ObjKeyType];

function getTranslation(key: ObjKeyType): ObjValType {
  return SPORT_OBJ[key];
}

function getKeyFromTranslation(value: ObjValType): ObjKeyType | undefined {
  const key = (Object.keys(SPORT_OBJ) as ObjKeyType[]).find(
    (k) => SPORT_OBJ[k] === value
  );
  if (key !== undefined) {
    return key;
  }
  return undefined;
}

console.log(getTranslation("baseball"));
console.log(getTranslation("basketball"));
console.log(getKeyFromTranslation("野球"));
console.log(getKeyFromTranslation("サッカー"));
