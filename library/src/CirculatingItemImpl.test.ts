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
import { anything, capture, instance, mock, reset, verify, when } from "ts-mockito"
import * as ecore from "@masagroup/ecore"
import { Borrower, CirculatingItemImpl, Item, Lendable, LibraryConstants, getLibraryPackage } from "./internal"

interface BorrowerInternal extends Borrower, ecore.EObjectInternal {}

class DateListener extends ecore.AbstractEAdapter {
    notifyChanged(notification: ecore.ENotification): void {
        if (notification.eventType == getLibraryPackage().getItem_PublicationDate()) {
            // 
        }
    }
    
}

describe("CirculatingItemImpl", () => {
    test("eStaticClass", () => {
        let o = new CirculatingItemImpl()
        o.eAdapters.add( new DateListener())
        expect(o.eStaticClass()).toBe(getLibraryPackage().getCirculatingItem())
    })

    test("getBorrowers", () => {
        let o = new CirculatingItemImpl()
        expect(o.borrowers).not.toBeNull()
    })

    test("getCopies", () => {
        let o = new CirculatingItemImpl()
        // get default value
        expect(o.copies).toBe(0)
    })

    test("setCopies", () => {
        let o = new CirculatingItemImpl()
        let value = 45

        // add listener
        let mockAdapter = mock<ecore.EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set value
        o.copies = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.notifier).toBe(o)
        expect(notification.oldValue).toBe(0)
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("eDerivedFeatureID", () => {
        let o = new CirculatingItemImpl()
        {
            let mockClass = mock<ecore.EClass>()
            let cls = instance(mockClass)
            expect(o.eDerivedFeatureID(cls, 1)).toBe(1)
        }
        {
            let cls = getLibraryPackage().getLendable()
            expect(o.eDerivedFeatureID(cls, -1)).toBe(-1)
            expect(o.eDerivedFeatureID(cls, LibraryConstants.LENDABLE__COPIES)).toBe(
                LibraryConstants.CIRCULATING_ITEM__COPIES
            )
            expect(o.eDerivedFeatureID(cls, LibraryConstants.LENDABLE__BORROWERS)).toBe(
                LibraryConstants.CIRCULATING_ITEM__BORROWERS
            )
        }
    })

    test("eGetFromID", () => {
        let o = new CirculatingItemImpl()
        expect(() => o.eGetFromID(-1, true)).toThrow(Error)
        expect(o.eGetFromID(LibraryConstants.CIRCULATING_ITEM__BORROWERS, true)).toStrictEqual(o.borrowers)
        expect(
            deepEqual(
                o.eGetFromID(LibraryConstants.CIRCULATING_ITEM__BORROWERS, false),
                (o.borrowers as ecore.EObjectList<Borrower>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(LibraryConstants.CIRCULATING_ITEM__COPIES, true)).toStrictEqual(o.copies)
    })

    test("eSetFromID", () => {
        let o = new CirculatingItemImpl()
        expect(() => o.eSetFromID(-1, null)).toThrow(Error)
        {
            // list with a value
            let mockValue = mock<BorrowerInternal>()
            let value = instance(mockValue)
            let l = new ecore.ImmutableEList<Borrower>([value])
            when(mockValue.eIsProxy()).thenReturn(false)
            when(mockValue.eInverseAdd(o, LibraryConstants.BORROWER__BORROWED, anything())).thenReturn(null)

            // set list with new contents
            o.eSetFromID(LibraryConstants.CIRCULATING_ITEM__BORROWERS, l)
            // checks
            expect(o.borrowers.size()).toBe(1)
            expect(o.borrowers.get(0)).toBe(value)
            verify(mockValue.eInverseAdd(o, LibraryConstants.BORROWER__BORROWED, anything())).once()
        }

        {
            let value = 45
            o.eSetFromID(LibraryConstants.CIRCULATING_ITEM__COPIES, value)
            expect(o.eGetFromID(LibraryConstants.CIRCULATING_ITEM__COPIES, false)).toBe(value)
        }
    })

    test("eIsSetFromID", () => {
        let o = new CirculatingItemImpl()
        expect(() => o.eIsSetFromID(-1)).toThrow(Error)
        expect(o.eIsSetFromID(LibraryConstants.CIRCULATING_ITEM__BORROWERS)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.CIRCULATING_ITEM__COPIES)).toBeFalsy()
    })

    test("eUnsetFromID", () => {
        let o = new CirculatingItemImpl()
        expect(() => o.eUnsetFromID(-1)).toThrow(Error)
        {
            o.eUnsetFromID(LibraryConstants.CIRCULATING_ITEM__BORROWERS)
            let v = o.eGetFromID(LibraryConstants.CIRCULATING_ITEM__BORROWERS, false)
            expect(v).not.toBeNull()
            let l = v as ecore.EList<Borrower>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(LibraryConstants.CIRCULATING_ITEM__COPIES)
            let v = o.eGetFromID(LibraryConstants.CIRCULATING_ITEM__COPIES, false)
            expect(v).toBe(0)
        }
    })

    test("eBasicInverseAdd", () => {
        let o = new CirculatingItemImpl()
        {
            let mockObject = mock<ecore.EObject>()
            let object = instance(mockObject)
            let mockNotifications = mock<ecore.ENotificationChain>()
            let notifications = instance(mockNotifications)
            expect(o.eBasicInverseAdd(object, -1, notifications)).toBe(notifications)
        }
        {
            let mockValue = mock<BorrowerInternal>()
            let value = instance(mockValue)
            o.eBasicInverseAdd(value, LibraryConstants.CIRCULATING_ITEM__BORROWERS, null)
            expect(o.borrowers.contains(value)).toBeTruthy()
        }
    })

    test("eBasicInverseRemove", () => {
        let o = new CirculatingItemImpl()
        {
            let mockObject = mock<ecore.EObject>()
            let object = instance(mockObject)
            let mockNotifications = mock<ecore.ENotificationChain>()
            let notifications = instance(mockNotifications)
            expect(o.eBasicInverseRemove(object, -1, notifications)).toBe(notifications)
        }
        {
            // initialize list with a mock object
            let mockValue = mock<BorrowerInternal>()
            let value = instance(mockValue)
            when(mockValue.eInverseAdd(o, LibraryConstants.BORROWER__BORROWED, anything())).thenReturn(null)

            o.borrowers.add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, LibraryConstants.CIRCULATING_ITEM__BORROWERS, null)

            // check it was removed
            expect(o.borrowers.contains(value)).toBeFalsy()
        }
    })
})
