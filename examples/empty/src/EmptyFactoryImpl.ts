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
import { EmptyConstants, EmptyFactory } from "./internal.js"

export class EmptyFactoryImpl extends ecore.EFactoryExt implements EmptyFactory {
    private static _instance: EmptyFactoryImpl = null

    public static getInstance(): EmptyFactoryImpl {
        if (!this._instance) {
            this._instance = new EmptyFactoryImpl()
        }
        return this._instance
    }

    protected constructor() {
        super()
    }

    create(eClass: ecore.EClass): ecore.EObject {
        switch (eClass.classifierID) {
            default:
                throw new Error("create: " + eClass.classifierID + " not found")
        }
    }

    createFromString(eDataType: ecore.EDataType, literalValue: string): any {
        switch (eDataType.classifierID) {
            default:
                throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier")
        }
    }

    convertToString(eDataType: ecore.EDataType, instanceValue: any): string {
        switch (eDataType.classifierID) {
            default:
                throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier")
        }
    }
}
