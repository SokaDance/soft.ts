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
import {
    Addressable,
    Book,
    Borrower,
    Employee,
    Item,
    Library,
    LibraryConstants,
    LibraryImpl,
    Person,
    Writer,
    getLibraryPackage
} from "./internal"

interface BookInternal extends Book, ecore.EObjectInternal {}
interface BorrowerInternal extends Borrower, ecore.EObjectInternal {}
interface EmployeeInternal extends Employee, ecore.EObjectInternal {}
interface ItemInternal extends Item, ecore.EObjectInternal {}
interface LibraryInternal extends Library, ecore.EObjectInternal {}
interface PersonInternal extends Person, ecore.EObjectInternal {}
interface WriterInternal extends Writer, ecore.EObjectInternal {}

describe("LibraryImpl", () => {
    test("eStaticClass", () => {
        let o = new LibraryImpl()
        expect(o.eStaticClass()).toBe(getLibraryPackage().getLibrary())
    })

    test("getAddress", () => {
        let o = new LibraryImpl()
        // get default value
        expect(o.address).toBe("")
    })

    test("setAddress", () => {
        let o = new LibraryImpl()
        let value = "Test String"

        // add listener
        let mockAdapter = mock<ecore.EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set value
        o.address = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.notifier).toBe(o)
        expect(notification.oldValue).toBe("")
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("getBooks", () => {
        let o = new LibraryImpl()
        expect(o.books).not.toBeNull()
    })

    test("getBorrowers", () => {
        let o = new LibraryImpl()
        expect(o.borrowers).not.toBeNull()
    })

    test("getBranches", () => {
        let o = new LibraryImpl()
        expect(o.branches).not.toBeNull()
    })

    test("getEmployees", () => {
        let o = new LibraryImpl()
        expect(o.employees).not.toBeNull()
    })

    test("getName", () => {
        let o = new LibraryImpl()
        // get default value
        expect(o.name).toBe("")
    })

    test("setName", () => {
        let o = new LibraryImpl()
        let value = "Test String"

        // add listener
        let mockAdapter = mock<ecore.EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set value
        o.name = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.notifier).toBe(o)
        expect(notification.oldValue).toBe("")
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("getParentBranch", () => {
        // default
        let o = new LibraryImpl()
        expect(o.parentBranch).toBeNull()

        // set a mock container
        let mockContainer = mock<ecore.EObject>()
        let container = instance(mockContainer)
        o.eSetInternalContainer(container, LibraryConstants.LIBRARY__PARENT_BRANCH)

        // no proxy
        when(mockContainer.eIsProxy()).thenReturn(false)
        expect(o.parentBranch).toBe(container)
        verify(mockContainer.eIsProxy()).once()
    })

    test("setParentBranch", () => {
        let o = new LibraryImpl()
        let mockResource = mock<ecore.EResource>()
        let resource = instance(mockResource)
        let mockValue = mock<LibraryInternal>()
        let value = instance(mockValue)

        // add listener
        let mockAdapter = mock<ecore.EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set value
        when(mockValue.eInverseAdd(o, LibraryConstants.LIBRARY__BRANCHES, null)).thenReturn(null)
        when(mockValue.eResource()).thenReturn(resource)
        o.parentBranch = value
        verify(mockResource.attached(o)).once()
        verify(mockAdapter.notifyChanged(anything())).once()
        {
            let [notification] = capture(mockAdapter.notifyChanged).last()
            expect(notification.notifier).toBe(o)
            expect(notification.oldValue).toBeNull()
            expect(notification.newValue).toBe(value)
        }
        // set with the same value
        reset(mockAdapter)
        o.parentBranch = value
        verify(mockAdapter.notifyChanged(anything())).once()

        // set with another value in a different resource
        let mockOther = mock<LibraryInternal>()
        let other = instance(mockOther)
        let mockOtherResource = mock<ecore.EResource>()
        let otherResource = instance(mockOtherResource)
        reset(mockAdapter)
        reset(mockValue)
        reset(mockResource)
        when(mockValue.eInverseRemove(o, LibraryConstants.LIBRARY__BRANCHES, null)).thenReturn(null)
        when(mockValue.eResource()).thenReturn(resource)
        when(mockOther.eInverseAdd(o, LibraryConstants.LIBRARY__BRANCHES, null)).thenReturn(null)
        when(mockOther.eResource()).thenReturn(otherResource)
        o.parentBranch = other
        verify(mockResource.detached(o)).once()
        verify(mockOtherResource.attached(o)).once()
        verify(mockAdapter.notifyChanged(anything())).once()
        {
            let [notification] = capture(mockAdapter.notifyChanged).last()
            expect(notification.notifier).toBe(o)
            expect(notification.oldValue).toBe(value)
            expect(notification.newValue).toBe(other)
            expect(notification.position).toBe(-1)
        }
    })

    test("basicSetParentBranch", () => {
        let o = new LibraryImpl()
        let mockValue = mock<LibraryInternal>()
        let value = instance(mockValue)

        // add listener
        let mockAdapter = mock<ecore.EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // notification chain
        let mockNotifications = mock<ecore.ENotificationChain>()
        let notifications = instance(mockNotifications)

        // set value
        when(mockValue.eResource()).thenReturn(null)
        when(mockNotifications.add(anything())).thenReturn(true)
        o.basicSetParentBranch(value, notifications)

        // checks
        verify(mockNotifications.add(anything())).once()
        const [notification] = capture(mockNotifications.add).last()
        expect(notification.notifier).toBe(o)
        expect(notification.eventType).toBe(ecore.EventType.SET)
        expect(notification.featureID).toBe(LibraryConstants.LIBRARY__PARENT_BRANCH)
        expect(notification.oldValue).toBeNull()
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("getPeople", () => {
        let o = new LibraryImpl()
        expect(o.people).toBeNull()
    })

    test("getProprietary", () => {
        let o = new LibraryImpl()

        // get default value
        expect(o.proprietary).toBeNull()
    })

    test("setProprietary", () => {
        let o = new LibraryImpl()
        let mockValue = mock<PersonInternal>()
        let value = instance(mockValue)

        // add listener
        let mockAdapter = mock<ecore.EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set value
        o.proprietary = value

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.notifier).toBe(o)
        expect(notification.oldValue).toBeNull()
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("basicSetProprietary", () => {
        let o = new LibraryImpl()
        let mockValue = mock<PersonInternal>()
        let value = instance(mockValue)

        // add listener
        let mockAdapter = mock<ecore.EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // notification chain
        let mockNotifications = mock<ecore.ENotificationChain>()
        let notifications = instance(mockNotifications)

        // set value
        when(mockNotifications.add(anything())).thenReturn(true)
        o.basicSetProprietary(value, notifications)

        // checks
        verify(mockNotifications.add(anything())).once()
        const [notification] = capture(mockNotifications.add).last()
        expect(notification.notifier).toBe(o)
        expect(notification.eventType).toBe(ecore.EventType.SET)
        expect(notification.featureID).toBe(LibraryConstants.LIBRARY__PROPRIETARY)
        expect(notification.oldValue).toBeNull()
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("getStock", () => {
        let o = new LibraryImpl()
        expect(o.stock).not.toBeNull()
    })

    test("getWriters", () => {
        let o = new LibraryImpl()
        expect(o.writers).not.toBeNull()
    })

    test("eGetFromID", () => {
        let o = new LibraryImpl()
        expect(() => o.eGetFromID(-1, true)).toThrow(Error)
        expect(o.eGetFromID(LibraryConstants.LIBRARY__ADDRESS, true)).toStrictEqual(o.address)
        expect(o.eGetFromID(LibraryConstants.LIBRARY__BOOKS, true)).toStrictEqual(o.books)
        expect(
            deepEqual(
                o.eGetFromID(LibraryConstants.LIBRARY__BOOKS, false),
                (o.books as ecore.EObjectList<Book>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(LibraryConstants.LIBRARY__BORROWERS, true)).toStrictEqual(o.borrowers)
        expect(
            deepEqual(
                o.eGetFromID(LibraryConstants.LIBRARY__BORROWERS, false),
                (o.borrowers as ecore.EObjectList<Borrower>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(LibraryConstants.LIBRARY__BRANCHES, true)).toStrictEqual(o.branches)
        expect(
            deepEqual(
                o.eGetFromID(LibraryConstants.LIBRARY__BRANCHES, false),
                (o.branches as ecore.EObjectList<Library>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(LibraryConstants.LIBRARY__EMPLOYEES, true)).toStrictEqual(o.employees)
        expect(
            deepEqual(
                o.eGetFromID(LibraryConstants.LIBRARY__EMPLOYEES, false),
                (o.employees as ecore.EObjectList<Employee>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(LibraryConstants.LIBRARY__NAME, true)).toStrictEqual(o.name)
        expect(o.eGetFromID(LibraryConstants.LIBRARY__PARENT_BRANCH, true)).toStrictEqual(o.parentBranch)
        expect(o.eGetFromID(LibraryConstants.LIBRARY__PEOPLE, true)).toStrictEqual(o.people)
        expect(o.eGetFromID(LibraryConstants.LIBRARY__PROPRIETARY, true)).toStrictEqual(o.proprietary)
        expect(o.eGetFromID(LibraryConstants.LIBRARY__STOCK, true)).toStrictEqual(o.stock)
        expect(
            deepEqual(
                o.eGetFromID(LibraryConstants.LIBRARY__STOCK, false),
                (o.stock as ecore.EObjectList<Item>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(LibraryConstants.LIBRARY__WRITERS, true)).toStrictEqual(o.writers)
        expect(
            deepEqual(
                o.eGetFromID(LibraryConstants.LIBRARY__WRITERS, false),
                (o.writers as ecore.EObjectList<Writer>).getUnResolvedList()
            )
        ).toBeTruthy()
    })

    test("eSetFromID", () => {
        let o = new LibraryImpl()
        expect(() => o.eSetFromID(-1, null)).toThrow(Error)
        {
            let value = "Test String"
            o.eSetFromID(LibraryConstants.LIBRARY__ADDRESS, value)
            expect(o.eGetFromID(LibraryConstants.LIBRARY__ADDRESS, false)).toBe(value)
        }
        {
            // list with a value
            let mockValue = mock<BookInternal>()
            let value = instance(mockValue)
            let l = new ecore.ImmutableEList<Book>([value])
            when(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__BOOKS, anything())
            ).thenReturn(null)

            // set list with new contents
            o.eSetFromID(LibraryConstants.LIBRARY__BOOKS, l)
            // checks
            expect(o.books.size()).toBe(1)
            expect(o.books.get(0)).toBe(value)
            verify(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__BOOKS, anything())
            ).once()
        }

        {
            // list with a value
            let mockValue = mock<BorrowerInternal>()
            let value = instance(mockValue)
            let l = new ecore.ImmutableEList<Borrower>([value])
            when(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__BORROWERS, anything())
            ).thenReturn(null)

            // set list with new contents
            o.eSetFromID(LibraryConstants.LIBRARY__BORROWERS, l)
            // checks
            expect(o.borrowers.size()).toBe(1)
            expect(o.borrowers.get(0)).toBe(value)
            verify(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__BORROWERS, anything())
            ).once()
        }

        {
            // list with a value
            let mockValue = mock<LibraryInternal>()
            let value = instance(mockValue)
            let l = new ecore.ImmutableEList<Library>([value])
            when(mockValue.eInverseAdd(o, LibraryConstants.LIBRARY__PARENT_BRANCH, anything())).thenReturn(null)

            // set list with new contents
            o.eSetFromID(LibraryConstants.LIBRARY__BRANCHES, l)
            // checks
            expect(o.branches.size()).toBe(1)
            expect(o.branches.get(0)).toBe(value)
            verify(mockValue.eInverseAdd(o, LibraryConstants.LIBRARY__PARENT_BRANCH, anything())).once()
        }

        {
            // list with a value
            let mockValue = mock<EmployeeInternal>()
            let value = instance(mockValue)
            let l = new ecore.ImmutableEList<Employee>([value])
            when(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__EMPLOYEES, anything())
            ).thenReturn(null)

            // set list with new contents
            o.eSetFromID(LibraryConstants.LIBRARY__EMPLOYEES, l)
            // checks
            expect(o.employees.size()).toBe(1)
            expect(o.employees.get(0)).toBe(value)
            verify(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__EMPLOYEES, anything())
            ).once()
        }

        {
            let value = "Test String"
            o.eSetFromID(LibraryConstants.LIBRARY__NAME, value)
            expect(o.eGetFromID(LibraryConstants.LIBRARY__NAME, false)).toBe(value)
        }
        {
            let mockValue = mock<LibraryInternal>()
            let value = instance(mockValue)
            when(mockValue.eIsProxy()).thenReturn(false)
            when(mockValue.eResource()).thenReturn(null)
            when(mockValue.eInverseAdd(o, LibraryConstants.LIBRARY__BRANCHES, null)).thenReturn(null)
            o.eSetFromID(LibraryConstants.LIBRARY__PARENT_BRANCH, value)
            expect(o.eGetFromID(LibraryConstants.LIBRARY__PARENT_BRANCH, false)).toBe(value)
            verify(mockValue.eIsProxy()).once()
            verify(mockValue.eResource()).once()
            verify(mockValue.eInverseAdd(o, LibraryConstants.LIBRARY__BRANCHES, null)).once()
        }
        {
            let mockValue = mock<PersonInternal>()
            let value = instance(mockValue)
            when(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__PROPRIETARY,
                    anything()
                )
            ).thenReturn(null)
            o.eSetFromID(LibraryConstants.LIBRARY__PROPRIETARY, value)
            expect(o.eGetFromID(LibraryConstants.LIBRARY__PROPRIETARY, false)).toBe(value)
            verify(
                mockValue.eInverseAdd(
                    o,
                    ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__PROPRIETARY,
                    anything()
                )
            ).once()
        }
        {
            // list with a value
            let mockValue = mock<ItemInternal>()
            let value = instance(mockValue)
            let l = new ecore.ImmutableEList<Item>([value])
            when(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__STOCK, anything())
            ).thenReturn(null)

            // set list with new contents
            o.eSetFromID(LibraryConstants.LIBRARY__STOCK, l)
            // checks
            expect(o.stock.size()).toBe(1)
            expect(o.stock.get(0)).toBe(value)
            verify(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__STOCK, anything())
            ).once()
        }

        {
            // list with a value
            let mockValue = mock<WriterInternal>()
            let value = instance(mockValue)
            let l = new ecore.ImmutableEList<Writer>([value])
            when(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__WRITERS, anything())
            ).thenReturn(null)

            // set list with new contents
            o.eSetFromID(LibraryConstants.LIBRARY__WRITERS, l)
            // checks
            expect(o.writers.size()).toBe(1)
            expect(o.writers.get(0)).toBe(value)
            verify(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__WRITERS, anything())
            ).once()
        }
    })

    test("eIsSetFromID", () => {
        let o = new LibraryImpl()
        expect(() => o.eIsSetFromID(-1)).toThrow(Error)
        expect(o.eIsSetFromID(LibraryConstants.LIBRARY__ADDRESS)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.LIBRARY__BOOKS)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.LIBRARY__BORROWERS)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.LIBRARY__BRANCHES)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.LIBRARY__EMPLOYEES)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.LIBRARY__NAME)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.LIBRARY__PARENT_BRANCH)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.LIBRARY__PROPRIETARY)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.LIBRARY__STOCK)).toBeFalsy()
        expect(o.eIsSetFromID(LibraryConstants.LIBRARY__WRITERS)).toBeFalsy()
    })

    test("eUnsetFromID", () => {
        let o = new LibraryImpl()
        expect(() => o.eUnsetFromID(-1)).toThrow(Error)
        {
            o.eUnsetFromID(LibraryConstants.LIBRARY__ADDRESS)
            let v = o.eGetFromID(LibraryConstants.LIBRARY__ADDRESS, false)
            expect(v).toBe("")
        }
        {
            o.eUnsetFromID(LibraryConstants.LIBRARY__BOOKS)
            let v = o.eGetFromID(LibraryConstants.LIBRARY__BOOKS, false)
            expect(v).not.toBeNull()
            let l = v as ecore.EList<Book>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(LibraryConstants.LIBRARY__BORROWERS)
            let v = o.eGetFromID(LibraryConstants.LIBRARY__BORROWERS, false)
            expect(v).not.toBeNull()
            let l = v as ecore.EList<Borrower>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(LibraryConstants.LIBRARY__BRANCHES)
            let v = o.eGetFromID(LibraryConstants.LIBRARY__BRANCHES, false)
            expect(v).not.toBeNull()
            let l = v as ecore.EList<Library>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(LibraryConstants.LIBRARY__EMPLOYEES)
            let v = o.eGetFromID(LibraryConstants.LIBRARY__EMPLOYEES, false)
            expect(v).not.toBeNull()
            let l = v as ecore.EList<Employee>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(LibraryConstants.LIBRARY__NAME)
            let v = o.eGetFromID(LibraryConstants.LIBRARY__NAME, false)
            expect(v).toBe("")
        }
        {
            o.eUnsetFromID(LibraryConstants.LIBRARY__PARENT_BRANCH)
            expect(o.eGetFromID(LibraryConstants.LIBRARY__PARENT_BRANCH, false)).toBeNull()
        }
        {
            o.eUnsetFromID(LibraryConstants.LIBRARY__PROPRIETARY)
            expect(o.eGetFromID(LibraryConstants.LIBRARY__PROPRIETARY, false)).toBeNull()
        }
        {
            o.eUnsetFromID(LibraryConstants.LIBRARY__STOCK)
            let v = o.eGetFromID(LibraryConstants.LIBRARY__STOCK, false)
            expect(v).not.toBeNull()
            let l = v as ecore.EList<Item>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(LibraryConstants.LIBRARY__WRITERS)
            let v = o.eGetFromID(LibraryConstants.LIBRARY__WRITERS, false)
            expect(v).not.toBeNull()
            let l = v as ecore.EList<Writer>
            expect(l.isEmpty()).toBeTruthy()
        }
    })

    test("eBasicInverseAdd", () => {
        let o = new LibraryImpl()
        {
            let mockObject = mock<ecore.EObject>()
            let object = instance(mockObject)
            let mockNotifications = mock<ecore.ENotificationChain>()
            let notifications = instance(mockNotifications)
            expect(o.eBasicInverseAdd(object, -1, notifications)).toBe(notifications)
        }
        {
            let mockValue = mock<LibraryInternal>()
            let value = instance(mockValue)
            o.eBasicInverseAdd(value, LibraryConstants.LIBRARY__BRANCHES, null)
            expect(o.branches.contains(value)).toBeTruthy()
        }
        {
            let mockValue = mock<LibraryInternal>()
            let value = instance(mockValue)
            when(mockValue.eResource()).thenReturn(null)
            when(mockValue.eIsProxy()).thenReturn(false)
            o.eBasicInverseAdd(value, LibraryConstants.LIBRARY__PARENT_BRANCH, null)
            expect(o.parentBranch).toBe(value)

            reset(mockValue)
            let mockOther = mock<LibraryInternal>()
            let other = instance(mockOther)
            when(mockOther.eResource()).thenReturn(null)
            when(mockOther.eIsProxy()).thenReturn(false)
            when(mockValue.eResource()).thenReturn(null)
            when(mockValue.eInverseRemove(o, LibraryConstants.LIBRARY__BRANCHES, null)).thenReturn(null)
            o.eBasicInverseAdd(other, LibraryConstants.LIBRARY__PARENT_BRANCH, null)
            expect(o.parentBranch).toBe(other)
        }
    })

    test("eBasicInverseRemove", () => {
        let o = new LibraryImpl()
        {
            let mockObject = mock<ecore.EObject>()
            let object = instance(mockObject)
            let mockNotifications = mock<ecore.ENotificationChain>()
            let notifications = instance(mockNotifications)
            expect(o.eBasicInverseRemove(object, -1, notifications)).toBe(notifications)
        }
        {
            // initialize list with a mock object
            let mockValue = mock<BookInternal>()
            let value = instance(mockValue)
            when(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__BOOKS, anything())
            ).thenReturn(null)

            o.books.add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, LibraryConstants.LIBRARY__BOOKS, null)

            // check it was removed
            expect(o.books.contains(value)).toBeFalsy()
        }
        {
            // initialize list with a mock object
            let mockValue = mock<BorrowerInternal>()
            let value = instance(mockValue)
            when(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__BORROWERS, anything())
            ).thenReturn(null)

            o.borrowers.add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, LibraryConstants.LIBRARY__BORROWERS, null)

            // check it was removed
            expect(o.borrowers.contains(value)).toBeFalsy()
        }
        {
            // initialize list with a mock object
            let mockValue = mock<LibraryInternal>()
            let value = instance(mockValue)
            when(mockValue.eInverseAdd(o, LibraryConstants.LIBRARY__PARENT_BRANCH, anything())).thenReturn(null)

            o.branches.add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, LibraryConstants.LIBRARY__BRANCHES, null)

            // check it was removed
            expect(o.branches.contains(value)).toBeFalsy()
        }
        {
            // initialize list with a mock object
            let mockValue = mock<EmployeeInternal>()
            let value = instance(mockValue)
            when(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__EMPLOYEES, anything())
            ).thenReturn(null)

            o.employees.add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, LibraryConstants.LIBRARY__EMPLOYEES, null)

            // check it was removed
            expect(o.employees.contains(value)).toBeFalsy()
        }
        {
            let mockValue = mock<LibraryInternal>()
            let value = instance(mockValue)
            o.eBasicInverseRemove(value, LibraryConstants.LIBRARY__PARENT_BRANCH, null)
        }
        {
            let mockValue = mock<PersonInternal>()
            let value = instance(mockValue)
            o.eBasicInverseRemove(value, LibraryConstants.LIBRARY__PROPRIETARY, null)
        }
        {
            // initialize list with a mock object
            let mockValue = mock<ItemInternal>()
            let value = instance(mockValue)
            when(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__STOCK, anything())
            ).thenReturn(null)

            o.stock.add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, LibraryConstants.LIBRARY__STOCK, null)

            // check it was removed
            expect(o.stock.contains(value)).toBeFalsy()
        }
        {
            // initialize list with a mock object
            let mockValue = mock<WriterInternal>()
            let value = instance(mockValue)
            when(
                mockValue.eInverseAdd(o, ecore.EOPPOSITE_FEATURE_BASE - LibraryConstants.LIBRARY__WRITERS, anything())
            ).thenReturn(null)

            o.writers.add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, LibraryConstants.LIBRARY__WRITERS, null)

            // check it was removed
            expect(o.writers.contains(value)).toBeFalsy()
        }
    })
})
