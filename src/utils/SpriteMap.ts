function getCompleteUrl(imgName: string, animated = true) {
  const baseUrl = "../assets/sprites";

  return `${baseUrl}/${imgName}.${animated ? "gif" : "png"}`;
}

const SpriteMap = {
  "Annoying Dog": getCompleteUrl("AnnoyingDog"),
  "Asgore Dreemurr": getCompleteUrl("AsgoreDreemurr"),
  "Asriel Dreemurr": getCompleteUrl("AsrielDreemurr"),
  Astigmatism: getCompleteUrl("Astigmatism"),
  Chilldrake: getCompleteUrl("Chilldrake"),
  Doggo: getCompleteUrl("Doggo"),
  Dogi: getCompleteUrl("Dogi"),
  Endogeny: getCompleteUrl("Endogeny"),
  Everyman: getCompleteUrl("Everyman"),
  "Final Froggit": getCompleteUrl("FinalFroggit"),
  Flowey: getCompleteUrl("Flowey"),
  Froggit: getCompleteUrl("Froggit"),
  Glyde: getCompleteUrl("Glyde"),
  Gyftrot: getCompleteUrl("Gyftrot"),
  "Ice Cap": getCompleteUrl("IceCap"),
  Jerry: getCompleteUrl("Jerry"),
  "Knight Knight": getCompleteUrl("KnightKnight"),
  "Lemon Bread": getCompleteUrl("LemonBread"),
  "Lesser Dog": getCompleteUrl("LesserDog"),
  Loox: getCompleteUrl("Loox"),
  "Mad Dummy": getCompleteUrl("MadDummy"),
  Madjick: getCompleteUrl("Madjick"),
  "Mad Mew Mew": getCompleteUrl("MadMewMew"),
  Memoryhead: getCompleteUrl("Memoryhead"),
  Mettaton: getCompleteUrl("MettatonEX"),
  Migosp: getCompleteUrl("Migosp"),
  Migospel: getCompleteUrl("Migospel"),
  Moldbygg: getCompleteUrl("Moldbygg"),
  Moldessa: getCompleteUrl("Moldessa"),
  Moldsmal: getCompleteUrl("Moldsmal"),
  Muffet: getCompleteUrl("Muffet"),
  Napstablook: getCompleteUrl("Napstablook"),
  Papyrus: getCompleteUrl("Papyrus"),
  Parsnik: getCompleteUrl("Parsnik"),
  Pyrope: getCompleteUrl("Pyrope"),
  Reaper: getCompleteUrl("Reaper"),
  Sans: getCompleteUrl("Sans"),
  Snowdrake: getCompleteUrl("Snowdrake"),
  "So Sorry": getCompleteUrl("SoSorry"),
  Temmie: getCompleteUrl("Temmie"),
  Tsunderplane: getCompleteUrl("Tsunderplane"),
  Undyne: getCompleteUrl("Undyne"),
  Vegetoid: getCompleteUrl("Vegetoid"),
  Vulkin: getCompleteUrl("Vulkin"),
  Whimsalot: getCompleteUrl("Whimsalot"),
  Whimsun: getCompleteUrl("Whimsun"),
  Woshua: getCompleteUrl("Woshua"),
  Alphys: getCompleteUrl("Alphys", false),
  Toriel: getCompleteUrl("Toriel", false),
  Aaron: getCompleteUrl("Aaron", false),
};

type SpriteKey = keyof typeof SpriteMap;
const defaultSprites: SpriteKey[] = Object.keys(SpriteMap) as SpriteKey[];

export default SpriteMap;
export type { SpriteKey };
export { defaultSprites };
