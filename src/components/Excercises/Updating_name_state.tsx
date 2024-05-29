import { useState } from "react";

// using state to update `Player Name`  
const Updating_name_state: React.FC = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Mario"
        }
    });

    const handleClick = () => {
        // `...` spread operator to copy/reference the game object, inside it the player object
        //  we use `...` again to load player object and then update the name property
        setGame({ ...game, player: { ...game.player, name: "Luigi" } })
    }
    return <div></div>

}

export default Updating_name_state