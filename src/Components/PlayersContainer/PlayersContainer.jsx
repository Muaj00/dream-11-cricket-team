// import AvailablePlayers from "./AvailablePlayers";
// import SelectedPlayers from "./SelectedPlayers";


const PlayersContainer = ({handlActive, isActive, chosePlayer}) => {
    return (
        <div className="flex justify-between mt-16 items-center">
            <div>
                <h1 className={`${isActive ? "text-3xl font-bold block" : "hidden"}`}>Available Players</h1>
                <h1 className={`${isActive ? "hidden" : "text-3xl font-bold block"}`}>Selected Players ({chosePlayer}/6)</h1>
            </div>

            <div className=" border rounded-lg felx">
                <div onClick={handlActive} className={`${isActive ? 'btn active': 'btn'}`}>Available</div>
                <div onClick={handlActive} className={`${isActive ? 'btn': 'active btn'}`}>Selected ({chosePlayer}) </div>
            </div>

            {/* {
                isActive ? <AvailablePlayers></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>
            } */}
        </div>
    );
};

export default PlayersContainer; 