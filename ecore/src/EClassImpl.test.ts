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
import { anything, capture, instance, mock, verify, when } from "ts-mockito"
import { describe, expect, test } from "vitest"
import {
    EAdapter,
    EAttribute,
    EClass,
    EClassImpl,
    EList,
    ENotificationChain,
    EObject,
    EObjectInternal,
    EObjectList,
    EOperation,
    EReference,
    EStructuralFeature,
    EcoreConstants,
    ImmutableEList,
    getEcorePackage
} from "./internal.js"

interface EAttributeInternal extends EAttribute, EObjectInternal {}
interface EClassInternal extends EClass, EObjectInternal {}
interface EOperationInternal extends EOperation, EObjectInternal {}
interface EReferenceInternal extends EReference, EObjectInternal {}
interface EStructuralFeatureInternal extends EStructuralFeature, EObjectInternal {}

describe("EClassImpl", () => {
    test("eStaticClass", () => {
        let o = new EClassImpl()
        expect(o.eStaticClass()).toBe(getEcorePackage().getEClass())
    })

    test("getEAllAttributes", () => {
        let o = new EClassImpl()
        expect(o.getEAllAttributes()).not.toBeNull()
    })

    test("getEAllContainments", () => {
        let o = new EClassImpl()
        expect(o.getEAllContainments()).not.toBeNull()
    })

    test("getEAllCrossReferences", () => {
        let o = new EClassImpl()
        expect(o.getEAllCrossReferences()).not.toBeNull()
    })

    test("getEAllOperations", () => {
        let o = new EClassImpl()
        expect(o.getEAllOperations()).not.toBeNull()
    })

    test("getEAllReferences", () => {
        let o = new EClassImpl()
        expect(o.getEAllReferences()).not.toBeNull()
    })

    test("getEAllStructuralFeatures", () => {
        let o = new EClassImpl()
        expect(o.getEAllStructuralFeatures()).not.toBeNull()
    })

    test("getEAllSuperTypes", () => {
        let o = new EClassImpl()
        expect(o.getEAllSuperTypes()).not.toBeNull()
    })

    test("getEAttributes", () => {
        let o = new EClassImpl()
        expect(o.getEAttributes()).not.toBeNull()
    })

    test("getEContainmentFeatures", () => {
        let o = new EClassImpl()
        expect(o.getEContainmentFeatures()).not.toBeNull()
    })

    test("getECrossReferenceFeatures", () => {
        let o = new EClassImpl()
        expect(o.getECrossReferenceFeatures()).not.toBeNull()
    })

    test("getEIDAttribute", () => {
        let o = new EClassImpl()
        expect(() => o.getEIDAttribute()).toThrow(Error)
    })

    test("getEOperations", () => {
        let o = new EClassImpl()
        expect(o.getEOperations()).not.toBeNull()
    })

    test("getEReferences", () => {
        let o = new EClassImpl()
        expect(o.getEReferences()).not.toBeNull()
    })

    test("getEStructuralFeatures", () => {
        let o = new EClassImpl()
        expect(o.getEStructuralFeatures()).not.toBeNull()
    })

    test("getESuperTypes", () => {
        let o = new EClassImpl()
        expect(o.getESuperTypes()).not.toBeNull()
    })

    test("getAbstract", () => {
        let o = new EClassImpl()
        // get default value
        expect(o.isAbstract()).toBe(false)
    })

    test("setAbstract", () => {
        let o = new EClassImpl()
        let value = true

        // add listener
        let mockAdapter = mock<EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set value
        o.setAbstract(value)

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.notifier).toBe(o)
        expect(notification.oldValue).toBe(false)
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("getInterface", () => {
        let o = new EClassImpl()
        // get default value
        expect(o.isInterface()).toBe(false)
    })

    test("setInterface", () => {
        let o = new EClassImpl()
        let value = true

        // add listener
        let mockAdapter = mock<EAdapter>()
        let adapter = instance(mockAdapter)
        o.eAdapters.add(adapter)

        // set value
        o.setInterface(value)

        // checks
        verify(mockAdapter.notifyChanged(anything())).once()
        const [notification] = capture(mockAdapter.notifyChanged).last()
        expect(notification.notifier).toBe(o)
        expect(notification.oldValue).toBe(false)
        expect(notification.newValue).toBe(value)
        expect(notification.position).toBe(-1)
    })

    test("getEOperation", () => {
        let o = new EClassImpl()
        expect(() => o.getEOperation(0)).toThrow(Error)
    })
    test("getEStructuralFeature", () => {
        let o = new EClassImpl()
        expect(() => o.getEStructuralFeature(0)).toThrow(Error)
    })
    test("getEStructuralFeatureFromName", () => {
        let o = new EClassImpl()
        expect(() => o.getEStructuralFeatureFromName("")).toThrow(Error)
    })
    test("getFeatureCount", () => {
        let o = new EClassImpl()
        expect(() => o.getFeatureCount()).toThrow(Error)
    })
    test("getFeatureID", () => {
        let o = new EClassImpl()
        expect(() => o.getFeatureID(null)).toThrow(Error)
    })
    test("getFeatureType", () => {
        let o = new EClassImpl()
        expect(() => o.getFeatureType(null)).toThrow(Error)
    })
    test("getOperationCount", () => {
        let o = new EClassImpl()
        expect(() => o.getOperationCount()).toThrow(Error)
    })
    test("getOperationID", () => {
        let o = new EClassImpl()
        expect(() => o.getOperationID(null)).toThrow(Error)
    })
    test("getOverride", () => {
        let o = new EClassImpl()
        expect(() => o.getOverride(null)).toThrow(Error)
    })
    test("isSuperTypeOf", () => {
        let o = new EClassImpl()
        expect(() => o.isSuperTypeOf(null)).toThrow(Error)
    })

    test("eGetFromID", () => {
        let o = new EClassImpl()
        expect(() => o.eGetFromID(-1, true)).toThrow(Error)
        expect(o.eGetFromID(EcoreConstants.ECLASS__ABSTRACT, true)).toStrictEqual(o.isAbstract())
        expect(o.eGetFromID(EcoreConstants.ECLASS__EALL_ATTRIBUTES, true)).toStrictEqual(o.getEAllAttributes())
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__EALL_ATTRIBUTES, false),
                (o.getEAllAttributes() as EObjectList<EAttribute>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__EALL_CONTAINMENTS, true)).toStrictEqual(o.getEAllContainments())
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__EALL_CONTAINMENTS, false),
                (o.getEAllContainments() as EObjectList<EReference>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__EALL_CROSS_REFERENCES, true)).toStrictEqual(
            o.getEAllCrossReferences()
        )
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__EALL_CROSS_REFERENCES, false),
                (o.getEAllCrossReferences() as EObjectList<EReference>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__EALL_OPERATIONS, true)).toStrictEqual(o.getEAllOperations())
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__EALL_OPERATIONS, false),
                (o.getEAllOperations() as EObjectList<EOperation>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__EALL_REFERENCES, true)).toStrictEqual(o.getEAllReferences())
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__EALL_REFERENCES, false),
                (o.getEAllReferences() as EObjectList<EReference>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__EALL_STRUCTURAL_FEATURES, true)).toStrictEqual(
            o.getEAllStructuralFeatures()
        )
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__EALL_STRUCTURAL_FEATURES, false),
                (o.getEAllStructuralFeatures() as EObjectList<EStructuralFeature>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__EALL_SUPER_TYPES, true)).toStrictEqual(o.getEAllSuperTypes())
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__EALL_SUPER_TYPES, false),
                (o.getEAllSuperTypes() as EObjectList<EClass>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__EATTRIBUTES, true)).toStrictEqual(o.getEAttributes())
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__EATTRIBUTES, false),
                (o.getEAttributes() as EObjectList<EAttribute>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__ECONTAINMENT_FEATURES, true)).toStrictEqual(
            o.getEContainmentFeatures()
        )
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__ECONTAINMENT_FEATURES, false),
                (o.getEContainmentFeatures() as EObjectList<EStructuralFeature>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__ECROSS_REFERENCE_FEATURES, true)).toStrictEqual(
            o.getECrossReferenceFeatures()
        )
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__ECROSS_REFERENCE_FEATURES, false),
                (o.getECrossReferenceFeatures() as EObjectList<EStructuralFeature>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(() => o.eGetFromID(EcoreConstants.ECLASS__EID_ATTRIBUTE, true)).toThrow(Error)
        expect(() => o.eGetFromID(EcoreConstants.ECLASS__EID_ATTRIBUTE, false)).toThrow(Error)
        expect(o.eGetFromID(EcoreConstants.ECLASS__EOPERATIONS, true)).toStrictEqual(o.getEOperations())
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__EOPERATIONS, false),
                (o.getEOperations() as EObjectList<EOperation>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__EREFERENCES, true)).toStrictEqual(o.getEReferences())
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__EREFERENCES, false),
                (o.getEReferences() as EObjectList<EReference>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__ESTRUCTURAL_FEATURES, true)).toStrictEqual(
            o.getEStructuralFeatures()
        )
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__ESTRUCTURAL_FEATURES, false),
                (o.getEStructuralFeatures() as EObjectList<EStructuralFeature>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__ESUPER_TYPES, true)).toStrictEqual(o.getESuperTypes())
        expect(
            deepEqual(
                o.eGetFromID(EcoreConstants.ECLASS__ESUPER_TYPES, false),
                (o.getESuperTypes() as EObjectList<EClass>).getUnResolvedList()
            )
        ).toBeTruthy()
        expect(o.eGetFromID(EcoreConstants.ECLASS__INTERFACE, true)).toStrictEqual(o.isInterface())
    })

    test("eSetFromID", () => {
        let o = new EClassImpl()
        expect(() => o.eSetFromID(-1, null)).toThrow(Error)
        {
            let value = true
            o.eSetFromID(EcoreConstants.ECLASS__ABSTRACT, value)
            expect(o.eGetFromID(EcoreConstants.ECLASS__ABSTRACT, false)).toBe(value)
        }
        {
            // list with a value
            let mockValue = mock<EOperationInternal>()
            let value = instance(mockValue)
            let l = new ImmutableEList<EOperation>([value])
            when(mockValue.eInverseAdd(o, EcoreConstants.EOPERATION__ECONTAINING_CLASS, anything())).thenReturn(null)

            // set list with new contents
            o.eSetFromID(EcoreConstants.ECLASS__EOPERATIONS, l)
            // checks
            expect(o.getEOperations().size()).toBe(1)
            expect(o.getEOperations().get(0)).toBe(value)
            verify(mockValue.eInverseAdd(o, EcoreConstants.EOPERATION__ECONTAINING_CLASS, anything())).once()
        }

        {
            // list with a value
            let mockValue = mock<EStructuralFeatureInternal>()
            let value = instance(mockValue)
            let l = new ImmutableEList<EStructuralFeature>([value])
            when(
                mockValue.eInverseAdd(o, EcoreConstants.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS, anything())
            ).thenReturn(null)

            // set list with new contents
            o.eSetFromID(EcoreConstants.ECLASS__ESTRUCTURAL_FEATURES, l)
            // checks
            expect(o.getEStructuralFeatures().size()).toBe(1)
            expect(o.getEStructuralFeatures().get(0)).toBe(value)
            verify(mockValue.eInverseAdd(o, EcoreConstants.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS, anything())).once()
        }

        {
            // list with a value
            let mockValue = mock<EClassInternal>()
            let value = instance(mockValue)
            let l = new ImmutableEList<EClass>([value])
            when(mockValue.eIsProxy()).thenReturn(false)

            // set list with new contents
            o.eSetFromID(EcoreConstants.ECLASS__ESUPER_TYPES, l)
            // checks
            expect(o.getESuperTypes().size()).toBe(1)
            expect(o.getESuperTypes().get(0)).toBe(value)
        }

        {
            let value = true
            o.eSetFromID(EcoreConstants.ECLASS__INTERFACE, value)
            expect(o.eGetFromID(EcoreConstants.ECLASS__INTERFACE, false)).toBe(value)
        }
    })

    test("eIsSetFromID", () => {
        let o = new EClassImpl()
        expect(() => o.eIsSetFromID(-1)).toThrow(Error)
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__ABSTRACT)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__EALL_ATTRIBUTES)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__EALL_CONTAINMENTS)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__EALL_CROSS_REFERENCES)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__EALL_OPERATIONS)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__EALL_REFERENCES)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__EALL_STRUCTURAL_FEATURES)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__EALL_SUPER_TYPES)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__EATTRIBUTES)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__ECONTAINMENT_FEATURES)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__ECROSS_REFERENCE_FEATURES)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__EID_ATTRIBUTE)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__EOPERATIONS)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__EREFERENCES)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__ESTRUCTURAL_FEATURES)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__ESUPER_TYPES)).toBeFalsy()
        expect(o.eIsSetFromID(EcoreConstants.ECLASS__INTERFACE)).toBeFalsy()
    })

    test("eUnsetFromID", () => {
        let o = new EClassImpl()
        expect(() => o.eUnsetFromID(-1)).toThrow(Error)
        {
            o.eUnsetFromID(EcoreConstants.ECLASS__ABSTRACT)
            let v = o.eGetFromID(EcoreConstants.ECLASS__ABSTRACT, false)
            expect(v).toBe(false)
        }
        {
            o.eUnsetFromID(EcoreConstants.ECLASS__EOPERATIONS)
            let v = o.eGetFromID(EcoreConstants.ECLASS__EOPERATIONS, false)
            expect(v).not.toBeNull()
            let l = v as EList<EOperation>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(EcoreConstants.ECLASS__ESTRUCTURAL_FEATURES)
            let v = o.eGetFromID(EcoreConstants.ECLASS__ESTRUCTURAL_FEATURES, false)
            expect(v).not.toBeNull()
            let l = v as EList<EStructuralFeature>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(EcoreConstants.ECLASS__ESUPER_TYPES)
            let v = o.eGetFromID(EcoreConstants.ECLASS__ESUPER_TYPES, false)
            expect(v).not.toBeNull()
            let l = v as EList<EClass>
            expect(l.isEmpty()).toBeTruthy()
        }
        {
            o.eUnsetFromID(EcoreConstants.ECLASS__INTERFACE)
            let v = o.eGetFromID(EcoreConstants.ECLASS__INTERFACE, false)
            expect(v).toBe(false)
        }
    })

    test("eInvokeFromID", () => {
        let o = new EClassImpl()
        expect(() => o.eInvokeFromID(-1, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.ECLASS__GET_EOPERATION_EINT, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.ECLASS__GET_ESTRUCTURAL_FEATURE_EINT, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.ECLASS__GET_ESTRUCTURAL_FEATURE_ESTRING, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.ECLASS__GET_FEATURE_COUNT, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.ECLASS__GET_FEATURE_ID_ESTRUCTURALFEATURE, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.ECLASS__GET_FEATURE_TYPE_ESTRUCTURALFEATURE, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.ECLASS__GET_OPERATION_COUNT, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.ECLASS__GET_OPERATION_ID_EOPERATION, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.ECLASS__GET_OVERRIDE_EOPERATION, null)).toThrow(Error)
        expect(() => o.eInvokeFromID(EcoreConstants.ECLASS__IS_SUPER_TYPE_OF_ECLASS, null)).toThrow(Error)
    })

    test("eBasicInverseAdd", () => {
        let o = new EClassImpl()
        {
            let mockObject = mock<EObject>()
            let object = instance(mockObject)
            let mockNotifications = mock<ENotificationChain>()
            let notifications = instance(mockNotifications)
            expect(o.eBasicInverseAdd(object, -1, notifications)).toBe(notifications)
        }
        {
            let mockValue = mock<EOperationInternal>()
            let value = instance(mockValue)
            o.eBasicInverseAdd(value, EcoreConstants.ECLASS__EOPERATIONS, null)
            expect(o.getEOperations().contains(value)).toBeTruthy()
        }
        {
            let mockValue = mock<EStructuralFeatureInternal>()
            let value = instance(mockValue)
            o.eBasicInverseAdd(value, EcoreConstants.ECLASS__ESTRUCTURAL_FEATURES, null)
            expect(o.getEStructuralFeatures().contains(value)).toBeTruthy()
        }
    })

    test("eBasicInverseRemove", () => {
        let o = new EClassImpl()
        {
            let mockObject = mock<EObject>()
            let object = instance(mockObject)
            let mockNotifications = mock<ENotificationChain>()
            let notifications = instance(mockNotifications)
            expect(o.eBasicInverseRemove(object, -1, notifications)).toBe(notifications)
        }
        {
            // initialize list with a mock object
            let mockValue = mock<EOperationInternal>()
            let value = instance(mockValue)
            when(mockValue.eInverseAdd(o, EcoreConstants.EOPERATION__ECONTAINING_CLASS, anything())).thenReturn(null)

            o.getEOperations().add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, EcoreConstants.ECLASS__EOPERATIONS, null)

            // check it was removed
            expect(o.getEOperations().contains(value)).toBeFalsy()
        }
        {
            // initialize list with a mock object
            let mockValue = mock<EStructuralFeatureInternal>()
            let value = instance(mockValue)
            when(
                mockValue.eInverseAdd(o, EcoreConstants.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS, anything())
            ).thenReturn(null)

            o.getEStructuralFeatures().add(value)

            // basic inverse remove
            o.eBasicInverseRemove(value, EcoreConstants.ECLASS__ESTRUCTURAL_FEATURES, null)

            // check it was removed
            expect(o.getEStructuralFeatures().contains(value)).toBeFalsy()
        }
    })
})
