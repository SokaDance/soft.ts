// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

import { anything, capture, instance, mock, verify, when } from "ts-mockito"
import {
    EAdapter,
    EClassifier,
    EObjectInternal,
    EResource,
    EResourceSet,
    ETypedElementImpl,
    EcoreConstants,
    EventType,
    URI,
    getEcorePackage
} from "./internal.js"

interface EClassifierInternal extends EClassifier, EObjectInternal {}

describe("ETypedElementImpl", () => {
    test("eStaticClass", () => {
        let o = new ETypedElementImpl()
        expect(o.eStaticClass()).toBe(getEcorePackage().getETypedElement())
    })

    test("getEType", () => {
        let o = new ETypedElementImpl()

        // get default value
        expect(o.eType).toBeNull()

        // initialize object with a mock value
        let mockValue = mock<EClassifierInternal>()
        let value = instance(mockValue)
        o.eType = value

        // events
        let mockAdapter = mock<EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set object resource
        let mockResourceSet = mock<EResourceSet>()
        let resourceSet = instance(mockResourceSet)
        let mockResource = mock<EResource>()
        let resource = instance(mockResource)
        o.eSetInternalResource(resource)

        // get non resolved value
        when(mockValue.eIsProxy()).thenReturn(false)
        expect(o.eType).toBe(value)
        verify(mockValue.eIsProxy()).once()

        // get a resolved value
        let mockURI = new URI("test:///uri")
        let mockResolved = mock<EClassifierInternal>()
        let resolved = instance(mockResolved)
        when(mockResolved.eProxyURI()).thenReturn(null)
        when(mockResource.eResourceSet()).thenReturn(resourceSet)
        when(mockResourceSet.getEObject(mockURI, true)).thenReturn(resolved)
        when(mockValue.eIsProxy()).thenReturn(true)
        when(mockValue.eProxyURI()).thenReturn(mockURI)
        expect(o.eType).toBe(resolved)
    })

    test("setEType", () => {
        let o = new ETypedElementImpl()
        let mockValue = mock<EClassifierInternal>()
        let value = instance(mockValue)

        // add listener
        let mockAdapter = mock<EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set value
        o.eType = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.notifier).toBe(o)
        expect(notification.oldValue).toBeNull()
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("unsetEType", () => {
        let o = new ETypedElementImpl()

        // add listener
        let mockAdapter = mock<EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // unset
        o.unSetEType()

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.notifier).toBe(o)
        expect(notification.eventType).toBe(EventType.UNSET)
        expect(notification.featureID).toBe(EcoreConstants.ETYPED_ELEMENT__ETYPE)
        expect(o.eType).toBeNull()
    })

    test("getMany", () => {
        let o = new ETypedElementImpl()
        expect(() => o.isMany).toThrow(Error)
    })

    test("getOrdered", () => {
        let o = new ETypedElementImpl()
        // get default value
        expect(o.isOrdered).toBe(true)
    })

    test("setOrdered", () => {
        let o = new ETypedElementImpl()
        let value = true

        // add listener
        let mockAdapter = mock<EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set value
        o.isOrdered = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.notifier).toBe(o)
        expect(notification.oldValue).toBe(true)
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("getRequired", () => {
        let o = new ETypedElementImpl()
        expect(() => o.isRequired).toThrow(Error)
    })

    test("getUnique", () => {
        let o = new ETypedElementImpl()
        // get default value
        expect(o.isUnique).toBe(true)
    })

    test("setUnique", () => {
        let o = new ETypedElementImpl()
        let value = true

        // add listener
        let mockAdapter = mock<EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set value
        o.isUnique = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.notifier).toBe(o)
        expect(notification.oldValue).toBe(true)
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("getLowerBound", () => {
        let o = new ETypedElementImpl()
        // get default value
        expect(o.lowerBound).toBe(0)
    })

    test("setLowerBound", () => {
        let o = new ETypedElementImpl()
        let value = 45

        // add listener
        let mockAdapter = mock<EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set value
        o.lowerBound = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.notifier).toBe(o)
        expect(notification.oldValue).toBe(0)
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("getUpperBound", () => {
        let o = new ETypedElementImpl()
        // get default value
        expect(o.upperBound).toBe(1)
    })

    test("setUpperBound", () => {
        let o = new ETypedElementImpl()
        let value = 45

        // add listener
        let mockAdapter = mock<EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set value
        o.upperBound = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.notifier).toBe(o)
        expect(notification.oldValue).toBe(1)
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("eGetFromID", () => {
        let o = new ETypedElementImpl()
        expect(() => o.eGetFromID(-1, true)).toThrow(Error)
        expect(o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__ETYPE, true)).toStrictEqual(o.eType)
        expect(o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__LOWER_BOUND, true)).toStrictEqual(o.lowerBound)
        expect(() => o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__MANY, true)).toThrow(Error)
        expect(() => o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__MANY, false)).toThrow(Error)
        expect(o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__ORDERED, true)).toStrictEqual(o.isOrdered)
        expect(() => o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__REQUIRED, true)).toThrow(Error)
        expect(() => o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__REQUIRED, false)).toThrow(Error)
        expect(o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__UNIQUE, true)).toStrictEqual(o.isUnique)
        expect(o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__UPPER_BOUND, true)).toStrictEqual(o.upperBound)
    })

    test("eSetFromID", () => {
        let o = new ETypedElementImpl()
        expect(() => o.eSetFromID(-1, null)).toThrow(Error)
        {
            let mockValue = mock<EClassifierInternal>()
            let value = instance(mockValue)
            o.eSetFromID(EcoreConstants.ETYPED_ELEMENT__ETYPE, value)
            expect(o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__ETYPE, false)).toBe(value)
        }
        {
            let value = 45
            o.eSetFromID(EcoreConstants.ETYPED_ELEMENT__LOWER_BOUND, value)
            expect(o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__LOWER_BOUND, false)).toBe(value)
        }
        {
            let value = true
            o.eSetFromID(EcoreConstants.ETYPED_ELEMENT__ORDERED, value)
            expect(o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__ORDERED, false)).toBe(value)
        }
        {
            let value = true
            o.eSetFromID(EcoreConstants.ETYPED_ELEMENT__UNIQUE, value)
            expect(o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__UNIQUE, false)).toBe(value)
        }
        {
            let value = 45
            o.eSetFromID(EcoreConstants.ETYPED_ELEMENT__UPPER_BOUND, value)
            expect(o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__UPPER_BOUND, false)).toBe(value)
        }
    })

    test("eIsSetFromID", () => {
        let o = new ETypedElementImpl()
        expect(() => o.eIsSetFromID(-1)).toThrow(Error)
        expect(o.eIsSetFromID(EcoreConstants.ETYPED_ELEMENT__ETYPE)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ETYPED_ELEMENT__LOWER_BOUND)).toBeFalsy()
        expect(() => o.eIsSetFromID(EcoreConstants.ETYPED_ELEMENT__MANY)).toThrow(Error)
        expect(o.eIsSetFromID(EcoreConstants.ETYPED_ELEMENT__ORDERED)).toBeFalsy()
        expect(() => o.eIsSetFromID(EcoreConstants.ETYPED_ELEMENT__REQUIRED)).toThrow(Error)
        expect(o.eIsSetFromID(EcoreConstants.ETYPED_ELEMENT__UNIQUE)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ETYPED_ELEMENT__UPPER_BOUND)).toBeFalsy()
    })

    test("eUnsetFromID", () => {
        let o = new ETypedElementImpl()
        expect(() => o.eUnsetFromID(-1)).toThrow(Error)
        {
            o.eUnsetFromID(EcoreConstants.ETYPED_ELEMENT__ETYPE)
            expect(o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__ETYPE, false)).toBeNull()
        }
        {
            o.eUnsetFromID(EcoreConstants.ETYPED_ELEMENT__LOWER_BOUND)
            let v = o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__LOWER_BOUND, false)
            expect(v).toBe(0)
        }
        {
            o.eUnsetFromID(EcoreConstants.ETYPED_ELEMENT__ORDERED)
            let v = o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__ORDERED, false)
            expect(v).toBe(true)
        }
        {
            o.eUnsetFromID(EcoreConstants.ETYPED_ELEMENT__UNIQUE)
            let v = o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__UNIQUE, false)
            expect(v).toBe(true)
        }
        {
            o.eUnsetFromID(EcoreConstants.ETYPED_ELEMENT__UPPER_BOUND)
            let v = o.eGetFromID(EcoreConstants.ETYPED_ELEMENT__UPPER_BOUND, false)
            expect(v).toBe(1)
        }
    })
})
