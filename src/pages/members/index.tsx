import { useEffect, useState } from "react";
import { Container } from "../../global/grid";
import { Body } from "../../global/styles";
import { findUser } from "../../services/SteamMemberService";
import { userMix } from "../../types/SteamIdtypes";
import { UserDTO } from "../../types/Usertypes";
import { Card, CardName, CardPicture, CardPlayer, CardStats, CardStatsName, DivStyled } from "./style";
import { theme } from "./../../global/theme";

export function Users() {

    /* const navigate = useNavigate(); */
    /* const [members, setMembers] = useState<CompanyDTO[]>([]); */
    const [members, setMember] = useState<UserDTO[]>([]);
    const [members1, setMember1] = useState<UserDTO[]>([]);
    /* const [steamid, setSteamid] = useState(""); */
    const steamid = "76561198120292090";
    const key = "04AEF6D4639DE1B10F95A109A1B51C51";

    /* async function findId() {
        const id = userMix
        setSteamid(id[0].steamid)
    } */

    async function findPage() {
        /* findId() */
        console.log(steamid);
        try {
            const response = await findUser(key, steamid);
            console.log(response);
            setMember(response.data.response.players);
            console.log(members);
        } catch (error) { }
        finally {
        }
    }

    useEffect(() => {
        findPage();
    }, []);

    return (
        <>
            <Container>
                <Body>
                    <h1>Users</h1>
                    {members.map(member =>
                        <tr key={member.realname}>
                            <CardPlayer>
                                <CardPicture><img src={member.avatarfull}></img></CardPicture>
                                <CardName className="">{member.personaname}</CardName>
                                <CardStats>
                                    <CardStatsName>{member.realname}</CardStatsName>
                                    <CardStatsName>98</CardStatsName>
                                    <CardStatsName>99</CardStatsName>
                                </CardStats>
                            </CardPlayer>
                        </tr>
                    )}
                    <DivStyled></DivStyled>
                </Body>
            </Container>
        </>
    );
}
