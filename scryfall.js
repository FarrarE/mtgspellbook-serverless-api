import { Scryfall } from "scryfall";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
    let card = {};

    try{

        card = await Scryfall.getCard("bfz", 29);
        console.log(card.name);
        return success({ status: true });

    } catch (e){
        return failure({message:e.message});
    }
}