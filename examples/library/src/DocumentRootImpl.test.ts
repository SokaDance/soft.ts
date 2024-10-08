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
import { DocumentRootImpl, Library, LibraryConstants, getLibraryPackage } from "./internal.js"

interface EStringToStringMapEntryInternal extends ecore.EStringToStringMapEntry, ecore.EObjectInternal {}
interface LibraryInternal extends Library, ecore.EObjectInternal {}

describe("DocumentRootImpl", () => {
    test("eStaticClass", () => {
        const o = new DocumentRootImpl()
        expect(o.eStaticClass()).toBe(getLibraryPackage().getDocumentRoot())
    })

    test("getLibrary", () => {
        const o = new DocumentRootImpl()

        // get default value
        expect(o.library).toBeNull()
    })

    test("setLibrary", () => {
        const o = new DocumentRootImpl()
        const mockValue = mock<LibraryInternal>()
        const value = instance(mockValue)

        // add listener
        const mockAdapter = mock<ecore.EAdapter>()
        const adapter = instance(mockAdapter)
        o.eAdapters().add(adapter)

        // set value
        o.library = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.getNotifier()).toBe(o)
        expect(notification.getOldValue()).toBeNull()
        expect(notification.getNewValue()).toBe(value)
        expect(notification.getPosition()).toBe(-1)
    })

    test("basicSetLibrary", () => {
        const o = new DocumentRootImpl()
        const mockValue = mock<LibraryInternal>()
        const value = instance(mockValue)

        // add listener
        const mockAdapter = mock<ecore.EAdapter>()
        const adapter = instance(mockAdapter)
        o.eAdapters().add(adapter)

        // notification chain
        const mockNotifications = mock<ecore.ENotificationChain>()
        const notifications = instance(mockNotifications)

        // set value
        when(mockNotifications.add(anything())).thenReturn(true)
        o.basicSetLibrary(value, notifications)

        // checks
        verify(mockNotifications.add(anything())).once()
        const [notification] = capture(mockNotifications.add).last()
        expect(notification.getNotifier()).toBe(o)
        expect(notification.getEventType()).toBe(ecore.EventType.SET)
        expect(notification.getFeatureID()).toBe(LibraryConstants.DOCUMENT_ROOT__LIBRARY)
        expect(notification.getOldValue()).toBeNull()
        expect(notification.getNewValue()).toBe(value)
        expect(notification.getPosition()).toBe(-1)
    })

    test("getXMLNSPrefixMap", () => {
        const o = new DocumentRootImpl()
        expect(o.xMLNSPrefixMap).not.toBeNull()
    })

    test("getXSISchemaLocation", () => {
        const o = new DocumentRootImpl()
        expect(o.xSISchemaLocation).not.toBeNull()
    })

    test("eGetFromID", () => {
        const o = new DocumentRootImpl()
        expect(() => o.eGetFromID(-1, true)).toThrow(Error)
        expect(o.eGetFromID(LibraryConstants.DOCUMENT_ROOT__LIBRARY, true)).toStrictEqual(o.library)
        expect(o.eGetFromID(LibraryConstants.DOCUMENT_ROOT__XMLNS_PREFIX_MAP, true)).toStrictEqual(o.xMLNSPrefixMap)
        expect(o.eGetFromID(LibraryConstants.DOCUMENT_ROOT__XSI_SCHEMA_LOCATION, true)).toStrictEqual(
            o.xSISchemaLocation
        )
    })

    test("eSetFromID", () => {
        const o = new DocumentRootImpl()
        expect(() => o.eSetFromID(-1, null)).toThrow(Error)
        {
            const mockValue = mock<LibraryInternal>()
            const value = instance(mockValue)
            when(mockValue.eClass()).thenReturn(null)
            when(mockValue.eStaticClass()).thenReturn(null)
            when(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.DOCUMENT_ROOT__LIBRARY,
                    anything()
                )
            ).thenReturn(null)
            o.eSetFromID(LibraryConstants.DOCUMENT_ROOT__LIBRARY, value)
            expect(o.eGetFromID(LibraryConstants.DOCUMENT_ROOT__LIBRARY, false)).toBe(value)
            verify(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.DOCUMENT_ROOT__LIBRARY,
                    anything()
                )
            ).once()
        }
        {
            const mockMap = mock<ecore.EMap<string, string>>()
            const map = instance(mockMap)
            const mockIterator = mock<Iterator<ecore.EMapEntry<string, string>>>()
            const iterator = instance(mockIterator)
            const mockEntry = mock<ecore.EMapEntry<string, string>>()
            const entry = instance(mockEntry)
            const key = "Test String"
            const value = "Test String"
            when(mockMap[Symbol.iterator]()).thenReturn(iterator)
            when(mockIterator.next())
                .thenReturn({ value: entry, done: false })
                .thenReturn({ value: undefined, done: true })
            when(mockEntry.getKey()).thenReturn(key)
            when(mockEntry.getValue()).thenReturn(value)
            o.eSetFromID(LibraryConstants.DOCUMENT_ROOT__XMLNS_PREFIX_MAP, map)
            expect(o.xMLNSPrefixMap.toMap()).toEqual(new Map<string, string>([[key, value]]))
        }
        {
            const mockMap = mock<ecore.EMap<string, string>>()
            const map = instance(mockMap)
            const mockIterator = mock<Iterator<ecore.EMapEntry<string, string>>>()
            const iterator = instance(mockIterator)
            const mockEntry = mock<ecore.EMapEntry<string, string>>()
            const entry = instance(mockEntry)
            const key = "Test String"
            const value = "Test String"
            when(mockMap[Symbol.iterator]()).thenReturn(iterator)
            when(mockIterator.next())
                .thenReturn({ value: entry, done: false })
                .thenReturn({ value: undefined, done: true })
            when(mockEntry.getKey()).thenReturn(key)
            when(mockEntry.getValue()).thenReturn(value)
            o.eSetFromID(LibraryConstants.DOCUMENT_ROOT__XSI_SCHEMA_LOCATION, map)
            expect(o.xSISchemaLocation.toMap()).toEqual(new Map<string, string>([[key, value]]))
        }
    })

    test("eIsSetFromID", () => {
        const o = new DocumentRootImpl()
        expect(() => o.eIsSetFromID(-1)).toThrow(Error)
        expect(o.eIsSetFromID(LibraryConstants.DOCUMENT_ROOT__LIBRARY)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.DOCUMENT_ROOT__XMLNS_PREFIX_MAP)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.DOCUMENT_ROOT__XSI_SCHEMA_LOCATION)).toBeFalsy()
    })

    test("eUnsetFromID", () => {
        const o = new DocumentRootImpl()
        expect(() => o.eUnsetFromID(-1)).toThrow(Error)
        {
            o.eUnsetFromID(LibraryConstants.DOCUMENT_ROOT__LIBRARY)
            expect(o.eGetFromID(LibraryConstants.DOCUMENT_ROOT__LIBRARY, false)).toBeNull()
        }
        {
            o.eUnsetFromID(LibraryConstants.DOCUMENT_ROOT__XMLNS_PREFIX_MAP)
            const v = o.eGetFromID(LibraryConstants.DOCUMENT_ROOT__XMLNS_PREFIX_MAP, false)
            expect(v).not.toBeNull()
            const l = v as ecore.EList<ecore.EStringToStringMapEntry>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(LibraryConstants.DOCUMENT_ROOT__XSI_SCHEMA_LOCATION)
            const v = o.eGetFromID(LibraryConstants.DOCUMENT_ROOT__XSI_SCHEMA_LOCATION, false)
            expect(v).not.toBeNull()
            const l = v as ecore.EList<ecore.EStringToStringMapEntry>
            expect(l.isEmpty()).toBeTruthy()
        }
    })

    test("eBasicInverseRemove", () => {
        const o = new DocumentRootImpl()
        {
            const mockObject = mock<ecore.EObject>()
            const object = instance(mockObject)
            const mockNotifications = mock<ecore.ENotificationChain>()
            const notifications = instance(mockNotifications)
            expect(o.eBasicInverseRemove(object, -1, notifications)).toBe(notifications)
        }
        {
            const mockValue = mock<LibraryInternal>()
            const value = instance(mockValue)
            o.eBasicInverseRemove(value, LibraryConstants.DOCUMENT_ROOT__LIBRARY, null)
        }
        {
            const mockValue = mock<EStringToStringMapEntryInternal>()
            const value = instance(mockValue)
            o.eBasicInverseRemove(mockValue, LibraryConstants.DOCUMENT_ROOT__XMLNS_PREFIX_MAP, null)
            expect(o.xMLNSPrefixMap.isEmpty())
        }
        {
            const mockValue = mock<EStringToStringMapEntryInternal>()
            const value = instance(mockValue)
            o.eBasicInverseRemove(mockValue, LibraryConstants.DOCUMENT_ROOT__XSI_SCHEMA_LOCATION, null)
            expect(o.xSISchemaLocation.isEmpty())
        }
    })
})
