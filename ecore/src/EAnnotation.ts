// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

import { EList, EMap, EModelElement, EObject } from "./internal.js"

export interface EAnnotation extends EModelElement {
    // source
    getSource(): string
    setSource(newSource: string): void

    // details
    getDetails(): EMap<string, string>

    // eModelElement
    getEModelElement(): EModelElement
    setEModelElement(newEModelElement: EModelElement): void

    // contents
    getContents(): EList<EObject>

    // references
    getReferences(): EList<EObject>
}
