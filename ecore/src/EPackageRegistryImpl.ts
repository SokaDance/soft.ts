// *****************************************************************************
//
// This file is part of a MASA library or program.
// Refer to the included end-user license agreement for restrictions.
//
// Copyright (c) 2020 MASA Group
//
// *****************************************************************************

import { EFactory, EPackage, EPackageRegistry, getEcorePackage } from "./internal";

export class EPackageRegistryImpl implements EPackageRegistry {
    private _packages: Map<string, EPackage>;
    private _delegate: EPackageRegistry;
    private static _instance = null;

    public static getInstance(): EPackageRegistryImpl {
        if (!this._instance) {
            this._instance = new EPackageRegistryImpl();
            this._instance.registerPackage(getEcorePackage());
        }
        return this._instance;
    }

    constructor(delegate: EPackageRegistry = null) {
        this._packages = new Map<string, EPackage>();
        this._delegate = delegate;
    }

    registerPackage(pack: EPackage): void {
        this._packages.set(pack.nsURI, pack);
    }
    unregisterPackage(pack: EPackage): void {
        this._packages.delete(pack.nsURI);
    }

    getPackage(nsURI: string): EPackage {
        let p = this._packages.get(nsURI);
        if (p) {
            return p;
        } else {
            if (this._delegate) {
                return this._delegate.getPackage(nsURI);
            }
        }
        return null;
    }

    getFactory(nsURI: string): EFactory {
        let p = this._packages.get(nsURI);
        if (p) {
            return p.eFactoryInstance;
        } else {
            if (this._delegate) {
                return this._delegate.getFactory(nsURI);
            }
        }
        return null;
    }
}