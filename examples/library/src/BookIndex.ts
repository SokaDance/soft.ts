// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

import * as ecore from "@masagroup/ecore"

export interface BookIndex extends ecore.EObject, ecore.EMapEntry<string, ecore.EList<number>> {
    // key property
    key: string
    // value property
    readonly value: ecore.EList<number>
}
