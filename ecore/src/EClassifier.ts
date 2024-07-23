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
    ENamedElement,
    EPackage,
} from "./internal.js"


export interface EClassifier extends ENamedElement {
    // Attributes
    getInstanceClassName(): string
    setInstanceClassName( newInstanceClassName : string ): void
    
    getInstanceClass(): any
    setInstanceClass( newInstanceClass : any ): void
    
    getInstanceTypeName(): string
    setInstanceTypeName( newInstanceTypeName : string ): void
    
    getDefaultValue(): any
    
    getClassifierID(): number
    setClassifierID( newClassifierID : number ): void
    
    
    // References
    getEPackage(): EPackage
    
    
    // Operations
    isInstance(object: any): boolean
    
}

