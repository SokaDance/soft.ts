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
    BookCategory,
    BookImpl,
    BookIndex,
    CirculatingItem,
    LibraryConstants,
    Writer,
    getLibraryPackage
} from "./internal.js"

interface BookIndexInternal extends BookIndex, ecore.EObjectInternal {}
interface WriterInternal extends Writer, ecore.EObjectInternal {}

describe("BookImpl", () => {
    test("eStaticClass", () => {
        const o = new BookImpl()
        expect(o.eStaticClass()).toBe(getLibraryPackage().getBook())
    })

    test("getAuthor", () => {
        const o = new BookImpl()

        // get default value
        expect(o.author).toBeNull()

        // initialize object with a mock value
        const mockValue = mock<WriterInternal>()
        const value = instance(mockValue)
        o.author = value

        // events
        const mockAdapter = mock<ecore.EAdapter>()
        const adapter = instance(mockAdapter)
        o.eAdapters().add(adapter)

        // set object resource
        const mockResourceSet = mock<ecore.EResourceSet>()
        const resourceSet = instance(mockResourceSet)
        const mockResource = mock<ecore.EResource>()
        const resource = instance(mockResource)
        o.eSetInternalResource(resource)

        // get non resolved value
        when(mockValue.eIsProxy()).thenReturn(false)
        expect(o.author).toBe(value)
        verify(mockValue.eIsProxy()).once()

        // get a resolved value
        const mockURI = new ecore.URI("test:///uri")
        const mockResolved = mock<WriterInternal>()
        const resolved = instance(mockResolved)
        when(mockResolved.eProxyURI()).thenReturn(null)
        when(mockResource.eResourceSet()).thenReturn(resourceSet)
        when(mockResourceSet.getEObject(mockURI, true)).thenReturn(resolved)
        when(mockValue.eIsProxy()).thenReturn(true)
        when(mockValue.eProxyURI()).thenReturn(mockURI)
        expect(o.author).toBe(resolved)
    })

    test("setAuthor", () => {
        const o = new BookImpl()

        // add listener
        const mockAdapter = mock<ecore.EAdapter>()
        const adapter = instance(mockAdapter)
        o.eAdapters().add(adapter)

        // first value
        const mockValue = mock<WriterInternal>()
        const value = instance(mockValue)
        when(mockValue.eClass()).thenReturn(null)
        when(mockValue.eStaticClass()).thenReturn(null)
        when(mockValue.eInverseAdd(o, LibraryConstants.WRITER__BOOKS, null)).thenReturn(null)
        o.author = value
        verify(mockAdapter.notifyChanged(anything())).once()
        {
            const [notification] = capture(mockAdapter.notifyChanged).last()
            expect(notification.getNotifier()).toBe(o)
            expect(notification.getOldValue()).toBeNull()
            expect(notification.getNewValue()).toBe(value)
        }

        // set with other value
        const mockOther = mock<WriterInternal>()
        const other = instance(mockOther)
        reset(mockAdapter)
        reset(mockValue)
        when(mockOther.eClass()).thenReturn(null)
        when(mockOther.eStaticClass()).thenReturn(null)
        when(mockValue.eClass()).thenReturn(null)
        when(mockValue.eStaticClass()).thenReturn(null)
        when(mockValue.eInverseRemove(o, LibraryConstants.WRITER__BOOKS, null)).thenReturn(null)
        when(mockOther.eInverseAdd(o, LibraryConstants.WRITER__BOOKS, null)).thenReturn(null)
        o.author = other
        verify(mockAdapter.notifyChanged(anything())).once()
        {
            const [notification] = capture(mockAdapter.notifyChanged).last()
            expect(notification.getNotifier()).toBe(o)
            expect(notification.getOldValue()).toBe(value)
            expect(notification.getNewValue()).toBe(other)
            expect(notification.getPosition()).toBe(-1)
        }
    })

    test("basicSetAuthor", () => {
        const o = new BookImpl()
        const mockValue = mock<WriterInternal>()
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
        o.basicSetAuthor(value, notifications)

        // checks
        verify(mockNotifications.add(anything())).once()
        const [notification] = capture(mockNotifications.add).last()
        expect(notification.getNotifier()).toBe(o)
        expect(notification.getEventType()).toBe(ecore.EventType.SET)
        expect(notification.getFeatureID()).toBe(LibraryConstants.BOOK__AUTHOR)
        expect(notification.getOldValue()).toBeNull()
        expect(notification.getNewValue()).toBe(value)
        expect(notification.getPosition()).toBe(-1)
    })

    test("getCategory", () => {
        const o = new BookImpl()
        // get default value
        expect(o.category).toBe(BookCategory.MYSTERY)
    })

    test("setCategory", () => {
        const o = new BookImpl()
        const value = BookCategory.SCIENCE_FICTION

        // add listener
        const mockAdapter = mock<ecore.EAdapter>()
        const adapter = instance(mockAdapter)
        o.eAdapters().add(adapter)

        // set value
        o.category = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.getNotifier()).toBe(o)
        expect(notification.getOldValue()).toBe(BookCategory.MYSTERY)
        expect(notification.getNewValue()).toBe(value)
        expect(notification.getPosition()).toBe(-1)
    })

    test("getIndexes", () => {
        const o = new BookImpl()
        expect(o.indexes).not.toBeNull()
    })

    test("getPages", () => {
        const o = new BookImpl()
        // get default value
        expect(o.pages).toBe(100)
    })

    test("setPages", () => {
        const o = new BookImpl()
        const value = 45

        // add listener
        const mockAdapter = mock<ecore.EAdapter>()
        const adapter = instance(mockAdapter)
        o.eAdapters().add(adapter)

        // set value
        o.pages = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.getNotifier()).toBe(o)
        expect(notification.getOldValue()).toBe(100)
        expect(notification.getNewValue()).toBe(value)
        expect(notification.getPosition()).toBe(-1)
    })

    test("getTableOfContents", () => {
        const o = new BookImpl()
        expect(o.tableOfContents).not.toBeNull()
    })

    test("getTitle", () => {
        const o = new BookImpl()
        // get default value
        expect(o.title).toBe("")
    })

    test("setTitle", () => {
        const o = new BookImpl()
        const value = "Test String"

        // add listener
        const mockAdapter = mock<ecore.EAdapter>()
        const adapter = instance(mockAdapter)
        o.eAdapters().add(adapter)

        // set value
        o.title = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.getNotifier()).toBe(o)
        expect(notification.getOldValue()).toBe("")
        expect(notification.getNewValue()).toBe(value)
        expect(notification.getPosition()).toBe(-1)
    })

    test("eGetFromID", () => {
        const o = new BookImpl()
        expect(() => o.eGetFromID(-1, true)).toThrow(Error)
        expect(o.eGetFromID(LibraryConstants.BOOK__AUTHOR, true)).toStrictEqual(o.author)
        expect(o.eGetFromID(LibraryConstants.BOOK__CATEGORY, true)).toStrictEqual(o.category)
        expect(o.eGetFromID(LibraryConstants.BOOK__INDEXES, true)).toStrictEqual(o.indexes)
        expect(o.eGetFromID(LibraryConstants.BOOK__PAGES, true)).toStrictEqual(o.pages)
        expect(o.eGetFromID(LibraryConstants.BOOK__TABLE_OF_CONTENTS, true)).toStrictEqual(o.tableOfContents)
        expect(o.eGetFromID(LibraryConstants.BOOK__TITLE, true)).toStrictEqual(o.title)
    })

    test("eSetFromID", () => {
        const o = new BookImpl()
        expect(() => o.eSetFromID(-1, null)).toThrow(Error)
        {
            const mockValue = mock<WriterInternal>()
            const value = instance(mockValue)
            when(mockValue.eClass()).thenReturn(null)
            when(mockValue.eStaticClass()).thenReturn(null)
            when(mockValue.eInverseAdd(o, LibraryConstants.WRITER__BOOKS, null)).thenReturn(null)
            o.eSetFromID(LibraryConstants.BOOK__AUTHOR, value)
            expect(o.eGetFromID(LibraryConstants.BOOK__AUTHOR, false)).toBe(value)
            verify(mockValue.eInverseAdd(o, LibraryConstants.WRITER__BOOKS, null)).once()
        }
        {
            const value = BookCategory.SCIENCE_FICTION
            o.eSetFromID(LibraryConstants.BOOK__CATEGORY, value)
            expect(o.eGetFromID(LibraryConstants.BOOK__CATEGORY, false)).toBe(value)
        }
        {
            const mockMap = mock<ecore.EMap<string, number>>()
            const map = instance(mockMap)
            const mockIterator = mock<Iterator<ecore.EMapEntry<string, number>>>()
            const iterator = instance(mockIterator)
            const mockEntry = mock<ecore.EMapEntry<string, number>>()
            const entry = instance(mockEntry)
            const key = "Test String"
            const value = 45
            when(mockMap[Symbol.iterator]()).thenReturn(iterator)
            when(mockIterator.next())
                .thenReturn({ value: entry, done: false })
                .thenReturn({ value: undefined, done: true })
            when(mockEntry.getKey()).thenReturn(key)
            when(mockEntry.getValue()).thenReturn(value)
            o.eSetFromID(LibraryConstants.BOOK__INDEXES, map)
            expect(o.indexes.toMap()).toEqual(new Map<string, number>([[key, value]]))
        }
        {
            const value = 45
            o.eSetFromID(LibraryConstants.BOOK__PAGES, value)
            expect(o.eGetFromID(LibraryConstants.BOOK__PAGES, false)).toBe(value)
        }
        {
            const l = new ecore.ImmutableEList<string>()
            o.eSetFromID(LibraryConstants.BOOK__TABLE_OF_CONTENTS, l)
            expect(o.tableOfContents.isEmpty()).toBeTruthy()
        }

        {
            const value = "Test String"
            o.eSetFromID(LibraryConstants.BOOK__TITLE, value)
            expect(o.eGetFromID(LibraryConstants.BOOK__TITLE, false)).toBe(value)
        }
    })

    test("eIsSetFromID", () => {
        const o = new BookImpl()
        expect(() => o.eIsSetFromID(-1)).toThrow(Error)
        expect(o.eIsSetFromID(LibraryConstants.BOOK__AUTHOR)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.BOOK__CATEGORY)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.BOOK__INDEXES)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.BOOK__PAGES)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.BOOK__TABLE_OF_CONTENTS)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.BOOK__TITLE)).toBeFalsy()
    })

    test("eUnsetFromID", () => {
        const o = new BookImpl()
        expect(() => o.eUnsetFromID(-1)).toThrow(Error)
        {
            o.eUnsetFromID(LibraryConstants.BOOK__AUTHOR)
            expect(o.eGetFromID(LibraryConstants.BOOK__AUTHOR, false)).toBeNull()
        }
        {
            o.eUnsetFromID(LibraryConstants.BOOK__CATEGORY)
            const v = o.eGetFromID(LibraryConstants.BOOK__CATEGORY, false)
            expect(v).toBe(BookCategory.MYSTERY)
        }
        {
            o.eUnsetFromID(LibraryConstants.BOOK__INDEXES)
            const v = o.eGetFromID(LibraryConstants.BOOK__INDEXES, false)
            expect(v).not.toBeNull()
            const l = v as ecore.EList<BookIndex>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(LibraryConstants.BOOK__PAGES)
            const v = o.eGetFromID(LibraryConstants.BOOK__PAGES, false)
            expect(v).toBe(100)
        }
        {
            o.eUnsetFromID(LibraryConstants.BOOK__TABLE_OF_CONTENTS)
            const v = o.eGetFromID(LibraryConstants.BOOK__TABLE_OF_CONTENTS, false)
            expect(v).not.toBeNull()
            const l = v as ecore.EList<string>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(LibraryConstants.BOOK__TITLE)
            const v = o.eGetFromID(LibraryConstants.BOOK__TITLE, false)
            expect(v).toBe("")
        }
    })

    test("eBasicInverseAdd", () => {
        const o = new BookImpl()
        {
            const mockObject = mock<ecore.EObject>()
            const object = instance(mockObject)
            const mockNotifications = mock<ecore.ENotificationChain>()
            const notifications = instance(mockNotifications)
            expect(o.eBasicInverseAdd(object, -1, notifications)).toBe(notifications)
        }
        {
            const mockValue = mock<WriterInternal>()
            const value = instance(mockValue)
            when(mockValue.eClass()).thenReturn(null)
            when(mockValue.eStaticClass()).thenReturn(null)
            when(mockValue.eIsProxy()).thenReturn(false)
            o.eBasicInverseAdd(value, LibraryConstants.BOOK__AUTHOR, null)
            expect(o.author).toBe(value)

            reset(mockValue)
            const mockOther = mock<WriterInternal>()
            const other = instance(mockOther)
            when(mockOther.eIsProxy()).thenReturn(false)
            when(mockValue.eInverseRemove(o, LibraryConstants.WRITER__BOOKS, null)).thenReturn(null)
            o.eBasicInverseAdd(other, LibraryConstants.BOOK__AUTHOR, null)
            expect(o.author).toBe(other)
        }
    })

    test("eBasicInverseRemove", () => {
        const o = new BookImpl()
        {
            const mockObject = mock<ecore.EObject>()
            const object = instance(mockObject)
            const mockNotifications = mock<ecore.ENotificationChain>()
            const notifications = instance(mockNotifications)
            expect(o.eBasicInverseRemove(object, -1, notifications)).toBe(notifications)
        }
        {
            const mockValue = mock<WriterInternal>()
            const value = instance(mockValue)
            o.eBasicInverseRemove(value, LibraryConstants.BOOK__AUTHOR, null)
        }
    })
})
