// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

import * as ecore from "@masagroup/ecore";
import { Item, LibraryConstants, getLibraryPackage } from "./internal";

export class ItemImpl extends ecore.EObjectImpl implements Item {
    protected _publicationDate: Date;

    constructor() {
        super();
        this._publicationDate = null;
    }

    eStaticClass(): ecore.EClass {
        return getLibraryPackage().getItem();
    }

    // get the value of publicationDate
    get publicationDate(): Date {
        return this._publicationDate;
    }

    // set the value of publicationDate
    set publicationDate(newPublicationDate: Date) {
        let oldPublicationDate = this._publicationDate;
        this._publicationDate = newPublicationDate;
        if (this.eNotificationRequired) {
            this.eNotify(
                new ecore.Notification(
                    this,
                    ecore.EventType.SET,
                    LibraryConstants.ITEM__PUBLICATION_DATE,
                    oldPublicationDate,
                    newPublicationDate
                )
            );
        }
    }

    eGetFromID(featureID: number, resolve: boolean): any {
        switch (featureID) {
            case LibraryConstants.ITEM__PUBLICATION_DATE: {
                return this.publicationDate;
            }
            default: {
                return super.eGetFromID(featureID, resolve);
            }
        }
    }

    eSetFromID(featureID: number, newValue: any) {
        switch (featureID) {
            case LibraryConstants.ITEM__PUBLICATION_DATE: {
                this.publicationDate = newValue as Date;
                break;
            }
            default: {
                super.eSetFromID(featureID, newValue);
            }
        }
    }

    eUnsetFromID(featureID: number) {
        switch (featureID) {
            case LibraryConstants.ITEM__PUBLICATION_DATE: {
                this.publicationDate = null;
                break;
            }
            default: {
                super.eUnsetFromID(featureID);
            }
        }
    }

    eIsSetFromID(featureID: number): boolean {
        switch (featureID) {
            case LibraryConstants.ITEM__PUBLICATION_DATE: {
                return this._publicationDate != null;
            }
            default: {
                return super.eIsSetFromID(featureID);
            }
        }
    }
}
