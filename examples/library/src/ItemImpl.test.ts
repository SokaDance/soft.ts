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
import { anything, capture, instance, mock, reset, verify, when } from "ts-mockito"
import * as ecore from "@masagroup/ecore"
import { ItemImpl, LibraryConstants, getLibraryPackage } from "./internal.js"

describe("ItemImpl", () => {
    test("eStaticClass", () => {
        const o = new ItemImpl()
        expect(o.eStaticClass()).toBe(getLibraryPackage().getItem())
    })

    test("getPublicationDate", () => {
        const o = new ItemImpl()
        // get default value
        expect(o.publicationDate).toBe(null)
    })

    test("setPublicationDate", () => {
        const o = new ItemImpl()
        const value = new Date()

        // add listener
        const mockAdapter = mock<ecore.EAdapter>()
        const adapter = instance(mockAdapter)
        o.eAdapters().add(adapter)

        // set value
        o.publicationDate = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.getNotifier()).toBe(o)
        expect(notification.getOldValue()).toBeNull()
        expect(notification.getNewValue()).toBe(value)
        expect(notification.getPosition()).toBe(-1)
    })

    test("eGetFromID", () => {
        const o = new ItemImpl()
        expect(() => o.eGetFromID(-1, true)).toThrow(Error)
        expect(o.eGetFromID(LibraryConstants.ITEM__PUBLICATION_DATE, true)).toStrictEqual(o.publicationDate)
    })

    test("eSetFromID", () => {
        const o = new ItemImpl()
        expect(() => o.eSetFromID(-1, null)).toThrow(Error)
        {
            const value = new Date()
            o.eSetFromID(LibraryConstants.ITEM__PUBLICATION_DATE, value)
            expect(o.eGetFromID(LibraryConstants.ITEM__PUBLICATION_DATE, false)).toBe(value)
        }
    })

    test("eIsSetFromID", () => {
        const o = new ItemImpl()
        expect(() => o.eIsSetFromID(-1)).toThrow(Error)
        expect(o.eIsSetFromID(LibraryConstants.ITEM__PUBLICATION_DATE)).toBeFalsy()
    })

    test("eUnsetFromID", () => {
        const o = new ItemImpl()
        expect(() => o.eUnsetFromID(-1)).toThrow(Error)
        {
            o.eUnsetFromID(LibraryConstants.ITEM__PUBLICATION_DATE)
            const v = o.eGetFromID(LibraryConstants.ITEM__PUBLICATION_DATE, false)
            expect(v).toBeNull()
        }
    })
})
