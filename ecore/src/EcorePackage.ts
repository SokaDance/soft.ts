// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

import { EAttribute, EClass, EDataType, EOperation, EPackage, EReference, EcorePackageImpl } from "./internal.js"

export interface EcorePackage extends EPackage {
    // Returns the meta object for the EAnnotation
    getEAnnotationClass(): EClass

    // Returns the meta object for the Source
    getEAnnotation_Source(): EAttribute

    // Returns the meta object for the Contents
    getEAnnotation_Contents(): EReference
    // Returns the meta object for the Details
    getEAnnotation_Details(): EReference
    // Returns the meta object for the EModelElement
    getEAnnotation_EModelElement(): EReference
    // Returns the meta object for the References
    getEAnnotation_References(): EReference

    // Returns the meta object for the EAttribute
    getEAttribute(): EClass

    // Returns the meta object for the ID
    getEAttribute_ID(): EAttribute

    // Returns the meta object for the EAttributeType
    getEAttribute_EAttributeType(): EReference

    // Returns the meta object for the EClass
    getEClass(): EClass

    // Returns the meta object for the Abstract
    getEClass_Abstract(): EAttribute
    // Returns the meta object for the Interface
    getEClass_Interface(): EAttribute

    // Returns the meta object for the EAllAttributes
    getEClass_EAllAttributes(): EReference
    // Returns the meta object for the EAllContainments
    getEClass_EAllContainments(): EReference
    // Returns the meta object for the EAllCrossReferences
    getEClass_EAllCrossReferences(): EReference
    // Returns the meta object for the EAllOperations
    getEClass_EAllOperations(): EReference
    // Returns the meta object for the EAllReferences
    getEClass_EAllReferences(): EReference
    // Returns the meta object for the EAllStructuralFeatures
    getEClass_EAllStructuralFeatures(): EReference
    // Returns the meta object for the EAllSuperTypes
    getEClass_EAllSuperTypes(): EReference
    // Returns the meta object for the EAttributes
    getEClass_EAttributes(): EReference
    // Returns the meta object for the EContainmentFeatures
    getEClass_EContainmentFeatures(): EReference
    // Returns the meta object for the ECrossReferenceFeatures
    getEClass_ECrossReferenceFeatures(): EReference
    // Returns the meta object for the EIDAttribute
    getEClass_EIDAttribute(): EReference
    // Returns the meta object for the EOperations
    getEClass_EOperations(): EReference
    // Returns the meta object for the EReferences
    getEClass_EReferences(): EReference
    // Returns the meta object for the EStructuralFeatures
    getEClass_EStructuralFeatures(): EReference
    // Returns the meta object for the ESuperTypes
    getEClass_ESuperTypes(): EReference

    // Returns the meta object for the GetEOperation
    getEClass_GetEOperation_EInt(): EOperation
    // Returns the meta object for the GetEStructuralFeature
    getEClass_GetEStructuralFeature_EInt(): EOperation
    // Returns the meta object for the GetEStructuralFeature
    getEClass_GetEStructuralFeature_EString(): EOperation
    // Returns the meta object for the GetFeatureCount
    getEClass_GetFeatureCount(): EOperation
    // Returns the meta object for the GetFeatureID
    getEClass_GetFeatureID_EStructuralFeature(): EOperation
    // Returns the meta object for the GetFeatureType
    getEClass_GetFeatureType_EStructuralFeature(): EOperation
    // Returns the meta object for the GetOperationCount
    getEClass_GetOperationCount(): EOperation
    // Returns the meta object for the GetOperationID
    getEClass_GetOperationID_EOperation(): EOperation
    // Returns the meta object for the GetOverride
    getEClass_GetOverride_EOperation(): EOperation
    // Returns the meta object for the IsSuperTypeOf
    getEClass_IsSuperTypeOf_EClass(): EOperation

    // Returns the meta object for the EClassifier
    getEClassifierClass(): EClass

    // Returns the meta object for the ClassifierID
    getEClassifier_ClassifierID(): EAttribute
    // Returns the meta object for the DefaultValue
    getEClassifier_DefaultValue(): EAttribute
    // Returns the meta object for the InstanceClass
    getEClassifier_InstanceClass(): EAttribute
    // Returns the meta object for the InstanceClassName
    getEClassifier_InstanceClassName(): EAttribute
    // Returns the meta object for the InstanceTypeName
    getEClassifier_InstanceTypeName(): EAttribute

    // Returns the meta object for the EPackage
    getEClassifier_EPackage(): EReference

    // Returns the meta object for the IsInstance
    getEClassifier_IsInstance_EJavaObject(): EOperation

    // Returns the meta object for the EDataType
    getEDataType(): EClass

    // Returns the meta object for the Serializable
    getEDataType_Serializable(): EAttribute

    // Returns the meta object for the EEnum
    getEEnum(): EClass

    // Returns the meta object for the ELiterals
    getEEnum_ELiterals(): EReference

    // Returns the meta object for the GetEEnumLiteral
    getEEnum_GetEEnumLiteral_EString(): EOperation
    // Returns the meta object for the GetEEnumLiteral
    getEEnum_GetEEnumLiteral_EInt(): EOperation
    // Returns the meta object for the GetEEnumLiteralByLiteral
    getEEnum_GetEEnumLiteralByLiteral_EString(): EOperation

    // Returns the meta object for the EEnumLiteral
    getEEnumLiteral(): EClass

    // Returns the meta object for the Instance
    getEEnumLiteral_Instance(): EAttribute
    // Returns the meta object for the Literal
    getEEnumLiteral_Literal(): EAttribute
    // Returns the meta object for the Value
    getEEnumLiteral_Value(): EAttribute

    // Returns the meta object for the EEnum
    getEEnumLiteral_EEnum(): EReference

    // Returns the meta object for the EFactory
    getEFactory(): EClass

    // Returns the meta object for the EPackage
    getEFactory_EPackage(): EReference

    // Returns the meta object for the ConvertToString
    getEFactory_ConvertToString_EDataType_EJavaObject(): EOperation
    // Returns the meta object for the Create
    getEFactory_Create_EClass(): EOperation
    // Returns the meta object for the CreateFromString
    getEFactory_CreateFromString_EDataType_EString(): EOperation

    // Returns the meta object for the EGenericType
    getEGenericType(): EClass

    // Returns the meta object for the EClassifier
    getEGenericType_EClassifier(): EReference
    // Returns the meta object for the ELowerBound
    getEGenericType_ELowerBound(): EReference
    // Returns the meta object for the ERawType
    getEGenericType_ERawType(): EReference
    // Returns the meta object for the ETypeArguments
    getEGenericType_ETypeArguments(): EReference
    // Returns the meta object for the ETypeParameter
    getEGenericType_ETypeParameter(): EReference
    // Returns the meta object for the EUpperBound
    getEGenericType_EUpperBound(): EReference

    // Returns the meta object for the IsInstance
    getEGenericType_IsInstance_EJavaObject(): EOperation

    // Returns the meta object for the EModelElement
    getEModelElement(): EClass

    // Returns the meta object for the EAnnotations
    getEModelElement_EAnnotations(): EReference

    // Returns the meta object for the GetEAnnotation
    getEModelElement_GetEAnnotation_EString(): EOperation

    // Returns the meta object for the ENamedElement
    getENamedElement(): EClass

    // Returns the meta object for the Name
    getENamedElement_Name(): EAttribute

    // Returns the meta object for the EObject
    getEObject(): EClass

    // Returns the meta object for the EAllContents
    getEObject_EAllContents(): EOperation
    // Returns the meta object for the EClass
    getEObject_EClass(): EOperation
    // Returns the meta object for the EContainer
    getEObject_EContainer(): EOperation
    // Returns the meta object for the EContainingFeature
    getEObject_EContainingFeature(): EOperation
    // Returns the meta object for the EContainmentFeature
    getEObject_EContainmentFeature(): EOperation
    // Returns the meta object for the EContents
    getEObject_EContents(): EOperation
    // Returns the meta object for the ECrossReferences
    getEObject_ECrossReferences(): EOperation
    // Returns the meta object for the EGet
    getEObject_EGet_EStructuralFeature(): EOperation
    // Returns the meta object for the EGet
    getEObject_EGet_EStructuralFeature_EBoolean(): EOperation
    // Returns the meta object for the EInvoke
    getEObject_EInvoke_EOperation_EEList(): EOperation
    // Returns the meta object for the EIsProxy
    getEObject_EIsProxy(): EOperation
    // Returns the meta object for the EIsSet
    getEObject_EIsSet_EStructuralFeature(): EOperation
    // Returns the meta object for the EResource
    getEObject_EResource(): EOperation
    // Returns the meta object for the ESet
    getEObject_ESet_EStructuralFeature_EJavaObject(): EOperation
    // Returns the meta object for the EUnset
    getEObject_EUnset_EStructuralFeature(): EOperation

    // Returns the meta object for the EOperation
    getEOperation(): EClass

    // Returns the meta object for the OperationID
    getEOperation_OperationID(): EAttribute

    // Returns the meta object for the EContainingClass
    getEOperation_EContainingClass(): EReference
    // Returns the meta object for the EExceptions
    getEOperation_EExceptions(): EReference
    // Returns the meta object for the EParameters
    getEOperation_EParameters(): EReference

    // Returns the meta object for the IsOverrideOf
    getEOperation_IsOverrideOf_EOperation(): EOperation

    // Returns the meta object for the EPackage
    getEPackage(): EClass

    // Returns the meta object for the NsPrefix
    getEPackage_NsPrefix(): EAttribute
    // Returns the meta object for the NsURI
    getEPackage_NsURI(): EAttribute

    // Returns the meta object for the EClassifiers
    getEPackage_EClassifiers(): EReference
    // Returns the meta object for the EFactoryInstance
    getEPackage_EFactoryInstance(): EReference
    // Returns the meta object for the ESubPackages
    getEPackage_ESubPackages(): EReference
    // Returns the meta object for the ESuperPackage
    getEPackage_ESuperPackage(): EReference

    // Returns the meta object for the GetEClassifier
    getEPackage_GetEClassifier_EString(): EOperation

    // Returns the meta object for the EParameter
    getEParameter(): EClass

    // Returns the meta object for the EOperation
    getEParameter_EOperation(): EReference

    // Returns the meta object for the EReference
    getEReference(): EClass

    // Returns the meta object for the Container
    getEReference_Container(): EAttribute
    // Returns the meta object for the Containment
    getEReference_Containment(): EAttribute
    // Returns the meta object for the ResolveProxies
    getEReference_ResolveProxies(): EAttribute

    // Returns the meta object for the EKeys
    getEReference_EKeys(): EReference
    // Returns the meta object for the EOpposite
    getEReference_EOpposite(): EReference
    // Returns the meta object for the EReferenceType
    getEReference_EReferenceType(): EReference

    // Returns the meta object for the EStringToStringMapEntry
    getEStringToStringMapEntry(): EClass

    // Returns the meta object for the Key
    getEStringToStringMapEntry_Key(): EAttribute
    // Returns the meta object for the Value
    getEStringToStringMapEntry_Value(): EAttribute

    // Returns the meta object for the EStructuralFeature
    getEStructuralFeature(): EClass

    // Returns the meta object for the Changeable
    getEStructuralFeature_Changeable(): EAttribute
    // Returns the meta object for the DefaultValue
    getEStructuralFeature_DefaultValue(): EAttribute
    // Returns the meta object for the DefaultValueLiteral
    getEStructuralFeature_DefaultValueLiteral(): EAttribute
    // Returns the meta object for the Derived
    getEStructuralFeature_Derived(): EAttribute
    // Returns the meta object for the FeatureID
    getEStructuralFeature_FeatureID(): EAttribute
    // Returns the meta object for the Transient
    getEStructuralFeature_Transient(): EAttribute
    // Returns the meta object for the Unsettable
    getEStructuralFeature_Unsettable(): EAttribute
    // Returns the meta object for the Volatile
    getEStructuralFeature_Volatile(): EAttribute

    // Returns the meta object for the EContainingClass
    getEStructuralFeature_EContainingClass(): EReference

    // Returns the meta object for the GetContainerClass
    getEStructuralFeature_GetContainerClass(): EOperation

    // Returns the meta object for the ETypeParameter
    getETypeParameter(): EClass

    // Returns the meta object for the EBounds
    getETypeParameter_EBounds(): EReference

    // Returns the meta object for the ETypedElement
    getETypedElement(): EClass

    // Returns the meta object for the LowerBound
    getETypedElement_LowerBound(): EAttribute
    // Returns the meta object for the Many
    getETypedElement_Many(): EAttribute
    // Returns the meta object for the Ordered
    getETypedElement_Ordered(): EAttribute
    // Returns the meta object for the Required
    getETypedElement_Required(): EAttribute
    // Returns the meta object for the Unique
    getETypedElement_Unique(): EAttribute
    // Returns the meta object for the UpperBound
    getETypedElement_UpperBound(): EAttribute

    // Returns the meta object for the EType
    getETypedElement_EType(): EReference

    // Returns the meta object for the EBigDecimal
    getEBigDecimal(): EDataType
    // Returns the meta object for the EBigInteger
    getEBigInteger(): EDataType
    // Returns the meta object for the EBoolean
    getEBoolean(): EDataType
    // Returns the meta object for the EBooleanObject
    getEBooleanObject(): EDataType
    // Returns the meta object for the EByte
    getEByte(): EDataType
    // Returns the meta object for the EByteArray
    getEByteArray(): EDataType
    // Returns the meta object for the EByteObject
    getEByteObject(): EDataType
    // Returns the meta object for the EChar
    getEChar(): EDataType
    // Returns the meta object for the ECharacterObject
    getECharacterObject(): EDataType
    // Returns the meta object for the EDate
    getEDate(): EDataType
    // Returns the meta object for the EDiagnosticChain
    getEDiagnosticChain(): EDataType
    // Returns the meta object for the EDouble
    getEDouble(): EDataType
    // Returns the meta object for the EDoubleObject
    getEDoubleObject(): EDataType
    // Returns the meta object for the EEList
    getEEList(): EDataType
    // Returns the meta object for the EEnumerator
    getEEnumerator(): EDataType
    // Returns the meta object for the EFeatureMap
    getEFeatureMap(): EDataType
    // Returns the meta object for the EFeatureMapEntry
    getEFeatureMapEntry(): EDataType
    // Returns the meta object for the EFloat
    getEFloat(): EDataType
    // Returns the meta object for the EFloatObject
    getEFloatObject(): EDataType
    // Returns the meta object for the EInt
    getEInt(): EDataType
    // Returns the meta object for the EIntegerObject
    getEIntegerObject(): EDataType
    // Returns the meta object for the EInvocationTargetException
    getEInvocationTargetException(): EDataType
    // Returns the meta object for the EJavaClass
    getEJavaClass(): EDataType
    // Returns the meta object for the EJavaObject
    getEJavaObject(): EDataType
    // Returns the meta object for the ELong
    getELong(): EDataType
    // Returns the meta object for the ELongObject
    getELongObject(): EDataType
    // Returns the meta object for the EMap
    getEMap(): EDataType
    // Returns the meta object for the EResource
    getEResource(): EDataType
    // Returns the meta object for the EResourceSet
    getEResourceSet(): EDataType
    // Returns the meta object for the EShort
    getEShort(): EDataType
    // Returns the meta object for the EShortObject
    getEShortObject(): EDataType
    // Returns the meta object for the EString
    getEString(): EDataType
    // Returns the meta object for the ETreeIterator
    getETreeIterator(): EDataType
}

export function getEcorePackage(): EcorePackage {
    return EcorePackageImpl.getInstance()
}
