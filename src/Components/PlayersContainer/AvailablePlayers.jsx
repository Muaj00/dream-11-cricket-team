import { useEffect, useState } from "react";
import Player from "./Player";
import { RiDeleteBin6Line } from "react-icons/ri";


const AvailablePlayers = ({ handleChosePlayer, isActive, chosePlayer, handleDelete}) => {
    const [availablPlayers, setAvailablePlayers] = useState([]);

    useEffect(() => {
        fetch('/player.json')
            .then(res => res.json())
            .then(data => { setAvailablePlayers(data.players) });
    }, [])
    return (
        <div>
            <div className="grid grid-cols-3 gap-5 mt-12">
                {
                    isActive && availablPlayers.map(player => <Player
                        key={player.playerId}
                        player={player}
                        handleChosePlayer={handleChosePlayer}>

                    </Player>)
                }
            </div>

            <div className=" space-y-10">
                {
                    isActive || chosePlayer.map(player =>
                        // eslint-disable-next-line react/jsx-key
                        <div className="flex-col border p-4 rounded-lg">
                            <div className="flex justify-between items-center">

                                <div className="flex items-center gap-3">
                                    <div className="">
                                        <img className="w-20 h-16 rounded-xl" src={player.image} alt="" />
                                    </div>

                                    <div>
                                        <h3 className="text-start font-bold">{player.name}</h3>
                                        <p className="text-start">{player.battingType}</p>
                                    </div>


                                </div>


                                <div className="text-end cursor-pointer" onClick={()=>handleDelete(player.playerId)}>
                                    <RiDeleteBin6Line className="text-red-800 text-lg" />
                                </div>
                            </div>


                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;