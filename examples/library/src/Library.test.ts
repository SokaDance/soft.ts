// *****************************************************************************
//
// This file is part of a MASA library or program.
// Refer to the included end-user license agreement for restrictions.
//
// Copyright (c) 2020 MASA Group
//
// *****************************************************************************

import { describe, expect, test } from "vitest"
import * as ecore from "@masagroup/ecore"
import fs from "fs"
import { getLibraryPackage } from "./internal.js"

describe("Library", () => {
    test("load.simple.default", async () => {
        let xmlProcessor = new ecore.XMLProcessor([getLibraryPackage()])
        let fileURI = new ecore.URI("testdata/library.simple.default.xml")
        let resource = await xmlProcessor.load(fileURI)
        expect(resource).not.toBeNull()
        expect(resource.isLoaded).toBeTruthy()
        expect(resource.getErrors().isEmpty()).toBeTruthy()
        expect(resource.getWarnings().isEmpty()).toBeTruthy()
    })

    test("save.simple.default", () => {
        let xmlProcessor = new ecore.XMLProcessor([getLibraryPackage()])
        let fileURI = new ecore.URI("testdata/library.simple.default.xml")
        let resource = xmlProcessor.loadSync(fileURI)
        expect(resource).not.toBeNull()

        // save it
        let result = xmlProcessor.saveToString(resource)
        const expected = fs
            .readFileSync(ecore.uriToFilePath(fileURI))
            .toString()
            .replace(/\r?\n|\r/g, "\n")
        expect(result).toBe(expected)
    })

    test("save.simple.prefix", () => {
        let xmlProcessor = new ecore.XMLProcessor([getLibraryPackage()])
        let fileURI = new ecore.URI("testdata/library.simple.prefix.xml")
        let resource = xmlProcessor.loadSync(fileURI)
        expect(resource).not.toBeNull()

        // save it
        let result = xmlProcessor.saveToString(resource)
        const expected = fs
            .readFileSync(ecore.uriToFilePath(fileURI))
            .toString()
            .replace(/\r?\n|\r/g, "\n")
        expect(result).toBe(expected)
    })

    test("save.complex", async () => {
        let xmlProcessor = new ecore.XMLProcessor([getLibraryPackage()])
        let fileURI = new ecore.URI("testdata/library.complex.xml")
        let resource = xmlProcessor.loadSync(fileURI)
        expect(resource).not.toBeNull()

        // save it
        let result = xmlProcessor.saveToString(resource)
        const expected = fs
            .readFileSync(ecore.uriToFilePath(fileURI))
            .toString()
            .replace(/\r?\n|\r/g, "\n")
        expect(result).toBe(expected)
    })
})
