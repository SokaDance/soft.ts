// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

import { EClassifier, EList, EObject, ETypeParameter } from "./internal.js"

export interface EGenericType extends EObject {
    // References
    getEUpperBound(): EGenericType
    setEUpperBound(newEUpperBound: EGenericType): void

    getETypeArguments(): EList<EGenericType>

    getERawType(): EClassifier

    getELowerBound(): EGenericType
    setELowerBound(newELowerBound: EGenericType): void

    getETypeParameter(): ETypeParameter
    setETypeParameter(newETypeParameter: ETypeParameter): void

    getEClassifier(): EClassifier
    setEClassifier(newEClassifier: EClassifier): void

    // Operations
    isInstance(object: any): boolean
}
