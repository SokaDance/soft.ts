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
    EClass,
    EList,
    ENotification,
    ENotificationChain,
    ENotifyingList,
    EOPPOSITE_FEATURE_BASE,
    EObject,
    EObjectInternal,
    EStructuralFeature,
    ETypedElement,
    ETypedElementExt,
    EcoreConstants,
    EventType,
    Notification,
    getEcorePackage,
    isEObjectInternal,
    isEObjectList,
} from "./internal";

export class EStructuralFeatureImpl extends ETypedElementExt implements EStructuralFeature {
    protected _isChangeable: boolean;
    protected _defaultValueLiteral: string;
    protected _isTransient: boolean;
    protected _isDerived: boolean;
    protected _featureID: number;
    protected _isUnsettable: boolean;
    protected _isVolatile: boolean;

    constructor() {
        super();
        this._defaultValueLiteral = "";
        this._featureID = -1;
        this._isChangeable = true;
        this._isDerived = false;
        this._isTransient = false;
        this._isUnsettable = false;
        this._isVolatile = false;
    }

    eStaticClass(): EClass {
        return getEcorePackage().getEStructuralFeature();
    }

    // get the value of defaultValue
    get defaultValue(): any {
        throw new Error("get defaultValue not implemented");
    }

    // set the value of defaultValue
    set defaultValue(newDefaultValue: any) {
        throw new Error("set defaultValue not implemented");
    }

    // get the value of defaultValueLiteral
    get defaultValueLiteral(): string {
        return this._defaultValueLiteral;
    }

    // set the value of defaultValueLiteral
    set defaultValueLiteral(newDefaultValueLiteral: string) {
        let oldDefaultValueLiteral = this._defaultValueLiteral;
        this._defaultValueLiteral = newDefaultValueLiteral;
        if (this.eNotificationRequired) {
            this.eNotify(
                new Notification(
                    this,
                    EventType.SET,
                    EcoreConstants.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL,
                    oldDefaultValueLiteral,
                    newDefaultValueLiteral,
                ),
            );
        }
    }

    // get the value of eContainingClass
    get eContainingClass(): EClass {
        if (this.eContainerFeatureID() == EcoreConstants.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS) {
            return this.eContainer() as EClass;
        }
        return null;
    }

    // get the value of featureID
    get featureID(): number {
        return this._featureID;
    }

    // set the value of featureID
    set featureID(newFeatureID: number) {
        let oldFeatureID = this._featureID;
        this._featureID = newFeatureID;
        if (this.eNotificationRequired) {
            this.eNotify(
                new Notification(
                    this,
                    EventType.SET,
                    EcoreConstants.ESTRUCTURAL_FEATURE__FEATURE_ID,
                    oldFeatureID,
                    newFeatureID,
                ),
            );
        }
    }

    // get the value of isChangeable
    get isChangeable(): boolean {
        return this._isChangeable;
    }

    // set the value of isChangeable
    set isChangeable(newIsChangeable: boolean) {
        let oldIsChangeable = this._isChangeable;
        this._isChangeable = newIsChangeable;
        if (this.eNotificationRequired) {
            this.eNotify(
                new Notification(
                    this,
                    EventType.SET,
                    EcoreConstants.ESTRUCTURAL_FEATURE__CHANGEABLE,
                    oldIsChangeable,
                    newIsChangeable,
                ),
            );
        }
    }

    // get the value of isDerived
    get isDerived(): boolean {
        return this._isDerived;
    }

    // set the value of isDerived
    set isDerived(newIsDerived: boolean) {
        let oldIsDerived = this._isDerived;
        this._isDerived = newIsDerived;
        if (this.eNotificationRequired) {
            this.eNotify(
                new Notification(
                    this,
                    EventType.SET,
                    EcoreConstants.ESTRUCTURAL_FEATURE__DERIVED,
                    oldIsDerived,
                    newIsDerived,
                ),
            );
        }
    }

    // get the value of isTransient
    get isTransient(): boolean {
        return this._isTransient;
    }

    // set the value of isTransient
    set isTransient(newIsTransient: boolean) {
        let oldIsTransient = this._isTransient;
        this._isTransient = newIsTransient;
        if (this.eNotificationRequired) {
            this.eNotify(
                new Notification(
                    this,
                    EventType.SET,
                    EcoreConstants.ESTRUCTURAL_FEATURE__TRANSIENT,
                    oldIsTransient,
                    newIsTransient,
                ),
            );
        }
    }

    // get the value of isUnsettable
    get isUnsettable(): boolean {
        return this._isUnsettable;
    }

    // set the value of isUnsettable
    set isUnsettable(newIsUnsettable: boolean) {
        let oldIsUnsettable = this._isUnsettable;
        this._isUnsettable = newIsUnsettable;
        if (this.eNotificationRequired) {
            this.eNotify(
                new Notification(
                    this,
                    EventType.SET,
                    EcoreConstants.ESTRUCTURAL_FEATURE__UNSETTABLE,
                    oldIsUnsettable,
                    newIsUnsettable,
                ),
            );
        }
    }

    // get the value of isVolatile
    get isVolatile(): boolean {
        return this._isVolatile;
    }

    // set the value of isVolatile
    set isVolatile(newIsVolatile: boolean) {
        let oldIsVolatile = this._isVolatile;
        this._isVolatile = newIsVolatile;
        if (this.eNotificationRequired) {
            this.eNotify(
                new Notification(
                    this,
                    EventType.SET,
                    EcoreConstants.ESTRUCTURAL_FEATURE__VOLATILE,
                    oldIsVolatile,
                    newIsVolatile,
                ),
            );
        }
    }

    // getContainerClass default implementation
    getContainerClass(): any {
        throw new Error("getContainerClass not implemented");
    }

    eGetFromID(featureID: number, resolve: boolean): any {
        switch (featureID) {
            case EcoreConstants.ESTRUCTURAL_FEATURE__CHANGEABLE: {
                return this.isChangeable;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__DEFAULT_VALUE: {
                return this.defaultValue;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL: {
                return this.defaultValueLiteral;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__DERIVED: {
                return this.isDerived;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS: {
                return this.eContainingClass;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__FEATURE_ID: {
                return this.featureID;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__TRANSIENT: {
                return this.isTransient;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__UNSETTABLE: {
                return this.isUnsettable;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__VOLATILE: {
                return this.isVolatile;
            }
            default: {
                return super.eGetFromID(featureID, resolve);
            }
        }
    }

    eSetFromID(featureID: number, newValue: any) {
        switch (featureID) {
            case EcoreConstants.ESTRUCTURAL_FEATURE__CHANGEABLE: {
                this.isChangeable = newValue as boolean;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__DEFAULT_VALUE: {
                this.defaultValue = newValue as any;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL: {
                this.defaultValueLiteral = newValue as string;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__DERIVED: {
                this.isDerived = newValue as boolean;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__FEATURE_ID: {
                this.featureID = newValue as number;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__TRANSIENT: {
                this.isTransient = newValue as boolean;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__UNSETTABLE: {
                this.isUnsettable = newValue as boolean;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__VOLATILE: {
                this.isVolatile = newValue as boolean;
                break;
            }
            default: {
                super.eSetFromID(featureID, newValue);
            }
        }
    }

    eUnsetFromID(featureID: number) {
        switch (featureID) {
            case EcoreConstants.ESTRUCTURAL_FEATURE__CHANGEABLE: {
                this.isChangeable = true;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__DEFAULT_VALUE: {
                this.defaultValue = null;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL: {
                this.defaultValueLiteral = "";
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__DERIVED: {
                this.isDerived = false;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__FEATURE_ID: {
                this.featureID = -1;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__TRANSIENT: {
                this.isTransient = false;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__UNSETTABLE: {
                this.isUnsettable = false;
                break;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__VOLATILE: {
                this.isVolatile = false;
                break;
            }
            default: {
                super.eUnsetFromID(featureID);
            }
        }
    }

    eIsSetFromID(featureID: number): boolean {
        switch (featureID) {
            case EcoreConstants.ESTRUCTURAL_FEATURE__CHANGEABLE: {
                return this._isChangeable != true;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__DEFAULT_VALUE: {
                return this.defaultValue != null;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL: {
                return this._defaultValueLiteral != "";
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__DERIVED: {
                return this._isDerived != false;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS: {
                return this.eContainingClass != null;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__FEATURE_ID: {
                return this._featureID != -1;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__TRANSIENT: {
                return this._isTransient != false;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__UNSETTABLE: {
                return this._isUnsettable != false;
            }
            case EcoreConstants.ESTRUCTURAL_FEATURE__VOLATILE: {
                return this._isVolatile != false;
            }
            default: {
                return super.eIsSetFromID(featureID);
            }
        }
    }

    eInvokeFromID(operationID: number, args: EList<any>): any {
        switch (operationID) {
            case EcoreConstants.ESTRUCTURAL_FEATURE__GET_CONTAINER_CLASS: {
                return this.getContainerClass();
            }
            default: {
                return super.eInvokeFromID(operationID, args);
            }
        }
    }

    eBasicInverseAdd(
        otherEnd: EObject,
        featureID: number,
        notifications: ENotificationChain,
    ): ENotificationChain {
        switch (featureID) {
            case EcoreConstants.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS: {
                let msgs = notifications;
                if (this.eContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.eBasicSetContainer(
                    otherEnd,
                    EcoreConstants.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS,
                    msgs,
                );
            }
            default: {
                return super.eBasicInverseAdd(otherEnd, featureID, notifications);
            }
        }
    }

    eBasicInverseRemove(
        otherEnd: EObject,
        featureID: number,
        notifications: ENotificationChain,
    ): ENotificationChain {
        switch (featureID) {
            case EcoreConstants.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS: {
                return this.eBasicSetContainer(
                    null,
                    EcoreConstants.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS,
                    notifications,
                );
            }
            default: {
                return super.eBasicInverseRemove(otherEnd, featureID, notifications);
            }
        }
    }
}
