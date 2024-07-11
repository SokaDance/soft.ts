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
import { EmptyConstants, EmptyPackage, getEmptyFactory } from "./internal.js"

export class EmptyPackageImpl extends ecore.EPackageExt implements EmptyPackage {
    private static _instance: EmptyPackageImpl = null

    public static getInstance(): EmptyPackageImpl {
        if (!this._instance) {
            this._instance = new EmptyPackageImpl()
        }
        return this._instance
    }

    private constructor() {
        super()
        this.name = EmptyConstants.eNAME
        this.nsPrefix = EmptyConstants.eNS_PREFIX
        this.nsURI = EmptyConstants.eNS_URI
        this.eFactoryInstance = getEmptyFactory()
        this.createPackageContents()
        this.initializePackageContents()
        this.createResource()
    }

    private createPackageContents(): void {}

    private initializePackageContents(): void {}
}
