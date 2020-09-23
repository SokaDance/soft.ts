import { Adapter } from "./Adapter";
import { EAdapter } from "./EAdapter";
import { EClassifier } from "./EClassifier";
import { EcoreConstants } from "./EcoreConstants";
import { ENotification, EventType } from "./ENotification";
// *****************************************************************************
//
// This file is part of a MASA library or program.
// Refer to the included end-user license agreement for restrictions.
//
// Copyright (c) 2020 MASA Group
//
// *****************************************************************************

import { EPackageImpl } from "./EPackageImpl";

class EPackageExtAdapter extends Adapter {
    constructor ( private _pack : EPackageExt ) {
        super();
    }

    notifyChanged(notification: ENotification): void {
        if ( notification.eventType != EventType.REMOVING_ADAPTER && notification.featureID == EcoreConstants.EPACKAGE__ECLASSIFIERS) {
            this._pack._nameToClassifier = null;
        }
    }

}

export class EPackageExt extends EPackageImpl {
    _nameToClassifier : Map<string,EClassifier> = null;
    _adapter : EAdapter = null;

    constructor() {
        super();
        this._adapter = new EPackageExtAdapter(this);
        this.eAdapters.add(this._adapter);
    }

    getEClassifier(name : string) : EClassifier {
        if ( this._nameToClassifier == null ) {
            this._nameToClassifier = new Map<string,EClassifier>();
            for (const classifier of this.eClassifiers) {
                this._nameToClassifier.set(classifier.name, classifier);
            }
        }
	    return this._nameToClassifier.get(name);
	}


}
