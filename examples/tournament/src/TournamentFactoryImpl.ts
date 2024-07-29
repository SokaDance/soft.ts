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
import {
    Group,
    GroupImpl,
    Match,
    MatchImpl,
    MatchKind,
    NamedElement,
    Team,
    TeamImpl,
    Tournament,
    TournamentConstants,
    TournamentFactory,
    TournamentImpl,
    matchKindFromString,
    matchKindToString
} from "./internal.js"

export class TournamentFactoryImpl extends ecore.EFactoryExt implements TournamentFactory {
    private static _instance: TournamentFactoryImpl = null

    public static getInstance(): TournamentFactoryImpl {
        if (!this._instance) {
            this._instance = new TournamentFactoryImpl()
        }
        return this._instance
    }

    protected constructor() {
        super()
    }

    create(eClass: ecore.EClass): ecore.EObject {
        switch (eClass.getClassifierID()) {
            case TournamentConstants.TOURNAMENT:
                return this.createTournament()
            case TournamentConstants.GROUP:
                return this.createGroup()
            case TournamentConstants.TEAM:
                return this.createTeam()
            case TournamentConstants.MATCH:
                return this.createMatch()
            default:
                throw new Error(`create: ${eClass.getClassifierID()} not found`)
        }
    }

    createTournament(): Tournament {
        return new TournamentImpl()
    }

    createGroup(): Group {
        return new GroupImpl()
    }

    createTeam(): Team {
        return new TeamImpl()
    }

    createMatch(): Match {
        return new MatchImpl()
    }

    createFromString(eDataType: ecore.EDataType, literalValue: string): any {
        switch (eDataType.getClassifierID()) {
            case TournamentConstants.MATCH_KIND:
                return this.createMatchKindFromString(eDataType, literalValue)
            default:
                throw new Error(`The datatype '${eDataType.getName()}' is not a valid classifier`)
        }
    }

    convertToString(eDataType: ecore.EDataType, instanceValue: any): string {
        switch (eDataType.getClassifierID()) {
            case TournamentConstants.MATCH_KIND:
                return this.convertMatchKindToString(eDataType, instanceValue)
            default:
                throw new Error(`The datatype '${eDataType.getName()}' is not a valid classifier`)
        }
    }

    createMatchKindFromString(eDataType: ecore.EDataType, literalValue: string): any {
        return matchKindFromString(literalValue)
    }

    convertMatchKindToString(eDataType: ecore.EDataType, instanceValue: any): string {
        return matchKindToString(instanceValue as MatchKind)
    }
}
