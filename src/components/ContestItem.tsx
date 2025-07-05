import React from "react"
import { TeamContest } from "./TeamContest"
import { GroupContest } from "./GroupContest"
import { Contest } from "../types"

interface ContestItemProps {
    item: Contest
    getStatusColor: (status: Contest["status"]) => string
    getStatusIcon: (status: Contest["status"]) => string
}

export const ContestItem: React.FC<ContestItemProps> = ({ item, getStatusColor, getStatusIcon }) => {
    if (item.type === "1vs1") {
        return <TeamContest contest={item} getStatusColor={getStatusColor} getStatusIcon={getStatusIcon} />
    } else {
        return <GroupContest contest={item} getStatusColor={getStatusColor} getStatusIcon={getStatusIcon} />
    }
}