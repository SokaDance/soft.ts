// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

import { anything, capture, instance, mock, reset, verify, when } from "ts-mockito";
import {
    EAdapter,
    EClassifier,
    EDataTypeImpl,
    EList,
    ENotification,
    ENotificationChain,
    ENotifyingList,
    EOPPOSITE_FEATURE_BASE,
    EObject,
    EObjectInternal,
    EResource,
    EResourceSet,
    EcoreConstants,
    EventType,
    Notification,
    getEcorePackage,
    isEObjectList,
} from "./internal";

describe("EDataTypeImpl", () => {
    test("eStaticClass", () => {
        let o = new EDataTypeImpl();
        expect(o.eStaticClass()).toBe(getEcorePackage().getEDataType());
    });

    test("getSerializable", () => {
        let o = new EDataTypeImpl();
        // get default value
        expect(o.isSerializable).toBe(true);
    });

    test("setSerializable", () => {
        let o = new EDataTypeImpl();
        let value = true;

        // add listener
        let mockAdapter = mock<EAdapter>();
        let adapter = instance(mockAdapter);
        o.eAdapters.add(adapter);

        // set value
        o.isSerializable = value;

        // checks
        verify(mockAdapter.notifyChanged(anything())).once();
        const [notification] = capture(mockAdapter.notifyChanged).last();
        expect(notification.notifier).toBe(o);
        expect(notification.oldValue).toBe(true);
        expect(notification.newValue).toBe(value);
        expect(notification.position).toBe(-1);
    });

    test("eGetFromID", () => {
        let o = new EDataTypeImpl();
        expect(() => o.eGetFromID(-1, true)).toThrow(Error);
        expect(o.eGetFromID(EcoreConstants.EDATA_TYPE__SERIALIZABLE, true)).toStrictEqual(
            o.isSerializable
        );
    });

    test("eSetFromID", () => {
        let o = new EDataTypeImpl();
        expect(() => o.eSetFromID(-1, null)).toThrow(Error);
        {
            let value = true;
            o.eSetFromID(EcoreConstants.EDATA_TYPE__SERIALIZABLE, value);
            expect(o.eGetFromID(EcoreConstants.EDATA_TYPE__SERIALIZABLE, false)).toBe(value);
        }
    });

    test("eIsSetFromID", () => {
        let o = new EDataTypeImpl();
        expect(() => o.eIsSetFromID(-1)).toThrow(Error);
        expect(o.eIsSetFromID(EcoreConstants.EDATA_TYPE__SERIALIZABLE)).toBeFalsy();
    });

    test("eUnsetFromID", () => {
        let o = new EDataTypeImpl();
        expect(() => o.eUnsetFromID(-1)).toThrow(Error);
        {
            o.eUnsetFromID(EcoreConstants.EDATA_TYPE__SERIALIZABLE);
            let v = o.eGetFromID(EcoreConstants.EDATA_TYPE__SERIALIZABLE, false);
            expect(v).toBe(true);
        }
    });
});
