import { FaUser } from "react-icons/fa";
import { HiFlag } from "react-icons/hi2";

const Player = ({ player, handleChosePlayer }) => {
    const { name, playerId, country, image, role, battingType, bowlingType, biddingPrice  } = player;
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl text-start">
                <figure>
                    <img className="w-full rounded-xl max-h-44"
                        src={image}
                        alt="players image" />
                </figure>
                <div className="space-y-3">
                    <h2 className="text-start font-bold pt-2 flex items-center gap-2"> <FaUser /> {name} </h2>
                    <div className="flex justify-between border-b pb-3">
                        <div className="flex gap-3 items-center"><HiFlag className="text-slate-500" /> {country}</div>
                        <div className="bg-slate-100 px-4 py-2 rounded-xl font-semibold">{role}</div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-start">Ratting</h3>
                    </div>

                    <div className="flex justify-between">
                        <p className="text-start font-semibold">Batting Type</p>
                        <p className="text-end text-slate-500">{battingType}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-start font-semibold">Bowling Type</p>
                        <p className="text-end text-slate-500">{bowlingType}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Price: ${biddingPrice}</p>
                        <button onClick={() =>handleChosePlayer(player)} className="btn">Choose Player</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Player;