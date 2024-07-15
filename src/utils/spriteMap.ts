interface Sprite {
  imgUrl: string;
  spriteName: string;
}

function getCompleteUrl(imgName: string, animated = true) {
  const baseUrl = "src/assets/sprites";

  return `${baseUrl}/${imgName}.${animated ? "gif" : "png"}`;
}

const spriteArray: Sprite[] = [
  { imgUrl: getCompleteUrl("AnnoyingDog"), spriteName: "Annoying Dog" },
  { imgUrl: getCompleteUrl("AsgoreDreemurr"), spriteName: "Asgore Dreemurr" },
  { imgUrl: getCompleteUrl("AsrielDreemurr"), spriteName: "Asriel Dreemurr" },
  { imgUrl: getCompleteUrl("Astigmatism"), spriteName: "Astigmatism" },
  { imgUrl: getCompleteUrl("Chilldrake"), spriteName: "Chilldrake" },
  { imgUrl: getCompleteUrl("Doggo"), spriteName: "Doggo" },
  { imgUrl: getCompleteUrl("Dogi"), spriteName: "Dogi" },
  { imgUrl: getCompleteUrl("Endogeny"), spriteName: "Endogeny" },
  { imgUrl: getCompleteUrl("Everyman"), spriteName: "Everyman" },
  { imgUrl: getCompleteUrl("FinalFroggit"), spriteName: "Final Froggit" },
  { imgUrl: getCompleteUrl("Flowey"), spriteName: "Flowey" },
  { imgUrl: getCompleteUrl("Froggit"), spriteName: "Froggit" },
  { imgUrl: getCompleteUrl("Glyde"), spriteName: "Glyde" },
  { imgUrl: getCompleteUrl("Gyftrot"), spriteName: "Gyftrot" },
  { imgUrl: getCompleteUrl("IceCap"), spriteName: "Ice Cap" },
  { imgUrl: getCompleteUrl("Jerry"), spriteName: "Jerry" },
  { imgUrl: getCompleteUrl("KnightKnight"), spriteName: "Knight Knight" },
  { imgUrl: getCompleteUrl("LemonBread"), spriteName: "Lemon Bread" },
  { imgUrl: getCompleteUrl("LesserDog"), spriteName: "Lesser Dog" },
  { imgUrl: getCompleteUrl("Loox"), spriteName: "Loox" },
  { imgUrl: getCompleteUrl("MadDummy"), spriteName: "Mad Dummy" },
  { imgUrl: getCompleteUrl("Madjick"), spriteName: "Madjick" },
  { imgUrl: getCompleteUrl("MadMewMew"), spriteName: "Mad Mew Mew" },
  { imgUrl: getCompleteUrl("Memoryhead"), spriteName: "Memoryhead" },
  { imgUrl: getCompleteUrl("MettatonEX"), spriteName: "Mettaton EX" },
  { imgUrl: getCompleteUrl("Migosp"), spriteName: "Migosp" },
  { imgUrl: getCompleteUrl("Moldbygg"), spriteName: "Moldbygg" },
  { imgUrl: getCompleteUrl("Moldessa"), spriteName: "Moldessa" },
  { imgUrl: getCompleteUrl("Moldsmal"), spriteName: "Moldsmal" },
  { imgUrl: getCompleteUrl("Muffet"), spriteName: "Muffet" },
  { imgUrl: getCompleteUrl("Napstablook"), spriteName: "Napstablook" },
  { imgUrl: getCompleteUrl("Papyrus"), spriteName: "Papyrus" },
  { imgUrl: getCompleteUrl("Parsnik"), spriteName: "Parsnik" },
  { imgUrl: getCompleteUrl("Pyrope"), spriteName: "Pyrope" },
  { imgUrl: getCompleteUrl("Reaper"), spriteName: "Reaper" },
  { imgUrl: getCompleteUrl("Sans"), spriteName: "Sans" },
  { imgUrl: getCompleteUrl("Snowdrake"), spriteName: "Snowdrake" },
  { imgUrl: getCompleteUrl("SoSorry"), spriteName: "So Sorry" },
  { imgUrl: getCompleteUrl("Temmie"), spriteName: "Temmie" },
  { imgUrl: getCompleteUrl("Tsunderplane"), spriteName: "Tsunderplane" },
  { imgUrl: getCompleteUrl("Undyne"), spriteName: "Undyne" },
  { imgUrl: getCompleteUrl("Vegetoid"), spriteName: "Vegetoid" },
  { imgUrl: getCompleteUrl("Vulkin"), spriteName: "Vulkin" },
  { imgUrl: getCompleteUrl("Whimsalot"), spriteName: "Whimsalot" },
  { imgUrl: getCompleteUrl("Whimsun"), spriteName: "Whimsun" },
  { imgUrl: getCompleteUrl("Woshua"), spriteName: "Woshua" },
  { imgUrl: getCompleteUrl("Alphys", false), spriteName: "Alphys" },
  { imgUrl: getCompleteUrl("Toriel", false), spriteName: "Toriel" },
  { imgUrl: getCompleteUrl("Aaron", false), spriteName: "Aaron" },
];

export default spriteArray;
