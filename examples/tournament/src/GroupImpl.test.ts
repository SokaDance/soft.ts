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
import { GroupImpl, NamedElement, Team, TournamentConstants, getTournamentPackage } from "./internal.js"

interface TeamInternal extends Team, ecore.EObjectInternal {}

describe("GroupImpl", () => {
    test("eStaticClass", () => {
        let o = new GroupImpl()
        expect(o.eStaticClass()).toBe(getTournamentPackage().getGroup())
    })

    test("getTeams", () => {
        let o = new GroupImpl()
        expect(o.getTeams()).not.toBeNull()
    })

    test("eGetFromID", () => {
        let o = new GroupImpl()
        expect(() => o.eGetFromID(-1, true)).toThrow(Error)
        expect(o.eGetFromID(TournamentConstants.GROUP__TEAMS, true)).toStrictEqual(o.getTeams())
        expect(
            deepEqual(
                o.eGetFromID(TournamentConstants.GROUP__TEAMS, false),
                (o.getTeams() as ecore.EObjectList<Team>).getUnResolvedList()
            )
        ).toBeTruthy()
    })

    test("eSetFromID", () => {
        let o = new GroupImpl()
        expect(() => o.eSetFromID(-1, null)).toThrow(Error)
        {
            // list with a value
            let mockValue = mock<TeamInternal>()
            let value = instance(mockValue)
            let l = new ecore.ImmutableEList<Team>([value])
            when(mockValue.eIsProxy()).thenReturn(false)
            when(mockValue.eInverseAdd(o, TournamentConstants.TEAM__GROUP, anything())).thenReturn(null)

            // set list with new contents
            o.eSetFromID(TournamentConstants.GROUP__TEAMS, l)
            // checks
            expect(o.getTeams().size()).toBe(1)
            expect(o.getTeams().get(0)).toBe(value)
            verify(mockValue.eInverseAdd(o, TournamentConstants.TEAM__GROUP, anything())).once()
        }
    })

    test("eIsSetFromID", () => {
        let o = new GroupImpl()
        expect(() => o.eIsSetFromID(-1)).toThrow(Error)
        expect(o.eIsSetFromID(TournamentConstants.GROUP__TEAMS)).toBeFalsy()
    })

    test("eUnsetFromID", () => {
        let o = new GroupImpl()
        expect(() => o.eUnsetFromID(-1)).toThrow(Error)
        {
            o.eUnsetFromID(TournamentConstants.GROUP__TEAMS)
            let v = o.eGetFromID(TournamentConstants.GROUP__TEAMS, false)
            expect(v).not.toBeNull()
            let l = v as ecore.EList<Team>
            expect(l.isEmpty()).toBeTruthy()
        }
    })

    test("eBasicInverseAdd", () => {
        let o = new GroupImpl()
        {
            let mockObject = mock<ecore.EObject>()
            let object = instance(mockObject)
            let mockNotifications = mock<ecore.ENotificationChain>()
            let notifications = instance(mockNotifications)
            expect(o.eBasicInverseAdd(object, -1, notifications)).toBe(notifications)
        }
        {
            let mockValue = mock<TeamInternal>()
            let value = instance(mockValue)
            o.eBasicInverseAdd(value, TournamentConstants.GROUP__TEAMS, null)
            expect(o.getTeams().contains(value)).toBeTruthy()
        }
    })

    test("eBasicInverseRemove", () => {
        let o = new GroupImpl()
        {
            let mockObject = mock<ecore.EObject>()
            let object = instance(mockObject)
            let mockNotifications = mock<ecore.ENotificationChain>()
            let notifications = instance(mockNotifications)
            expect(o.eBasicInverseRemove(object, -1, notifications)).toBe(notifications)
        }
        {
            // initialize list with a mock object
            let mockValue = mock<TeamInternal>()
            let value = instance(mockValue)
            when(mockValue.eInverseAdd(o, TournamentConstants.TEAM__GROUP, anything())).thenReturn(null)

            o.getTeams().add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, TournamentConstants.GROUP__TEAMS, null)

            // check it was removed
            expect(o.getTeams().contains(value)).toBeFalsy()
        }
    })
})
