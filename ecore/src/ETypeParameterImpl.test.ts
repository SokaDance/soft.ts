// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

import deepEqual from "deep-equal"
import { anything, instance, mock, verify, when } from "ts-mockito"
import { describe, expect, test } from "vitest"
import {
    EGenericType,
    EList,
    ENotificationChain,
    EOPPOSITE_FEATURE_BASE,
    EObject,
    EObjectInternal,
    EObjectList,
    ETypeParameterImpl,
    EcoreConstants,
    ImmutableEList,
    getEcorePackage
} from "./internal.js"

interface EGenericTypeInternal extends EGenericType, EObjectInternal {}

describe("ETypeParameterImpl", () => {
    test("eStaticClass", () => {
        const o = new ETypeParameterImpl()
        expect(o.eStaticClass()).toBe(getEcorePackage().getETypeParameter())
    })

    test("getEBounds", () => {
        const o = new ETypeParameterImpl()
        expect(o.getEBounds()).not.toBeNull()
    })

    test("eGetFromID", () => {
        const o = new ETypeParameterImpl()
        expect(() => o.eGetFromID(-1, true)).toThrow(Error)
        expect(o.eGetFromID(EcoreConstants.ETYPE_PARAMETER__EBOUNDS, true)).toStrictEqual(o.getEBounds())
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ETYPE_PARAMETER__EBOUNDS, false),
                (o.getEBounds() as EObjectList<EGenericType>).getUnResolvedList()
            )
        ).toBeTruthy()
    })

    test("eSetFromID", () => {
        const o = new ETypeParameterImpl()
        expect(() => o.eSetFromID(-1, null)).toThrow(Error)
        {
            // list with a value
            const mockValue = mock<EGenericTypeInternal>()
            const value = instance(mockValue)
            const l = new ImmutableEList<EGenericType>([value])
            when(
                mockValue.eInverseAdd(o, EOPPOSITE_FEATURE_BASE - EcoreConstants.ETYPE_PARAMETER__EBOUNDS, anything())
            ).thenReturn(null)

            // set list with new contents
            o.eSetFromID(EcoreConstants.ETYPE_PARAMETER__EBOUNDS, l)
            // checks
            expect(o.getEBounds().size()).toBe(1)
            expect(o.getEBounds().get(0)).toBe(value)
            verify(
                mockValue.eInverseAdd(o, EOPPOSITE_FEATURE_BASE - EcoreConstants.ETYPE_PARAMETER__EBOUNDS, anything())
            ).once()
        }
    })

    test("eIsSetFromID", () => {
        const o = new ETypeParameterImpl()
        expect(() => o.eIsSetFromID(-1)).toThrow(Error)
        expect(o.eIsSetFromID(EcoreConstants.ETYPE_PARAMETER__EBOUNDS)).toBeFalsy()
    })

    test("eUnsetFromID", () => {
        const o = new ETypeParameterImpl()
        expect(() => o.eUnsetFromID(-1)).toThrow(Error)
        {
            o.eUnsetFromID(EcoreConstants.ETYPE_PARAMETER__EBOUNDS)
            const v = o.eGetFromID(EcoreConstants.ETYPE_PARAMETER__EBOUNDS, false)
            expect(v).not.toBeNull()
            const l = v as EList<EGenericType>
            expect(l.isEmpty()).toBeTruthy()
        }
    })

    test("eBasicInverseRemove", () => {
        const o = new ETypeParameterImpl()
        {
            const mockObject = mock<EObject>()
            const object = instance(mockObject)
            const mockNotifications = mock<ENotificationChain>()
            const notifications = instance(mockNotifications)
            expect(o.eBasicInverseRemove(object, -1, notifications)).toBe(notifications)
        }
        {
            // initialize list with a mock object
            const mockValue = mock<EGenericTypeInternal>()
            const value = instance(mockValue)
            when(
                mockValue.eInverseAdd(o, EOPPOSITE_FEATURE_BASE - EcoreConstants.ETYPE_PARAMETER__EBOUNDS, anything())
            ).thenReturn(null)

            o.getEBounds().add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, EcoreConstants.ETYPE_PARAMETER__EBOUNDS, null)

            // check it was removed
            expect(o.getEBounds().contains(value)).toBeFalsy()
        }
    })
})
