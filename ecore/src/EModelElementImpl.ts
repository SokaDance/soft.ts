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
    EAnnotation,
    EClass,
    EList,
    EModelElement,
    ENotificationChain,
    ENotifyingList,
    EObject,
    EObjectImpl,
    EcoreConstants,
    getEcorePackage
} from "./internal.js"

export class EModelElementImpl extends EObjectImpl implements EModelElement {
    protected _eAnnotations: EList<EAnnotation>

    constructor() {
        super()
        this._eAnnotations = null
    }

    eStaticClass(): EClass {
        return getEcorePackage().getEModelElement()
    }

    // get the value of eAnnotations
    getEAnnotations(): EList<EAnnotation> {
        if (this._eAnnotations == null) {
            this._eAnnotations = this.initEAnnotations()
        }
        return this._eAnnotations
    }

    // set the value of eAnnotations
    setEAnnotations(newEAnnotations: EList<EAnnotation>) {
        const l = this.getEAnnotations()
        l.clear()
        l.addAll(newEAnnotations)
    }

    // getEAnnotation default implementation
    getEAnnotation(source: string): EAnnotation {
        throw new Error("getEAnnotation not implemented")
    }

    protected initEAnnotations(): EList<EAnnotation> {
        return new BasicEObjectList<EAnnotation>(
            this,
            EcoreConstants.EMODEL_ELEMENT__EANNOTATIONS,
            EcoreConstants.EANNOTATION__EMODEL_ELEMENT,
            true,
            true,
            true,
            false,
            false
        )
    }

    eGetFromID(featureID: number, resolve: boolean): any {
        switch (featureID) {
            case EcoreConstants.EMODEL_ELEMENT__EANNOTATIONS: {
                return this.getEAnnotations()
            }
            default: {
                return super.eGetFromID(featureID, resolve)
            }
        }
    }

    async eGetFromIDAsync(featureID: number, resolve: boolean): Promise<any> {
        return this.eGetFromID(featureID, resolve)
    }

    eSetFromID(featureID: number, newValue: any) {
        switch (featureID) {
            case EcoreConstants.EMODEL_ELEMENT__EANNOTATIONS: {
                const list = this.getEAnnotations()
                list.clear()
                list.addAll(newValue as EList<EAnnotation>)
                break
            }
            default: {
                super.eSetFromID(featureID, newValue)
            }
        }
    }

    eUnsetFromID(featureID: number) {
        switch (featureID) {
            case EcoreConstants.EMODEL_ELEMENT__EANNOTATIONS: {
                this.getEAnnotations().clear()
                break
            }
            default: {
                super.eUnsetFromID(featureID)
            }
        }
    }

    eIsSetFromID(featureID: number): boolean {
        switch (featureID) {
            case EcoreConstants.EMODEL_ELEMENT__EANNOTATIONS: {
                return this._eAnnotations && !this._eAnnotations.isEmpty()
            }
            default: {
                return super.eIsSetFromID(featureID)
            }
        }
    }

    eInvokeFromID(operationID: number, args: EList<any>): any {
        switch (operationID) {
            case EcoreConstants.EMODEL_ELEMENT__GET_EANNOTATION_ESTRING: {
                return this.getEAnnotation(args.get(0) as string)
            }
            default: {
                return super.eInvokeFromID(operationID, args)
            }
        }
    }

    eBasicInverseAdd(otherEnd: EObject, featureID: number, notifications: ENotificationChain): ENotificationChain {
        switch (featureID) {
            case EcoreConstants.EMODEL_ELEMENT__EANNOTATIONS: {
                const list = this.getEAnnotations() as ENotifyingList<EAnnotation>
                const end = otherEnd as EAnnotation
                return list.addWithNotification(end, notifications)
            }
            default: {
                return super.eBasicInverseAdd(otherEnd, featureID, notifications)
            }
        }
    }

    eBasicInverseRemove(otherEnd: EObject, featureID: number, notifications: ENotificationChain): ENotificationChain {
        switch (featureID) {
            case EcoreConstants.EMODEL_ELEMENT__EANNOTATIONS: {
                const list = this.getEAnnotations() as ENotifyingList<EAnnotation>
                const end = otherEnd as EAnnotation
                return list.removeWithNotification(end, notifications)
            }
            default: {
                return super.eBasicInverseRemove(otherEnd, featureID, notifications)
            }
        }
    }
}
