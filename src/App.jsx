import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PlayersContainer from './Components/PlayersContainer/PlayersContainer';
import AvailablePlayers from './Components/PlayersContainer/AvailablePlayers';
import SubmitForm from "./Components/SubmitForm/SubmitForm";
import Footer from "./Components/Footer/Footer";



function App() {

  // state for set Balence
  const [balence, setBalence] = useState(0);

  const handleAddRecharge = () => {
    const newBalence = balence + 850000000;
    setBalence(newBalence);
    toast.success("Credit Added To Your Account");
  }

  const handleBalence = (playerBalence) => {
    if (balence < playerBalence) {
      toast.error("Not enough money to buy this player. Claim some credit");
    }
    else {
      setBalence(balence - playerBalence)
    }
    // console.log(playerBalence);
  }

  // state for active button
  const [isActive, setActive] = useState(true);

  const handlActive = () => {
    if (isActive) {
      setActive(false)
    }
    else {
      setActive(true)
    }
  };


  // state for add Players

  const [chosePlayer, setChosePlayer] = useState([]);

  const handleDelete = (id) => {
    const remainingPlayer = chosePlayer.filter((p) => p.playerId != id);
    setChosePlayer(remainingPlayer);
    toast.warning('Player Removed!');
  }

  const handleChosePlayer = (players) => {
    console.log(chosePlayer.length);
    const isAvailable = chosePlayer.find((p) => p.playerId == players.playerId);

    if (balence == 0 || balence < players.biddingPrice) {
      toast.error("Not enough money to buy this player. Claim some credit");
    }
    else {
      if (isAvailable) {
        toast.error('Already Available in List');
      }
      else {
        handleBalence(players.biddingPrice);
        const newPlayers = [...chosePlayer, players];
        if (newPlayers.length <= 6) {
          setChosePlayer(newPlayers);
          toast.success(`Congratulations!! ${players.name} is now in your squad`);
        }
        else {
          toast.warning('You Can not add more than 6 players');
        }
      }


    }


  }
  // console.log(chosePlayer);


  return (
    <>
      <Navbar handleAddRecharge={handleAddRecharge}
        balence={balence}
      ></Navbar>

      <PlayersContainer chosePlayer={chosePlayer.length} handlActive={handlActive}
        isActive={isActive}
      ></PlayersContainer>

      <AvailablePlayers
        handleChosePlayer={handleChosePlayer}
        isActive={isActive}
        chosePlayer={chosePlayer}
        handleDelete={handleDelete}></AvailablePlayers>


      <ToastContainer position="top-center" />

      <SubmitForm></SubmitForm>

      <Footer></Footer>
    </>
  )
}

export default App
