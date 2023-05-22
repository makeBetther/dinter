import React from "react";
import Match from "./match";

import './matchList.css';

function matchList() {
    return (
        <div className="matches">
                <Match
                    profilePic="..."
                    name="Kim"
                />
                <Match
                    profilePic="..."
                    name="Kim"
                />
                <Match
                    profilePic="..."
                    name="Kim"
                />
        </div>

    )
}

export default matchList; 