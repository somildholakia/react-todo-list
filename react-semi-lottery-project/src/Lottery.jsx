import "./Lottery.css";
import { useState } from "react";
import { generateTicket, sum } from "./helper.js";

export default function Lottery() {

    let [ticket, setTicket] = useState(generateTicket(3));
    let isWinning = sum(ticket) === 15;


    return (

        <div>
            <h2>Lottery game</h2>

            <div className="ticket">
                <span className="ticket2">
                    {ticket[0]}
                    {ticket[1]}

                    {ticket[2]}

                </span>

            </div>
            <h3>
                {isWinning && "Congratulations,you have won"}
            </h3>
        </div>
    );
}