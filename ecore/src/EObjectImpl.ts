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
    BasicEDataTypeList,
    BasicEList,
    BasicEObject,
    BasicEObjectList,
    EClass,
    EList,
    ENotificationChain,
    ENotifyingList,
    EObject,
    EObjectInternal,
    EOperation,
    EReference,
    EResource,
    EStructuralFeature,
    EcoreConstants,
    getEcorePackage,
    isEObjectInternal,
    isEObjectList,
} from "./internal";

export class EObjectImpl extends BasicEObject implements EObject {
    constructor() {
        super();
    }

    eStaticClass(): EClass {
        return getEcorePackage().getEObject();
    }

    eInvokeFromID(operationID: number, args: EList<any>): any {
        switch (operationID) {
            case EcoreConstants.EOBJECT__EALL_CONTENTS: {
                return this.eAllContents();
            }
            case EcoreConstants.EOBJECT__ECLASS: {
                return this.eClass();
            }
            case EcoreConstants.EOBJECT__ECONTAINER: {
                return this.eContainer();
            }
            case EcoreConstants.EOBJECT__ECONTAINING_FEATURE: {
                return this.eContainingFeature();
            }
            case EcoreConstants.EOBJECT__ECONTAINMENT_FEATURE: {
                return this.eContainmentFeature();
            }
            case EcoreConstants.EOBJECT__ECONTENTS: {
                return this.eContents();
            }
            case EcoreConstants.EOBJECT__ECROSS_REFERENCES: {
                return this.eCrossReferences();
            }
            case EcoreConstants.EOBJECT__EGET_ESTRUCTURALFEATURE: {
                return this.eGet(args.get(0) as EStructuralFeature);
            }
            case EcoreConstants.EOBJECT__EGET_ESTRUCTURALFEATURE_EBOOLEAN: {
                return this.eGetResolve(args.get(0) as EStructuralFeature, args.get(1) as boolean);
            }
            case EcoreConstants.EOBJECT__EINVOKE_EOPERATION_EELIST: {
                return this.eInvoke(args.get(0) as EOperation, args.get(1) as EList<any>);
            }
            case EcoreConstants.EOBJECT__EIS_PROXY: {
                return this.eIsProxy();
            }
            case EcoreConstants.EOBJECT__EIS_SET_ESTRUCTURALFEATURE: {
                return this.eIsSet(args.get(0) as EStructuralFeature);
            }
            case EcoreConstants.EOBJECT__ERESOURCE: {
                return this.eResource();
            }
            case EcoreConstants.EOBJECT__ESET_ESTRUCTURALFEATURE_EJAVAOBJECT: {
                this.eSet(args.get(0) as EStructuralFeature, args.get(1));
                return null;
            }
            case EcoreConstants.EOBJECT__EUNSET_ESTRUCTURALFEATURE: {
                this.eUnset(args.get(0) as EStructuralFeature);
                return null;
            }
            default: {
                return super.eInvokeFromID(operationID, args);
            }
        }
    }
}
