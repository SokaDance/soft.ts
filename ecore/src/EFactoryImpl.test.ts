// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

import { anything, capture, instance, mock, reset, verify, when } from "ts-mockito"
import { describe, expect, test } from "vitest"
import {
    EAdapter,
    EFactoryImpl,
    ENotificationChain,
    EObject,
    EObjectInternal,
    EPackage,
    EResource,
    EcoreConstants,
    EventType,
    getEcorePackage
} from "./internal.js"

interface EPackageInternal extends EPackage, EObjectInternal {}

describe("EFactoryImpl", () => {
    test("eStaticClass", () => {
        const o = new EFactoryImpl()
        expect(o.eStaticClass()).toBe(getEcorePackage().getEFactory())
    })

    test("getEPackage", () => {
        // default
        const o = new EFactoryImpl()
        expect(o.getEPackage()).toBeNull()

        // set a mock container
        const mockContainer = mock<EObject>()
        const container = instance(mockContainer)
        o.eSetInternalContainer(container, EcoreConstants.EFACTORY__EPACKAGE)

        // no proxy
        when(mockContainer.eIsProxy()).thenReturn(false)
        expect(o.getEPackage()).toBe(container)
        verify(mockContainer.eIsProxy()).once()
    })

    test("setEPackage", () => {
        const o = new EFactoryImpl()
        const mockResource = mock<EResource>()
        const resource = instance(mockResource)
        const mockValue = mock<EPackageInternal>()
        const value = instance(mockValue)

        // add listener
        const mockAdapter = mock<EAdapter>()
        const adapter = instance(mockAdapter)
        o.eAdapters().add(adapter)

        // set value
        when(mockValue.eInverseAdd(o, EcoreConstants.EPACKAGE__EFACTORY_INSTANCE, null)).thenReturn(null)
        when(mockValue.eResource()).thenReturn(resource)
        o.setEPackage(value)
        verify(mockResource.attached(o)).once()
        verify(mockAdapter.notifyChanged(anything())).once()
        {
            const [notification] = capture(mockAdapter.notifyChanged).last()
            expect(notification.getNotifier()).toBe(o)
            expect(notification.getOldValue()).toBeNull()
            expect(notification.getNewValue()).toBe(value)
        }
        // set with the same value
        reset(mockAdapter)
        o.setEPackage(value)
        verify(mockAdapter.notifyChanged(anything())).once()

        // set with another value in a different resource
        const mockOther = mock<EPackageInternal>()
        const other = instance(mockOther)
        const mockOtherResource = mock<EResource>()
        const otherResource = instance(mockOtherResource)
        reset(mockAdapter)
        reset(mockValue)
        reset(mockResource)
        when(mockValue.eInverseRemove(o, EcoreConstants.EPACKAGE__EFACTORY_INSTANCE, null)).thenReturn(null)
        when(mockValue.eResource()).thenReturn(resource)
        when(mockOther.eInverseAdd(o, EcoreConstants.EPACKAGE__EFACTORY_INSTANCE, null)).thenReturn(null)
        when(mockOther.eResource()).thenReturn(otherResource)
        o.setEPackage(other)
        verify(mockResource.detached(o)).once()
        verify(mockOtherResource.attached(o)).once()
        verify(mockAdapter.notifyChanged(anything())).once()
        {
            const [notification] = capture(mockAdapter.notifyChanged).last()
            expect(notification.getNotifier()).toBe(o)
            expect(notification.getOldValue()).toBe(value)
            expect(notification.getNewValue()).toBe(other)
            expect(notification.getPosition()).toBe(-1)
        }
    })

    test("basicSetEPackage", () => {
        const o = new EFactoryImpl()
        const mockValue = mock<EPackageInternal>()
        const value = instance(mockValue)

        // add listener
        const mockAdapter = mock<EAdapter>()
        const adapter = instance(mockAdapter)
        o.eAdapters().add(adapter)

        // notification chain
        const mockNotifications = mock<ENotificationChain>()
        const notifications = instance(mockNotifications)

        // set value
        when(mockValue.eResource()).thenReturn(null)
        when(mockNotifications.add(anything())).thenReturn(true)
        o.basicSetEPackage(value, notifications)

        // checks
        verify(mockNotifications.add(anything())).once()
        const [notification] = capture(mockNotifications.add).last()
        expect(notification.getNotifier()).toBe(o)
        expect(notification.getEventType()).toBe(EventType.SET)
        expect(notification.getFeatureID()).toBe(EcoreConstants.EFACTORY__EPACKAGE)
        expect(notification.getOldValue()).toBeNull()
        expect(notification.getNewValue()).toBe(value)
        expect(notification.getPosition()).toBe(-1)
    })

    test("convertToString", () => {
        const o = new EFactoryImpl()
        expect(() => o.convertToString(null, null)).toThrow(Error)
    })
    test("create", () => {
        const o = new EFactoryImpl()
        expect(() => o.create(null)).toThrow(Error)
    })
    test("createFromString", () => {
        const o = new EFactoryImpl()
        expect(() => o.createFromString(null, "")).toThrow(Error)
    })

    test("eGetFromID", () => {
        const o = new EFactoryImpl()
        expect(() => o.eGetFromID(-1, true)).toThrow(Error)
        expect(o.eGetFromID(EcoreConstants.EFACTORY__EPACKAGE, true)).toStrictEqual(o.getEPackage())
    })

    test("eSetFromID", () => {
        const o = new EFactoryImpl()
        expect(() => o.eSetFromID(-1, null)).toThrow(Error)
        {
            const mockValue = mock<EPackageInternal>()
            const value = instance(mockValue)
            when(mockValue.eIsProxy()).thenReturn(false)
            when(mockValue.eResource()).thenReturn(null)
            when(mockValue.eInverseAdd(o, EcoreConstants.EPACKAGE__EFACTORY_INSTANCE, null)).thenReturn(null)
            o.eSetFromID(EcoreConstants.EFACTORY__EPACKAGE, value)
            expect(o.eGetFromID(EcoreConstants.EFACTORY__EPACKAGE, false)).toBe(value)
            verify(mockValue.eIsProxy()).once()
            verify(mockValue.eResource()).once()
            verify(mockValue.eInverseAdd(o, EcoreConstants.EPACKAGE__EFACTORY_INSTANCE, null)).once()
        }
    })

    test("eIsSetFromID", () => {
        const o = new EFactoryImpl()
        expect(() => o.eIsSetFromID(-1)).toThrow(Error)
        expect(o.eIsSetFromID(EcoreConstants.EFACTORY__EPACKAGE)).toBeFalsy()
    })

    test("eUnsetFromID", () => {
        const o = new EFactoryImpl()
        expect(() => o.eUnsetFromID(-1)).toThrow(Error)
        {
            o.eUnsetFromID(EcoreConstants.EFACTORY__EPACKAGE)
            expect(o.eGetFromID(EcoreConstants.EFACTORY__EPACKAGE, false)).toBeNull()
        }
    })

    test("eInvokeFromID", () => {
        const o = new EFactoryImpl()
        expect(() => o.eInvokeFromID(-1, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.EFACTORY__CONVERT_TO_STRING_EDATATYPE_EJAVAOBJECT, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.EFACTORY__CREATE_ECLASS, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.EFACTORY__CREATE_FROM_STRING_EDATATYPE_ESTRING, null)).toThrow(Error)
    })

    test("eBasicInverseAdd", () => {
        const o = new EFactoryImpl()
        {
            const mockObject = mock<EObject>()
            const object = instance(mockObject)
            const mockNotifications = mock<ENotificationChain>()
            const notifications = instance(mockNotifications)
            expect(o.eBasicInverseAdd(object, -1, notifications)).toBe(notifications)
        }
        {
            const mockValue = mock<EPackageInternal>()
            const value = instance(mockValue)
            when(mockValue.eResource()).thenReturn(null)
            when(mockValue.eIsProxy()).thenReturn(false)
            o.eBasicInverseAdd(value, EcoreConstants.EFACTORY__EPACKAGE, null)
            expect(o.getEPackage()).toBe(value)

            reset(mockValue)
            const mockOther = mock<EPackageInternal>()
            const other = instance(mockOther)
            when(mockOther.eResource()).thenReturn(null)
            when(mockOther.eIsProxy()).thenReturn(false)
            when(mockValue.eResource()).thenReturn(null)
            when(mockValue.eInverseRemove(o, EcoreConstants.EPACKAGE__EFACTORY_INSTANCE, null)).thenReturn(null)
            o.eBasicInverseAdd(other, EcoreConstants.EFACTORY__EPACKAGE, null)
            expect(o.getEPackage()).toBe(other)
        }
    })

    test("eBasicInverseRemove", () => {
        const o = new EFactoryImpl()
        {
            const mockObject = mock<EObject>()
            const object = instance(mockObject)
            const mockNotifications = mock<ENotificationChain>()
            const notifications = instance(mockNotifications)
            expect(o.eBasicInverseRemove(object, -1, notifications)).toBe(notifications)
        }
        {
            const mockValue = mock<EPackageInternal>()
            const value = instance(mockValue)
            o.eBasicInverseRemove(value, EcoreConstants.EFACTORY__EPACKAGE, null)
        }
    })
})
