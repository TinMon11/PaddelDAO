import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x5EFC224b8e17F8De3982B631D4Ae1cbb9dc027B4");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "PaddleDAO Membership NFT",
                description: "This NFT will give you access to PaddleDAO!",
                image: readFileSync("scripts/assets/NFT_Paddle.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();