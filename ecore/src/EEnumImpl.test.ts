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
import deepEqual from "deep-equal"
import { anything, capture, instance, mock, reset, verify, when } from "ts-mockito"
import {
    EAdapter,
    EDataType,
    EEnumImpl,
    EEnumLiteral,
    EList,
    ENotificationChain,
    ENotifyingList,
    EOPPOSITE_FEATURE_BASE,
    EObject,
    EObjectInternal,
    EObjectList,
    EResource,
    EResourceSet,
    EcoreConstants,
    ImmutableEList,
    URI,
    getEcorePackage,
    isEObjectList,
} from "./internal.js"
	

interface EEnumLiteralInternal extends EEnumLiteral, EObjectInternal {}

describe("EEnumImpl", () => {
	test("eStaticClass", () => {
        let o = new EEnumImpl()
		expect(o.eStaticClass()).toBe(getEcorePackage().getEEnum())
    })

	
	test("getELiterals", () => {
		let o = new EEnumImpl()
		expect(o.getELiterals()).not.toBeNull()
	})
	
	test("getEEnumLiteralByLiteral", () => {
		let o = new(EEnumImpl)
		expect(() => o.getEEnumLiteralByLiteral("")).toThrow(Error)
	})
	test("getEEnumLiteralByName", () => {
		let o = new(EEnumImpl)
		expect(() => o.getEEnumLiteralByName("")).toThrow(Error)
	})
	test("getEEnumLiteralByValue", () => {
		let o = new(EEnumImpl)
		expect(() => o.getEEnumLiteralByValue(0)).toThrow(Error)
	})
	
	
	
	test("eGetFromID", () => {
		let o = new EEnumImpl()
		expect(() => o.eGetFromID(-1,true)).toThrow(Error)
		expect(o.eGetFromID(EcoreConstants.EENUM__ELITERALS,true)).toStrictEqual(o.getELiterals())
		expect(
			deepEqual(
				o.eGetFromID(EcoreConstants.EENUM__ELITERALS,false),
				(o.getELiterals() as EObjectList<EEnumLiteral>).getUnResolvedList()
			)
		).toBeTruthy()
	})
	
	test("eSetFromID", () => {
		let o = new EEnumImpl()
		expect(() => o.eSetFromID(-1,null)).toThrow(Error)
		{
			// list with a value
			let mockValue = mock<EEnumLiteralInternal>()
			let value = instance(mockValue)
			let l = new ImmutableEList<EEnumLiteral>([value])
			when(mockValue.eInverseAdd(o,EcoreConstants.EENUM_LITERAL__EENUM,anything())).thenReturn(null) 
			
			// set list with new contents
			o.eSetFromID(EcoreConstants.EENUM__ELITERALS, l)
			// checks
			expect(o.getELiterals().size()).toBe(1)
			expect(o.getELiterals().get(0)).toBe(value)
			verify(mockValue.eInverseAdd(o,EcoreConstants.EENUM_LITERAL__EENUM,anything())).once()
			
		}
		
		
	})
	
	test("eIsSetFromID", () => {
		let o = new EEnumImpl()
		expect(() => o.eIsSetFromID(-1)).toThrow(Error)
		expect(o.eIsSetFromID(EcoreConstants.EENUM__ELITERALS)).toBeFalsy()
	})
	
	test("eUnsetFromID", () => {
		let o = new EEnumImpl()
		expect(() => o.eUnsetFromID(-1)).toThrow(Error)
		{
			o.eUnsetFromID(EcoreConstants.EENUM__ELITERALS)
			let v = o.eGetFromID(EcoreConstants.EENUM__ELITERALS, false)
			expect(v).not.toBeNull()
			let l = v as EList<EEnumLiteral> 
			expect(l.isEmpty()).toBeTruthy()
		}
	})
	
	test("eInvokeFromID", () => {
		let o = new EEnumImpl()
		expect(() => o.eInvokeFromID(-1,null)).toThrow(Error)
		expect(() => o.eInvokeFromID(EcoreConstants.EENUM__GET_EENUM_LITERAL_BY_LITERAL_ESTRING,null)).toThrow(Error)
		expect(() => o.eInvokeFromID(EcoreConstants.EENUM__GET_EENUM_LITERAL_EINT,null)).toThrow(Error)
		expect(() => o.eInvokeFromID(EcoreConstants.EENUM__GET_EENUM_LITERAL_ESTRING,null)).toThrow(Error)
	})
	
	test("eBasicInverseAdd", () => {
		let o = new EEnumImpl()
		{
			let mockObject = mock<EObject>()
			let object = instance(mockObject)
			let mockNotifications = mock<ENotificationChain>() 
			let notifications = instance(mockNotifications)
			expect(o.eBasicInverseAdd(object,-1,notifications)).toBe(notifications)
		}
		{
			let mockValue = mock<EEnumLiteralInternal>()
			let value = instance(mockValue)
			o.eBasicInverseAdd(value,EcoreConstants.EENUM__ELITERALS,null)
			expect(o.getELiterals().contains(value)).toBeTruthy()
		}
		
	})
	
	test("eBasicInverseRemove", () => {
		let o = new EEnumImpl()
		{
			let mockObject = mock<EObject>()
			let object = instance(mockObject)
			let mockNotifications = mock<ENotificationChain>() 
			let notifications = instance(mockNotifications)
			expect(o.eBasicInverseRemove(object,-1,notifications)).toBe(notifications)
		}
		{
			// initialize list with a mock object
			let mockValue = mock<EEnumLiteralInternal>()
			let value = instance(mockValue)
			when(mockValue.eInverseAdd(o,EcoreConstants.EENUM_LITERAL__EENUM,anything())).thenReturn(null) 
			
			o.getELiterals().add(value)
		
			// basic inverse remove
			o.eBasicInverseRemove(value,EcoreConstants.EENUM__ELITERALS,null)
		
			// check it was removed
			expect(o.getELiterals().contains(value)).toBeFalsy()
		}
		
	})
	

})

