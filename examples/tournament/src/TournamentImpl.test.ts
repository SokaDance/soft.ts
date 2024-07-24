// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

import { describe, expect, test } from "vitest"
import deepEqual from "deep-equal"
import { anything, capture, instance, mock, reset, verify, when } from "ts-mockito"
import * as ecore from "@masagroup/ecore"
import {
    Group,
    Match,
    NamedElement,
    Team,
    TournamentConstants,
    TournamentImpl,
    getTournamentPackage
} from "./internal.js"

interface GroupInternal extends Group, ecore.EObjectInternal {}
interface MatchInternal extends Match, ecore.EObjectInternal {}
interface TeamInternal extends Team, ecore.EObjectInternal {}

describe("TournamentImpl", () => {
    test("eStaticClass", () => {
        let o = new TournamentImpl()
        expect(o.eStaticClass()).toBe(getTournamentPackage().getTournament())
    })

    test("getGroups", () => {
        let o = new TournamentImpl()
        expect(o.getGroups()).not.toBeNull()
    })

    test("getMatches", () => {
        let o = new TournamentImpl()
        expect(o.getMatches()).not.toBeNull()
    })

    test("getTeams", () => {
        let o = new TournamentImpl()
        expect(o.getTeams()).not.toBeNull()
    })

    test("eGetFromID", () => {
        let o = new TournamentImpl()
        expect(() => o.eGetFromID(-1, true)).toThrow(Error)
        expect(o.eGetFromID(TournamentConstants.TOURNAMENT__GROUPS, true)).toStrictEqual(o.getGroups())
        expect(
            deepEqual(
                o.eGetFromID(TournamentConstants.TOURNAMENT__GROUPS, false),
                (o.getGroups() as ecore.EObjectList<Group>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(TournamentConstants.TOURNAMENT__MATCHES, true)).toStrictEqual(o.getMatches())
        expect(
            deepEqual(
                o.eGetFromID(TournamentConstants.TOURNAMENT__MATCHES, false),
                (o.getMatches() as ecore.EObjectList<Match>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(TournamentConstants.TOURNAMENT__TEAMS, true)).toStrictEqual(o.getTeams())
        expect(
            deepEqual(
                o.eGetFromID(TournamentConstants.TOURNAMENT__TEAMS, false),
                (o.getTeams() as ecore.EObjectList<Team>).getUnResolvedList()
            )
        ).toBeTruthy()
    })

    test("eSetFromID", () => {
        let o = new TournamentImpl()
        expect(() => o.eSetFromID(-1, null)).toThrow(Error)
        {
            // list with a value
            let mockValue = mock<GroupInternal>()
            let value = instance(mockValue)
            let l = new ecore.ImmutableEList<Group>([value])
            when(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - TournamentConstants.TOURNAMENT__GROUPS,
                    anything()
                )
            ).thenReturn(null)

            // set list with new contents
            o.eSetFromID(TournamentConstants.TOURNAMENT__GROUPS, l)
            // checks
            expect(o.getGroups().size()).toBe(1)
            expect(o.getGroups().get(0)).toBe(value)
            verify(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - TournamentConstants.TOURNAMENT__GROUPS,
                    anything()
                )
            ).once()
        }

        {
            // list with a value
            let mockValue = mock<MatchInternal>()
            let value = instance(mockValue)
            let l = new ecore.ImmutableEList<Match>([value])
            when(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - TournamentConstants.TOURNAMENT__MATCHES,
                    anything()
                )
            ).thenReturn(null)

            // set list with new contents
            o.eSetFromID(TournamentConstants.TOURNAMENT__MATCHES, l)
            // checks
            expect(o.getMatches().size()).toBe(1)
            expect(o.getMatches().get(0)).toBe(value)
            verify(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - TournamentConstants.TOURNAMENT__MATCHES,
                    anything()
                )
            ).once()
        }

        {
            // list with a value
            let mockValue = mock<TeamInternal>()
            let value = instance(mockValue)
            let l = new ecore.ImmutableEList<Team>([value])
            when(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - TournamentConstants.TOURNAMENT__TEAMS,
                    anything()
                )
            ).thenReturn(null)

            // set list with new contents
            o.eSetFromID(TournamentConstants.TOURNAMENT__TEAMS, l)
            // checks
            expect(o.getTeams().size()).toBe(1)
            expect(o.getTeams().get(0)).toBe(value)
            verify(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - TournamentConstants.TOURNAMENT__TEAMS,
                    anything()
                )
            ).once()
        }
    })

    test("eIsSetFromID", () => {
        let o = new TournamentImpl()
        expect(() => o.eIsSetFromID(-1)).toThrow(Error)
        expect(o.eIsSetFromID(TournamentConstants.TOURNAMENT__GROUPS)).toBeFalsy()
        expect(o.eIsSetFromID(TournamentConstants.TOURNAMENT__MATCHES)).toBeFalsy()
        expect(o.eIsSetFromID(TournamentConstants.TOURNAMENT__TEAMS)).toBeFalsy()
    })

    test("eUnsetFromID", () => {
        let o = new TournamentImpl()
        expect(() => o.eUnsetFromID(-1)).toThrow(Error)
        {
            o.eUnsetFromID(TournamentConstants.TOURNAMENT__GROUPS)
            let v = o.eGetFromID(TournamentConstants.TOURNAMENT__GROUPS, false)
            expect(v).not.toBeNull()
            let l = v as ecore.EList<Group>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(TournamentConstants.TOURNAMENT__MATCHES)
            let v = o.eGetFromID(TournamentConstants.TOURNAMENT__MATCHES, false)
            expect(v).not.toBeNull()
            let l = v as ecore.EList<Match>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(TournamentConstants.TOURNAMENT__TEAMS)
            let v = o.eGetFromID(TournamentConstants.TOURNAMENT__TEAMS, false)
            expect(v).not.toBeNull()
            let l = v as ecore.EList<Team>
            expect(l.isEmpty()).toBeTruthy()
        }
    })

    test("eBasicInverseRemove", () => {
        let o = new TournamentImpl()
        {
            let mockObject = mock<ecore.EObject>()
            let object = instance(mockObject)
            let mockNotifications = mock<ecore.ENotificationChain>()
            let notifications = instance(mockNotifications)
            expect(o.eBasicInverseRemove(object, -1, notifications)).toBe(notifications)
        }
        {
            // initialize list with a mock object
            let mockValue = mock<GroupInternal>()
            let value = instance(mockValue)
            when(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - TournamentConstants.TOURNAMENT__GROUPS,
                    anything()
                )
            ).thenReturn(null)

            o.getGroups().add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, TournamentConstants.TOURNAMENT__GROUPS, null)

            // check it was removed
            expect(o.getGroups().contains(value)).toBeFalsy()
        }
        {
            // initialize list with a mock object
            let mockValue = mock<MatchInternal>()
            let value = instance(mockValue)
            when(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - TournamentConstants.TOURNAMENT__MATCHES,
                    anything()
                )
            ).thenReturn(null)

            o.getMatches().add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, TournamentConstants.TOURNAMENT__MATCHES, null)

            // check it was removed
            expect(o.getMatches().contains(value)).toBeFalsy()
        }
        {
            // initialize list with a mock object
            let mockValue = mock<TeamInternal>()
            let value = instance(mockValue)
            when(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - TournamentConstants.TOURNAMENT__TEAMS,
                    anything()
                )
            ).thenReturn(null)

            o.getTeams().add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, TournamentConstants.TOURNAMENT__TEAMS, null)

            // check it was removed
            expect(o.getTeams().contains(value)).toBeFalsy()
        }
    })
})
