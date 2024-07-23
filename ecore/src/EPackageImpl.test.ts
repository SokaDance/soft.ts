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
    EClassifier,
    EFactory,
    EList,
    ENamedElement,
    ENotification,
    ENotificationChain,
    ENotifyingList,
    EOPPOSITE_FEATURE_BASE,
    EObject,
    EObjectInternal,
    EObjectList,
    EPackage,
    EPackageImpl,
    EResource,
    EResourceSet,
    EcoreConstants,
    EventType,
    ImmutableEList,
    Notification,
    URI,
    getEcorePackage,
    isEObjectList,
} from "./internal.js"
	

interface EClassifierInternal extends EClassifier, EObjectInternal {}
interface EFactoryInternal extends EFactory, EObjectInternal {}
interface EPackageInternal extends EPackage, EObjectInternal {}

describe("EPackageImpl", () => {
	test("eStaticClass", () => {
        let o = new EPackageImpl()
		expect(o.eStaticClass()).toBe(getEcorePackage().getEPackage())
    })

	
	test("getEClassifiers", () => {
		let o = new EPackageImpl()
		expect(o.getEClassifiers()).not.toBeNull()
	})
	
	test("getEFactoryInstance", () => {
		let o = new EPackageImpl()
		
		// get default value
		expect(o.getEFactoryInstance()).toBeNull()
	})
	
	test("setEFactoryInstance", () => {
		let o = new EPackageImpl()
		
		// add listener
		let mockAdapter = mock<EAdapter>()
		let adapter = instance(mockAdapter)
		o.eAdapters.add(adapter)
		
		// first value
		let mockValue = mock<EFactoryInternal>()
		let value = instance(mockValue)
		when(mockValue.eInverseAdd(o,EcoreConstants.EFACTORY__EPACKAGE,null)).thenReturn(null)
		o.setEFactoryInstance(value)
		verify(mockAdapter.notifyChanged(anything())).once() 
		{
			let [notification] = capture(mockAdapter.notifyChanged).last()
			expect(notification.notifier).toBe(o)
			expect(notification.oldValue).toBeNull()
			expect(notification.newValue).toBe(value)
		}
	
		// set with other value
		let mockOther = mock<EFactoryInternal>()
		let other = instance(mockOther)
		reset(mockAdapter)
		reset(mockValue)
		when(mockValue.eInverseRemove(o,EcoreConstants.EFACTORY__EPACKAGE,null)).thenReturn(null)
		when(mockOther.eInverseAdd(o,EcoreConstants.EFACTORY__EPACKAGE,null)).thenReturn(null)
		o.setEFactoryInstance(other)
		verify(mockAdapter.notifyChanged(anything())).once()
		{
			let [notification] = capture(mockAdapter.notifyChanged).last()
			expect(notification.notifier).toBe(o)
			expect(notification.oldValue).toBe(value)
			expect(notification.newValue).toBe(other)
			expect(notification.position).toBe(-1)
		}
	})
	
	
	test("basicSetEFactoryInstance", () => {
		let o = new EPackageImpl()
		let mockValue = mock<EFactoryInternal>()
		let value = instance(mockValue)
	
		// add listener
		let mockAdapter = mock<EAdapter>()
		let adapter = instance(mockAdapter)
		o.eAdapters.add(adapter)
	
		// notification chain
		let mockNotifications = mock<ENotificationChain>()
		let notifications = instance(mockNotifications)
	
		// set value
		when(mockNotifications.add(anything())).thenReturn(true)
		o.basicSetEFactoryInstance(value,notifications)
	
		// checks
		verify(mockNotifications.add(anything())).once()
		const [notification] = capture(mockNotifications.add).last()
		expect(notification.notifier).toBe(o)
		expect(notification.eventType).toBe(EventType.SET)
		expect(notification.featureID).toBe(EcoreConstants.EPACKAGE__EFACTORY_INSTANCE)
		expect(notification.oldValue).toBeNull()
		expect(notification.newValue).toBe(value)
		expect(notification.position).toBe(-1)
	})
	
	
	test("getESubPackages", () => {
		let o = new EPackageImpl()
		expect(o.getESubPackages()).not.toBeNull()
	})
	
	test("getESuperPackage", () => {
		// default
		let o = new EPackageImpl()
		expect(o.getESuperPackage()).toBeNull()
	
		// set a mock container
		let mockContainer = mock<EObject>()
		let container = instance(mockContainer)
		o.eSetInternalContainer(container,EcoreConstants.EPACKAGE__ESUPER_PACKAGE)
		
		// no proxy
		when(mockContainer.eIsProxy()).thenReturn(false)
		expect(o.getESuperPackage()).toBe(container)
		verify(mockContainer.eIsProxy()).once()
	})
	
	
	test("getNsPrefix", () => {
		let o = new EPackageImpl()
		// get default value
		expect(o.getNsPrefix()).toBe("")
	})
	
	test("setNsPrefix", () => {
		let o = new EPackageImpl()
		let value = "Test String"
	
		// add listener
		let mockAdapter = mock<EAdapter>()
		let adapter = instance(mockAdapter)
		o.eAdapters.add(adapter)
	
		// set value
		o.setNsPrefix(value)
	
		// checks
		verify(mockAdapter.notifyChanged(anything())).once()
		const [notification] = capture(mockAdapter.notifyChanged).last()
		expect(notification.notifier).toBe(o)
		expect(notification.oldValue).toBe("")
		expect(notification.newValue).toBe(value)
		expect(notification.position).toBe(-1)
	})
	
	
	test("getNsURI", () => {
		let o = new EPackageImpl()
		// get default value
		expect(o.getNsURI()).toBe("")
	})
	
	test("setNsURI", () => {
		let o = new EPackageImpl()
		let value = "Test String"
	
		// add listener
		let mockAdapter = mock<EAdapter>()
		let adapter = instance(mockAdapter)
		o.eAdapters.add(adapter)
	
		// set value
		o.setNsURI(value)
	
		// checks
		verify(mockAdapter.notifyChanged(anything())).once()
		const [notification] = capture(mockAdapter.notifyChanged).last()
		expect(notification.notifier).toBe(o)
		expect(notification.oldValue).toBe("")
		expect(notification.newValue).toBe(value)
		expect(notification.position).toBe(-1)
	})
	
	
	test("getEClassifier", () => {
		let o = new(EPackageImpl)
		expect(() => o.getEClassifier("")).toThrow(Error)
	})
	
	
	
	test("eGetFromID", () => {
		let o = new EPackageImpl()
		expect(() => o.eGetFromID(-1,true)).toThrow(Error)
		expect(o.eGetFromID(EcoreConstants.EPACKAGE__ECLASSIFIERS,true)).toStrictEqual(o.getEClassifiers())
		expect(
			deepEqual(
				o.eGetFromID(EcoreConstants.EPACKAGE__ECLASSIFIERS,false),
				(o.getEClassifiers() as EObjectList<EClassifier>).getUnResolvedList()
			)
		).toBeTruthy()
		expect(o.eGetFromID(EcoreConstants.EPACKAGE__EFACTORY_INSTANCE,true)).toStrictEqual(o.getEFactoryInstance())
		expect(o.eGetFromID(EcoreConstants.EPACKAGE__ESUB_PACKAGES,true)).toStrictEqual(o.getESubPackages())
		expect(
			deepEqual(
				o.eGetFromID(EcoreConstants.EPACKAGE__ESUB_PACKAGES,false),
				(o.getESubPackages() as EObjectList<EPackage>).getUnResolvedList()
			)
		).toBeTruthy()
		expect(o.eGetFromID(EcoreConstants.EPACKAGE__ESUPER_PACKAGE,true)).toStrictEqual(o.getESuperPackage())
		expect(o.eGetFromID(EcoreConstants.EPACKAGE__NS_PREFIX,true)).toStrictEqual(o.getNsPrefix())
		expect(o.eGetFromID(EcoreConstants.EPACKAGE__NS_URI,true)).toStrictEqual(o.getNsURI())
	})
	
	test("eSetFromID", () => {
		let o = new EPackageImpl()
		expect(() => o.eSetFromID(-1,null)).toThrow(Error)
		{
			// list with a value
			let mockValue = mock<EClassifierInternal>()
			let value = instance(mockValue)
			let l = new ImmutableEList<EClassifier>([value])
			when(mockValue.eInverseAdd(o,EcoreConstants.ECLASSIFIER__EPACKAGE,anything())).thenReturn(null) 
			
			// set list with new contents
			o.eSetFromID(EcoreConstants.EPACKAGE__ECLASSIFIERS, l)
			// checks
			expect(o.getEClassifiers().size()).toBe(1)
			expect(o.getEClassifiers().get(0)).toBe(value)
			verify(mockValue.eInverseAdd(o,EcoreConstants.ECLASSIFIER__EPACKAGE,anything())).once()
			
		}
		
		{
			let mockValue = mock<EFactoryInternal>()
			let value = instance(mockValue)
			when(mockValue.eInverseAdd(o,EcoreConstants.EFACTORY__EPACKAGE,null)).thenReturn(null)	
			o.eSetFromID(EcoreConstants.EPACKAGE__EFACTORY_INSTANCE, value)
			expect(o.eGetFromID(EcoreConstants.EPACKAGE__EFACTORY_INSTANCE, false)).toBe(value)
			verify(mockValue.eInverseAdd(o,EcoreConstants.EFACTORY__EPACKAGE,null)).once()
		}
		{
			// list with a value
			let mockValue = mock<EPackageInternal>()
			let value = instance(mockValue)
			let l = new ImmutableEList<EPackage>([value])
			when(mockValue.eInverseAdd(o,EcoreConstants.EPACKAGE__ESUPER_PACKAGE,anything())).thenReturn(null) 
			
			// set list with new contents
			o.eSetFromID(EcoreConstants.EPACKAGE__ESUB_PACKAGES, l)
			// checks
			expect(o.getESubPackages().size()).toBe(1)
			expect(o.getESubPackages().get(0)).toBe(value)
			verify(mockValue.eInverseAdd(o,EcoreConstants.EPACKAGE__ESUPER_PACKAGE,anything())).once()
			
		}
		
		{
			let value = "Test String"	
			o.eSetFromID(EcoreConstants.EPACKAGE__NS_PREFIX, value)
			expect(o.eGetFromID(EcoreConstants.EPACKAGE__NS_PREFIX, false)).toBe(value)
		}
		{
			let value = "Test String"	
			o.eSetFromID(EcoreConstants.EPACKAGE__NS_URI, value)
			expect(o.eGetFromID(EcoreConstants.EPACKAGE__NS_URI, false)).toBe(value)
		}
		
	})
	
	test("eIsSetFromID", () => {
		let o = new EPackageImpl()
		expect(() => o.eIsSetFromID(-1)).toThrow(Error)
		expect(o.eIsSetFromID(EcoreConstants.EPACKAGE__ECLASSIFIERS)).toBeFalsy()
		expect(() => o.eIsSetFromID(EcoreConstants.EPACKAGE__EFACTORY_INSTANCE)).toThrow(Error)
		expect(o.eIsSetFromID(EcoreConstants.EPACKAGE__ESUB_PACKAGES)).toBeFalsy()
		expect(o.eIsSetFromID(EcoreConstants.EPACKAGE__ESUPER_PACKAGE)).toBeFalsy()
		expect(o.eIsSetFromID(EcoreConstants.EPACKAGE__NS_PREFIX)).toBeFalsy()
		expect(o.eIsSetFromID(EcoreConstants.EPACKAGE__NS_URI)).toBeFalsy()
	})
	
	test("eUnsetFromID", () => {
		let o = new EPackageImpl()
		expect(() => o.eUnsetFromID(-1)).toThrow(Error)
		{
			o.eUnsetFromID(EcoreConstants.EPACKAGE__ECLASSIFIERS)
			let v = o.eGetFromID(EcoreConstants.EPACKAGE__ECLASSIFIERS, false)
			expect(v).not.toBeNull()
			let l = v as EList<EClassifier> 
			expect(l.isEmpty()).toBeTruthy()
		}
		{
			o.eUnsetFromID(EcoreConstants.EPACKAGE__EFACTORY_INSTANCE)
			expect(o.eGetFromID(EcoreConstants.EPACKAGE__EFACTORY_INSTANCE, false)).toBeNull()
		}
		{
			o.eUnsetFromID(EcoreConstants.EPACKAGE__ESUB_PACKAGES)
			let v = o.eGetFromID(EcoreConstants.EPACKAGE__ESUB_PACKAGES, false)
			expect(v).not.toBeNull()
			let l = v as EList<EPackage> 
			expect(l.isEmpty()).toBeTruthy()
		}
		{
			o.eUnsetFromID(EcoreConstants.EPACKAGE__NS_PREFIX)
			let v = o.eGetFromID(EcoreConstants.EPACKAGE__NS_PREFIX, false)
			expect(v).toBe("")
		}
		{
			o.eUnsetFromID(EcoreConstants.EPACKAGE__NS_URI)
			let v = o.eGetFromID(EcoreConstants.EPACKAGE__NS_URI, false)
			expect(v).toBe("")
		}
	})
	
	test("eInvokeFromID", () => {
		let o = new EPackageImpl()
		expect(() => o.eInvokeFromID(-1,null)).toThrow(Error)
		expect(() => o.eInvokeFromID(EcoreConstants.EPACKAGE__GET_ECLASSIFIER_ESTRING,null)).toThrow(Error)
	})
	
	test("eBasicInverseAdd", () => {
		let o = new EPackageImpl()
		{
			let mockObject = mock<EObject>()
			let object = instance(mockObject)
			let mockNotifications = mock<ENotificationChain>() 
			let notifications = instance(mockNotifications)
			expect(o.eBasicInverseAdd(object,-1,notifications)).toBe(notifications)
		}
		{
			let mockValue = mock<EClassifierInternal>()
			let value = instance(mockValue)
			o.eBasicInverseAdd(value,EcoreConstants.EPACKAGE__ECLASSIFIERS,null)
			expect(o.getEClassifiers().contains(value)).toBeTruthy()
		}
		{
			let mockValue = mock<EFactoryInternal>()
			let value = instance(mockValue)
			o.eBasicInverseAdd(value,EcoreConstants.EPACKAGE__EFACTORY_INSTANCE,null)
			expect(o.getEFactoryInstance()).toBe(value)
		
			reset(mockValue)
			let mockOther = mock<EFactoryInternal>()
			let other = instance(mockOther)
			when(mockValue.eInverseRemove(o,EOPPOSITE_FEATURE_BASE - EcoreConstants.EPACKAGE__EFACTORY_INSTANCE,null)).thenReturn(null)
			o.eBasicInverseAdd(other,EcoreConstants.EPACKAGE__EFACTORY_INSTANCE,null)
			expect(o.getEFactoryInstance()).toBe(other)
		}
		{
			let mockValue = mock<EPackageInternal>()
			let value = instance(mockValue)
			o.eBasicInverseAdd(value,EcoreConstants.EPACKAGE__ESUB_PACKAGES,null)
			expect(o.getESubPackages().contains(value)).toBeTruthy()
		}
		{
			let mockValue = mock<EPackageInternal>()
			let value = instance(mockValue)
			when(mockValue.eResource()).thenReturn(null)
			when(mockValue.eIsProxy()).thenReturn(false)
			o.eBasicInverseAdd(value,EcoreConstants.EPACKAGE__ESUPER_PACKAGE,null)
			expect(o.getESuperPackage()).toBe(value)
		
			reset(mockValue)
			let mockOther = mock<EPackageInternal>()
			let other = instance(mockOther)
			when(mockOther.eResource()).thenReturn(null)
			when(mockOther.eIsProxy()).thenReturn(false)
			when(mockValue.eResource()).thenReturn(null)
			when(mockValue.eInverseRemove(o,EcoreConstants.EPACKAGE__ESUB_PACKAGES,null)).thenReturn(null)
			o.eBasicInverseAdd(other,EcoreConstants.EPACKAGE__ESUPER_PACKAGE,null)
			expect(o.getESuperPackage()).toBe(other)
		}
		
	})
	
	test("eBasicInverseRemove", () => {
		let o = new EPackageImpl()
		{
			let mockObject = mock<EObject>()
			let object = instance(mockObject)
			let mockNotifications = mock<ENotificationChain>() 
			let notifications = instance(mockNotifications)
			expect(o.eBasicInverseRemove(object,-1,notifications)).toBe(notifications)
		}
		{
			// initialize list with a mock object
			let mockValue = mock<EClassifierInternal>()
			let value = instance(mockValue)
			when(mockValue.eInverseAdd(o,EcoreConstants.ECLASSIFIER__EPACKAGE,anything())).thenReturn(null) 
			
			o.getEClassifiers().add(value)
		
			// basic inverse remove
			o.eBasicInverseRemove(value,EcoreConstants.EPACKAGE__ECLASSIFIERS,null)
		
			// check it was removed
			expect(o.getEClassifiers().contains(value)).toBeFalsy()
		}
		{
			let mockValue = mock<EFactoryInternal>()
			let value = instance(mockValue)
			o.eBasicInverseRemove(value,EcoreConstants.EPACKAGE__EFACTORY_INSTANCE,null)	
		}
		{
			// initialize list with a mock object
			let mockValue = mock<EPackageInternal>()
			let value = instance(mockValue)
			when(mockValue.eInverseAdd(o,EcoreConstants.EPACKAGE__ESUPER_PACKAGE,anything())).thenReturn(null) 
			
			o.getESubPackages().add(value)
		
			// basic inverse remove
			o.eBasicInverseRemove(value,EcoreConstants.EPACKAGE__ESUB_PACKAGES,null)
		
			// check it was removed
			expect(o.getESubPackages().contains(value)).toBeFalsy()
		}
		{
			let mockValue = mock<EPackageInternal>()
			let value = instance(mockValue)
			o.eBasicInverseRemove(value,EcoreConstants.EPACKAGE__ESUPER_PACKAGE,null)	
		}
		
	})
	

})

