// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

import {
    EAnnotation,
    EAttribute,
    EClass,
    EDataType,
    EEnum,
    EEnumLiteral,
    EFactory,
    EGenericType,
    EModelElement,
    EObject,
    EOperation,
    EPackage,
    EParameter,
    EReference,
    EStringToStringMapEntry,
    ETypeParameter,
    EcoreFactoryImpl
} from "./internal.js"

export interface EcoreFactory extends EFactory {
    createEAnnotation(): EAnnotation
    createEAnnotationFromContainer(eContainer: EModelElement): EAnnotation

    createEAttribute(): EAttribute
    createEAttributeFromContainer(eContainer: EClass): EAttribute
    createEAttributeFromContainerAndClassID(eContainer: EClass, classID: number): EAttribute

    createEClass(): EClass
    createEClassFromContainer(eContainer: EPackage): EClass
    createEClassFromContainerAndClassID(eContainer: EPackage, classID: number): EClass

    createEDataType(): EDataType
    createEDataTypeFromContainer(eContainer: EPackage): EDataType
    createEDataTypeFromContainerAndClassID(eContainer: EPackage, classID: number): EDataType

    createEEnum(): EEnum
    createEEnumFromContainer(eContainer: EPackage): EEnum
    createEEnumFromContainerAndClassID(eContainer: EPackage, classID: number): EEnum

    createEEnumLiteral(): EEnumLiteral
    createEEnumLiteralFromContainer(eContainer: EEnum): EEnumLiteral

    createEFactory(): EFactory
    createEFactoryFromContainer(eContainer: EPackage): EFactory

    createEGenericType(): EGenericType

    createEObject(): EObject

    createEOperation(): EOperation
    createEOperationFromContainer(eContainer: EClass): EOperation
    createEOperationFromContainerAndClassID(eContainer: EClass, classID: number): EOperation

    createEPackage(): EPackage
    createEPackageFromContainer(eContainer: EPackage): EPackage

    createEParameter(): EParameter
    createEParameterFromContainer(eContainer: EOperation): EParameter

    createEReference(): EReference
    createEReferenceFromContainer(eContainer: EClass): EReference
    createEReferenceFromContainerAndClassID(eContainer: EClass, classID: number): EReference

    createEStringToStringMapEntry(): EStringToStringMapEntry

    createETypeParameter(): ETypeParameter
}

export function getEcoreFactory(): EcoreFactory {
    return EcoreFactoryImpl.getInstance()
}
