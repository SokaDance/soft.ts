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
    EAttribute,
    EClass,
    EDataType,
    EStructuralFeatureExt,
    EcoreConstants,
    EventType,
    Notification,
    getEcorePackage
} from "./internal.js"

export class EAttributeImpl extends EStructuralFeatureExt implements EAttribute {
    protected _isID: boolean

    constructor() {
        super()
        this._isID = false
    }

    eStaticClass(): EClass {
        return getEcorePackage().getEAttribute()
    }

    // get the value of eAttributeType
    getEAttributeType(): EDataType {
        throw new Error("get eAttributeType not implemented")
    }

    // get the basic value of eAttributeType with no proxy resolution
    basicGetEAttributeType(): EDataType {
        throw new Error("basicGetEAttributeType not implemented")
    }

    // get the value of iD
    isID(): boolean {
        return this._isID
    }

    // set the value of iD
    setID(newIsID: boolean): void {
        // set the value of isID
        let oldIsID = this._isID
        this._isID = newIsID
        if (this.eNotificationRequired) {
            this.eNotify(new Notification(this, EventType.SET, EcoreConstants.EATTRIBUTE__ID, oldIsID, newIsID))
        }
    }

    eGetFromID(featureID: number, resolve: boolean): any {
        switch (featureID) {
            case EcoreConstants.EATTRIBUTE__EATTRIBUTE_TYPE: {
                return resolve ? this.getEAttributeType() : this.basicGetEAttributeType()
            }
            case EcoreConstants.EATTRIBUTE__ID: {
                return this.isID()
            }
            default: {
                return super.eGetFromID(featureID, resolve)
            }
        }
    }

    eSetFromID(featureID: number, newValue: any) {
        switch (featureID) {
            case EcoreConstants.EATTRIBUTE__ID: {
                this.setID(newValue as boolean)
                break
            }
            default: {
                super.eSetFromID(featureID, newValue)
            }
        }
    }

    eUnsetFromID(featureID: number) {
        switch (featureID) {
            case EcoreConstants.EATTRIBUTE__ID: {
                this.setID(false)
                break
            }
            default: {
                super.eUnsetFromID(featureID)
            }
        }
    }

    eIsSetFromID(featureID: number): boolean {
        switch (featureID) {
            case EcoreConstants.EATTRIBUTE__EATTRIBUTE_TYPE: {
                return this.getEAttributeType() != null
            }
            case EcoreConstants.EATTRIBUTE__ID: {
                return this._isID != false
            }
            default: {
                return super.eIsSetFromID(featureID)
            }
        }
    }
}
