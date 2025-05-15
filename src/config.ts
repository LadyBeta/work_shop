import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
               " andr1we7ag0p6p3csw6e6qer6yqrrze4sfm2dxdmwkklel7rygmymjmksx3eefk",
            cw721: "andr1l5ue549mcmse6myguzxpcdr8kn3y4vdgmy0gygvqu89lp8adqgfqh9rmuv",
            name: "forray",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        },
        
      
    ],
};

export default CONFIG;
