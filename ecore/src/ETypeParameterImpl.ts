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
    BasicEObjectList,
    EClass,
    EGenericType,
    EList,
    ENamedElementImpl,
    ENotificationChain,
    ENotifyingList,
    EObject,
    ETypeParameter,
    EcoreConstants,
    getEcorePackage
} from "./internal.js"

export class ETypeParameterImpl extends ENamedElementImpl implements ETypeParameter {
    protected _eBounds: EList<EGenericType>

    constructor() {
        super()
        this._eBounds = null
    }

    eStaticClass(): EClass {
        return getEcorePackage().getETypeParameter()
    }

    // get the value of eBounds
    getEBounds(): EList<EGenericType> {
        if (this._eBounds == null) {
            this._eBounds = this.initEBounds()
        }
        return this._eBounds
    }

    protected initEBounds(): EList<EGenericType> {
        return new BasicEObjectList<EGenericType>(
            this,
            EcoreConstants.ETYPE_PARAMETER__EBOUNDS,
            -1,
            true,
            true,
            false,
            false,
            false
        )
    }

    eGetFromID(featureID: number, resolve: boolean): any {
        switch (featureID) {
            case EcoreConstants.ETYPE_PARAMETER__EBOUNDS: {
                return this.getEBounds()
            }
            default: {
                return super.eGetFromID(featureID, resolve)
            }
        }
    }

    eSetFromID(featureID: number, newValue: any) {
        switch (featureID) {
            case EcoreConstants.ETYPE_PARAMETER__EBOUNDS: {
                const list = this.getEBounds()
                list.clear()
                list.addAll(newValue as EList<EGenericType>)
                break
            }
            default: {
                super.eSetFromID(featureID, newValue)
            }
        }
    }

    eUnsetFromID(featureID: number) {
        switch (featureID) {
            case EcoreConstants.ETYPE_PARAMETER__EBOUNDS: {
                this.getEBounds().clear()
                break
            }
            default: {
                super.eUnsetFromID(featureID)
            }
        }
    }

    eIsSetFromID(featureID: number): boolean {
        switch (featureID) {
            case EcoreConstants.ETYPE_PARAMETER__EBOUNDS: {
                return this._eBounds && this._eBounds.size() != 0
            }
            default: {
                return super.eIsSetFromID(featureID)
            }
        }
    }

    eBasicInverseRemove(otherEnd: EObject, featureID: number, notifications: ENotificationChain): ENotificationChain {
        switch (featureID) {
            case EcoreConstants.ETYPE_PARAMETER__EBOUNDS: {
                let list = this.getEBounds() as ENotifyingList<EGenericType>
                let end = otherEnd as EGenericType
                return list.removeWithNotification(end, notifications)
            }
            default: {
                return super.eBasicInverseRemove(otherEnd, featureID, notifications)
            }
        }
    }
}
