import API_CLIENT from "../hooks/useApi";
import cors from "cors";

// http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=XXXXXXXXXXXXXXXXXXXXXXX&steamids=76561197960435530
/* http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=04AEF6D4639DE1B10F95A109A1B51C51&steamids=76561198120292090 */

type PageableProps = {
   page: number;
   linesPerPage?: any;
}

//const key = '04AEF6D4639DE1B10F95A109A1B51C51';

async function findUser(key: string, steamid: string) {
    const response = await API_CLIENT.get(`?key=${key}&steamids=${steamid}`);
    return response;
}

export { findUser };
