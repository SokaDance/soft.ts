// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group                                                 
//                                                                              
// This Source Code Form is subject to the terms of the Mozilla Public          
// License, v. 2.0. If a copy of the MPL was not distributed with this          
// file, You can obtain one at https://mozilla.org/MPL/2.0/.                    
//                                                                              
// *****************************************************************************


import { describe, expect, test } from "vitest"
import { anything, capture, instance, mock, reset, verify, when } from "ts-mockito"
import {
    EAdapter,
    EAttributeImpl,
    EDataType,
    EList,
    ENotification,
    ENotificationChain,
    ENotifyingList,
    EOPPOSITE_FEATURE_BASE,
    EObject,
    EObjectInternal,
    EResource,
    EResourceSet,
    EStructuralFeature,
    EcoreConstants,
    EventType,
    Notification,
    URI,
    getEcorePackage,
    isEObjectList,
} from "./internal.js"
	

interface EDataTypeInternal extends EDataType, EObjectInternal {}

describe("EAttributeImpl", () => {
	test("eStaticClass", () => {
        let o = new EAttributeImpl()
		expect(o.eStaticClass()).toBe(getEcorePackage().getEAttribute())
    })

	
	test("getEAttributeType", () => {
		let o = new EAttributeImpl()
		expect(() => o.getEAttributeType()).toThrow(Error)
	})
	
	test("getID", () => {
		let o = new EAttributeImpl()
		// get default value
		expect(o.isID()).toBe(false)
	})
	
	test("setID", () => {
		let o = new EAttributeImpl()
		let value = true
	
		// add listener
		let mockAdapter = mock<EAdapter>()
		let adapter = instance(mockAdapter)
		o.eAdapters.add(adapter)
	
		// set value
		o.setID(value)
	
		// checks
		verify(mockAdapter.notifyChanged(anything())).once()
		const [notification] = capture(mockAdapter.notifyChanged).last()
		expect(notification.notifier).toBe(o)
		expect(notification.oldValue).toBe(false)
		expect(notification.newValue).toBe(value)
		expect(notification.position).toBe(-1)
	})
	
	
	
	
	
	test("eGetFromID", () => {
		let o = new EAttributeImpl()
		expect(() => o.eGetFromID(-1,true)).toThrow(Error)
		expect(() => o.eGetFromID(EcoreConstants.EATTRIBUTE__EATTRIBUTE_TYPE,true)).toThrow(Error)
		expect(() => o.eGetFromID(EcoreConstants.EATTRIBUTE__EATTRIBUTE_TYPE,false)).toThrow(Error)
		expect(o.eGetFromID(EcoreConstants.EATTRIBUTE__ID,true)).toStrictEqual(o.isID())
	})
	
	test("eSetFromID", () => {
		let o = new EAttributeImpl()
		expect(() => o.eSetFromID(-1,null)).toThrow(Error)
		{
			let value = true	
			o.eSetFromID(EcoreConstants.EATTRIBUTE__ID, value)
			expect(o.eGetFromID(EcoreConstants.EATTRIBUTE__ID, false)).toBe(value)
		}
		
	})
	
	test("eIsSetFromID", () => {
		let o = new EAttributeImpl()
		expect(() => o.eIsSetFromID(-1)).toThrow(Error)
		expect(() => o.eIsSetFromID(EcoreConstants.EATTRIBUTE__EATTRIBUTE_TYPE)).toThrow(Error)
		expect(o.eIsSetFromID(EcoreConstants.EATTRIBUTE__ID)).toBeFalsy()
	})
	
	test("eUnsetFromID", () => {
		let o = new EAttributeImpl()
		expect(() => o.eUnsetFromID(-1)).toThrow(Error)
		{
			o.eUnsetFromID(EcoreConstants.EATTRIBUTE__ID)
			let v = o.eGetFromID(EcoreConstants.EATTRIBUTE__ID, false)
			expect(v).toBe(false)
		}
	})
	
	
	
	

})

