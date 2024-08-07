// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

import * as ecore from "@masagroup/ecore"
import { Group, MatchKind, Team } from "./internal.js"

export interface Match extends ecore.EObject {
    // group
    getGroup(): Group
    getGroupAsync(): Promise<Group>
    setGroup(newGroup: Group): void

    // homeTeam
    getHomeTeam(): Team
    getHomeTeamAsync(): Promise<Team>
    setHomeTeam(newHomeTeam: Team): void

    // guestTeam
    getGuestTeam(): Team
    getGuestTeamAsync(): Promise<Team>
    setGuestTeam(newGuestTeam: Team): void

    // date
    getDate(): Date
    setDate(newDate: Date): void

    // location
    getLocation(): string
    setLocation(newLocation: string): void

    // kind
    getKind(): MatchKind
    setKind(newKind: MatchKind): void

    // result
    getResult(): string
    setResult(newResult: string): void
}
