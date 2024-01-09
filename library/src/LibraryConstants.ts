// Code generated by soft.generator.ts. DO NOT EDIT.

// *****************************************************************************
// Copyright(c) 2024 MASA Group
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// *****************************************************************************

export class LibraryConstants {
    public static readonly eNAME: string = "library";

    public static readonly eNS_URI: string =
        "http:///org/eclipse/emf/examples/library/library.ecore/1.0.0";

    public static readonly eNS_PREFIX: string = "lib";

    // ITEM is the meta object id for the class Item.
    public static readonly ITEM: number = 5;

    // ITEM__PUBLICATION_DATE is the feature id for the Item 'PublicationDate' attribute.
    public static readonly ITEM__PUBLICATION_DATE: number = 0;

    // ITEM_FEATURE_COUNT is the number of structural features of the class Item.
    public static readonly ITEM_FEATURE_COUNT: number = 1;

    // ITEM_OPERATION_COUNT is the number of ITEM_OPERATION_COUNT.
    public static readonly ITEM_OPERATION_COUNT: number = 0;

    // CIRCULATING_ITEM is the meta object id for the class CirculatingItem.
    public static readonly CIRCULATING_ITEM: number = 7;

    // CIRCULATING_ITEM__PUBLICATION_DATE is the feature id for the CirculatingItem 'PublicationDate' attribute.
    public static readonly CIRCULATING_ITEM__PUBLICATION_DATE: number = 0;

    // CIRCULATING_ITEM__COPIES is the feature id for the CirculatingItem 'Copies' attribute.
    public static readonly CIRCULATING_ITEM__COPIES: number = 1;

    // CIRCULATING_ITEM__BORROWERS is the feature id for the CirculatingItem 'Borrowers' reference list.
    public static readonly CIRCULATING_ITEM__BORROWERS: number = 2;

    // CIRCULATING_ITEM_FEATURE_COUNT is the number of structural features of the class CirculatingItem.
    public static readonly CIRCULATING_ITEM_FEATURE_COUNT: number = 3;

    // CIRCULATING_ITEM_OPERATION_COUNT is the number of CIRCULATING_ITEM_OPERATION_COUNT.
    public static readonly CIRCULATING_ITEM_OPERATION_COUNT: number = 0;

    // BOOK is the meta object id for the class Book.
    public static readonly BOOK: number = 17;

    // BOOK__PUBLICATION_DATE is the feature id for the Book 'PublicationDate' attribute.
    public static readonly BOOK__PUBLICATION_DATE: number = 0;

    // BOOK__COPIES is the feature id for the Book 'Copies' attribute.
    public static readonly BOOK__COPIES: number = 1;

    // BOOK__BORROWERS is the feature id for the Book 'Borrowers' reference list.
    public static readonly BOOK__BORROWERS: number = 2;

    // BOOK__TITLE is the feature id for the Book 'Title' attribute.
    public static readonly BOOK__TITLE: number = 3;

    // BOOK__PAGES is the feature id for the Book 'Pages' attribute.
    public static readonly BOOK__PAGES: number = 4;

    // BOOK__CATEGORY is the feature id for the Book 'Category' attribute.
    public static readonly BOOK__CATEGORY: number = 5;

    // BOOK__AUTHOR is the feature id for the Book 'Author' reference.
    public static readonly BOOK__AUTHOR: number = 6;

    // BOOK__TABLE_OF_CONTENTS is the feature id for the Book 'TableOfContents' attribute list.
    public static readonly BOOK__TABLE_OF_CONTENTS: number = 7;

    // BOOK__INDEXES is the feature id for the Book 'Indexes' reference list.
    public static readonly BOOK__INDEXES: number = 8;

    // BOOK_FEATURE_COUNT is the number of structural features of the class Book.
    public static readonly BOOK_FEATURE_COUNT: number = 9;

    // BOOK_OPERATION_COUNT is the number of BOOK_OPERATION_COUNT.
    public static readonly BOOK_OPERATION_COUNT: number = 0;

    // BOOK_INDEX is the meta object id for the class BookIndex.
    public static readonly BOOK_INDEX: number = 1;

    // BOOK_INDEX__KEY is the feature id for the BookIndex 'Key' attribute.
    public static readonly BOOK_INDEX__KEY: number = 0;

    // BOOK_INDEX__VALUE is the feature id for the BookIndex 'Value' attribute list.
    public static readonly BOOK_INDEX__VALUE: number = 1;

    // BOOK_INDEX_FEATURE_COUNT is the number of structural features of the class BookIndex.
    public static readonly BOOK_INDEX_FEATURE_COUNT: number = 2;

    // BOOK_INDEX_OPERATION_COUNT is the number of BOOK_INDEX_OPERATION_COUNT.
    public static readonly BOOK_INDEX_OPERATION_COUNT: number = 0;

    // ADDRESSABLE is the meta object id for the class Addressable.
    public static readonly ADDRESSABLE: number = 15;

    // ADDRESSABLE__ADDRESS is the feature id for the Addressable 'Address' attribute.
    public static readonly ADDRESSABLE__ADDRESS: number = 0;

    // ADDRESSABLE_FEATURE_COUNT is the number of structural features of the class Addressable.
    public static readonly ADDRESSABLE_FEATURE_COUNT: number = 1;

    // ADDRESSABLE_OPERATION_COUNT is the number of ADDRESSABLE_OPERATION_COUNT.
    public static readonly ADDRESSABLE_OPERATION_COUNT: number = 0;

    // LIBRARY is the meta object id for the class Library.
    public static readonly LIBRARY: number = 2;

    // LIBRARY__ADDRESS is the feature id for the Library 'Address' attribute.
    public static readonly LIBRARY__ADDRESS: number = 0;

    // LIBRARY__NAME is the feature id for the Library 'Name' attribute.
    public static readonly LIBRARY__NAME: number = 1;

    // LIBRARY__WRITERS is the feature id for the Library 'Writers' containment reference list.
    public static readonly LIBRARY__WRITERS: number = 2;

    // LIBRARY__EMPLOYEES is the feature id for the Library 'Employees' containment reference list.
    public static readonly LIBRARY__EMPLOYEES: number = 3;

    // LIBRARY__BORROWERS is the feature id for the Library 'Borrowers' containment reference list.
    public static readonly LIBRARY__BORROWERS: number = 4;

    // LIBRARY__STOCK is the feature id for the Library 'Stock' containment reference list.
    public static readonly LIBRARY__STOCK: number = 5;

    // LIBRARY__BOOKS is the feature id for the Library 'Books' containment reference list.
    public static readonly LIBRARY__BOOKS: number = 6;

    // LIBRARY__BRANCHES is the feature id for the Library 'Branches' containment reference list.
    public static readonly LIBRARY__BRANCHES: number = 7;

    // LIBRARY__PARENT_BRANCH is the feature id for the Library 'ParentBranch' container reference.
    public static readonly LIBRARY__PARENT_BRANCH: number = 8;

    // LIBRARY__PEOPLE is the feature id for the Library 'People' attribute list.
    public static readonly LIBRARY__PEOPLE: number = 9;

    // LIBRARY__PROPRIETARY is the feature id for the Library 'Proprietary' containment reference.
    public static readonly LIBRARY__PROPRIETARY: number = 10;

    // LIBRARY_FEATURE_COUNT is the number of structural features of the class Library.
    public static readonly LIBRARY_FEATURE_COUNT: number = 11;

    // LIBRARY_OPERATION_COUNT is the number of LIBRARY_OPERATION_COUNT.
    public static readonly LIBRARY_OPERATION_COUNT: number = 0;

    // PERSON is the meta object id for the class Person.
    public static readonly PERSON: number = 13;

    // PERSON__ADDRESS is the feature id for the Person 'Address' attribute.
    public static readonly PERSON__ADDRESS: number = 0;

    // PERSON__FIRST_NAME is the feature id for the Person 'FirstName' attribute.
    public static readonly PERSON__FIRST_NAME: number = 1;

    // PERSON__LAST_NAME is the feature id for the Person 'LastName' attribute.
    public static readonly PERSON__LAST_NAME: number = 2;

    // PERSON_FEATURE_COUNT is the number of structural features of the class Person.
    public static readonly PERSON_FEATURE_COUNT: number = 3;

    // PERSON_OPERATION_COUNT is the number of PERSON_OPERATION_COUNT.
    public static readonly PERSON_OPERATION_COUNT: number = 0;

    // WRITER is the meta object id for the class Writer.
    public static readonly WRITER: number = 3;

    // WRITER__ADDRESS is the feature id for the Writer 'Address' attribute.
    public static readonly WRITER__ADDRESS: number = 0;

    // WRITER__FIRST_NAME is the feature id for the Writer 'FirstName' attribute.
    public static readonly WRITER__FIRST_NAME: number = 1;

    // WRITER__LAST_NAME is the feature id for the Writer 'LastName' attribute.
    public static readonly WRITER__LAST_NAME: number = 2;

    // WRITER__NAME is the feature id for the Writer 'Name' attribute.
    public static readonly WRITER__NAME: number = 3;

    // WRITER__BOOKS is the feature id for the Writer 'Books' reference list.
    public static readonly WRITER__BOOKS: number = 4;

    // WRITER_FEATURE_COUNT is the number of structural features of the class Writer.
    public static readonly WRITER_FEATURE_COUNT: number = 5;

    // WRITER_OPERATION_COUNT is the number of WRITER_OPERATION_COUNT.
    public static readonly WRITER_OPERATION_COUNT: number = 0;

    // LENDABLE is the meta object id for the class Lendable.
    public static readonly LENDABLE: number = 6;

    // LENDABLE__COPIES is the feature id for the Lendable 'Copies' attribute.
    public static readonly LENDABLE__COPIES: number = 0;

    // LENDABLE__BORROWERS is the feature id for the Lendable 'Borrowers' reference list.
    public static readonly LENDABLE__BORROWERS: number = 1;

    // LENDABLE_FEATURE_COUNT is the number of structural features of the class Lendable.
    public static readonly LENDABLE_FEATURE_COUNT: number = 2;

    // LENDABLE_OPERATION_COUNT is the number of LENDABLE_OPERATION_COUNT.
    public static readonly LENDABLE_OPERATION_COUNT: number = 0;

    // PERIODICAL is the meta object id for the class Periodical.
    public static readonly PERIODICAL: number = 8;

    // PERIODICAL__PUBLICATION_DATE is the feature id for the Periodical 'PublicationDate' attribute.
    public static readonly PERIODICAL__PUBLICATION_DATE: number = 0;

    // PERIODICAL__TITLE is the feature id for the Periodical 'Title' attribute.
    public static readonly PERIODICAL__TITLE: number = 1;

    // PERIODICAL__ISSUES_PER_YEAR is the feature id for the Periodical 'IssuesPerYear' attribute.
    public static readonly PERIODICAL__ISSUES_PER_YEAR: number = 2;

    // PERIODICAL_FEATURE_COUNT is the number of structural features of the class Periodical.
    public static readonly PERIODICAL_FEATURE_COUNT: number = 3;

    // PERIODICAL_OPERATION_COUNT is the number of PERIODICAL_OPERATION_COUNT.
    public static readonly PERIODICAL_OPERATION_COUNT: number = 0;

    // AUDIO_VISUAL_ITEM is the meta object id for the class AudioVisualItem.
    public static readonly AUDIO_VISUAL_ITEM: number = 9;

    // AUDIO_VISUAL_ITEM__PUBLICATION_DATE is the feature id for the AudioVisualItem 'PublicationDate' attribute.
    public static readonly AUDIO_VISUAL_ITEM__PUBLICATION_DATE: number = 0;

    // AUDIO_VISUAL_ITEM__COPIES is the feature id for the AudioVisualItem 'Copies' attribute.
    public static readonly AUDIO_VISUAL_ITEM__COPIES: number = 1;

    // AUDIO_VISUAL_ITEM__BORROWERS is the feature id for the AudioVisualItem 'Borrowers' reference list.
    public static readonly AUDIO_VISUAL_ITEM__BORROWERS: number = 2;

    // AUDIO_VISUAL_ITEM__TITLE is the feature id for the AudioVisualItem 'Title' attribute.
    public static readonly AUDIO_VISUAL_ITEM__TITLE: number = 3;

    // AUDIO_VISUAL_ITEM__MINUTES_LENGTH is the feature id for the AudioVisualItem 'MinutesLength' attribute.
    public static readonly AUDIO_VISUAL_ITEM__MINUTES_LENGTH: number = 4;

    // AUDIO_VISUAL_ITEM__DAMAGED is the feature id for the AudioVisualItem 'IsDamaged' attribute.
    public static readonly AUDIO_VISUAL_ITEM__DAMAGED: number = 5;

    // AUDIO_VISUAL_ITEM_FEATURE_COUNT is the number of structural features of the class AudioVisualItem.
    public static readonly AUDIO_VISUAL_ITEM_FEATURE_COUNT: number = 6;

    // AUDIO_VISUAL_ITEM_OPERATION_COUNT is the number of AUDIO_VISUAL_ITEM_OPERATION_COUNT.
    public static readonly AUDIO_VISUAL_ITEM_OPERATION_COUNT: number = 0;

    // BOOK_ON_TAPE is the meta object id for the class BookOnTape.
    public static readonly BOOK_ON_TAPE: number = 10;

    // BOOK_ON_TAPE__PUBLICATION_DATE is the feature id for the BookOnTape 'PublicationDate' attribute.
    public static readonly BOOK_ON_TAPE__PUBLICATION_DATE: number = 0;

    // BOOK_ON_TAPE__COPIES is the feature id for the BookOnTape 'Copies' attribute.
    public static readonly BOOK_ON_TAPE__COPIES: number = 1;

    // BOOK_ON_TAPE__BORROWERS is the feature id for the BookOnTape 'Borrowers' reference list.
    public static readonly BOOK_ON_TAPE__BORROWERS: number = 2;

    // BOOK_ON_TAPE__TITLE is the feature id for the BookOnTape 'Title' attribute.
    public static readonly BOOK_ON_TAPE__TITLE: number = 3;

    // BOOK_ON_TAPE__MINUTES_LENGTH is the feature id for the BookOnTape 'MinutesLength' attribute.
    public static readonly BOOK_ON_TAPE__MINUTES_LENGTH: number = 4;

    // BOOK_ON_TAPE__DAMAGED is the feature id for the BookOnTape 'IsDamaged' attribute.
    public static readonly BOOK_ON_TAPE__DAMAGED: number = 5;

    // BOOK_ON_TAPE__READER is the feature id for the BookOnTape 'Reader' reference.
    public static readonly BOOK_ON_TAPE__READER: number = 6;

    // BOOK_ON_TAPE__AUTHOR is the feature id for the BookOnTape 'Author' reference.
    public static readonly BOOK_ON_TAPE__AUTHOR: number = 7;

    // BOOK_ON_TAPE_FEATURE_COUNT is the number of structural features of the class BookOnTape.
    public static readonly BOOK_ON_TAPE_FEATURE_COUNT: number = 8;

    // BOOK_ON_TAPE_OPERATION_COUNT is the number of BOOK_ON_TAPE_OPERATION_COUNT.
    public static readonly BOOK_ON_TAPE_OPERATION_COUNT: number = 0;

    // VIDEO_CASSETTE is the meta object id for the class VideoCassette.
    public static readonly VIDEO_CASSETTE: number = 11;

    // VIDEO_CASSETTE__PUBLICATION_DATE is the feature id for the VideoCassette 'PublicationDate' attribute.
    public static readonly VIDEO_CASSETTE__PUBLICATION_DATE: number = 0;

    // VIDEO_CASSETTE__COPIES is the feature id for the VideoCassette 'Copies' attribute.
    public static readonly VIDEO_CASSETTE__COPIES: number = 1;

    // VIDEO_CASSETTE__BORROWERS is the feature id for the VideoCassette 'Borrowers' reference list.
    public static readonly VIDEO_CASSETTE__BORROWERS: number = 2;

    // VIDEO_CASSETTE__TITLE is the feature id for the VideoCassette 'Title' attribute.
    public static readonly VIDEO_CASSETTE__TITLE: number = 3;

    // VIDEO_CASSETTE__MINUTES_LENGTH is the feature id for the VideoCassette 'MinutesLength' attribute.
    public static readonly VIDEO_CASSETTE__MINUTES_LENGTH: number = 4;

    // VIDEO_CASSETTE__DAMAGED is the feature id for the VideoCassette 'IsDamaged' attribute.
    public static readonly VIDEO_CASSETTE__DAMAGED: number = 5;

    // VIDEO_CASSETTE__CAST is the feature id for the VideoCassette 'Cast' reference list.
    public static readonly VIDEO_CASSETTE__CAST: number = 6;

    // VIDEO_CASSETTE_FEATURE_COUNT is the number of structural features of the class VideoCassette.
    public static readonly VIDEO_CASSETTE_FEATURE_COUNT: number = 7;

    // VIDEO_CASSETTE_OPERATION_COUNT is the number of VIDEO_CASSETTE_OPERATION_COUNT.
    public static readonly VIDEO_CASSETTE_OPERATION_COUNT: number = 0;

    // BORROWER is the meta object id for the class Borrower.
    public static readonly BORROWER: number = 12;

    // BORROWER__ADDRESS is the feature id for the Borrower 'Address' attribute.
    public static readonly BORROWER__ADDRESS: number = 0;

    // BORROWER__FIRST_NAME is the feature id for the Borrower 'FirstName' attribute.
    public static readonly BORROWER__FIRST_NAME: number = 1;

    // BORROWER__LAST_NAME is the feature id for the Borrower 'LastName' attribute.
    public static readonly BORROWER__LAST_NAME: number = 2;

    // BORROWER__BORROWED is the feature id for the Borrower 'Borrowed' reference list.
    public static readonly BORROWER__BORROWED: number = 3;

    // BORROWER_FEATURE_COUNT is the number of structural features of the class Borrower.
    public static readonly BORROWER_FEATURE_COUNT: number = 4;

    // BORROWER_OPERATION_COUNT is the number of BORROWER_OPERATION_COUNT.
    public static readonly BORROWER_OPERATION_COUNT: number = 0;

    // EMPLOYEE is the meta object id for the class Employee.
    public static readonly EMPLOYEE: number = 14;

    // EMPLOYEE__ADDRESS is the feature id for the Employee 'Address' attribute.
    public static readonly EMPLOYEE__ADDRESS: number = 0;

    // EMPLOYEE__FIRST_NAME is the feature id for the Employee 'FirstName' attribute.
    public static readonly EMPLOYEE__FIRST_NAME: number = 1;

    // EMPLOYEE__LAST_NAME is the feature id for the Employee 'LastName' attribute.
    public static readonly EMPLOYEE__LAST_NAME: number = 2;

    // EMPLOYEE__MANAGER is the feature id for the Employee 'Manager' reference.
    public static readonly EMPLOYEE__MANAGER: number = 3;

    // EMPLOYEE_FEATURE_COUNT is the number of structural features of the class Employee.
    public static readonly EMPLOYEE_FEATURE_COUNT: number = 4;

    // EMPLOYEE_OPERATION_COUNT is the number of EMPLOYEE_OPERATION_COUNT.
    public static readonly EMPLOYEE_OPERATION_COUNT: number = 0;

    // DOCUMENT_ROOT is the meta object id for the class DocumentRoot.
    public static readonly DOCUMENT_ROOT: number = 16;

    // DOCUMENT_ROOT__XMLNS_PREFIX_MAP is the feature id for the DocumentRoot 'XMLNSPrefixMap' map.
    public static readonly DOCUMENT_ROOT__XMLNS_PREFIX_MAP: number = 0;

    // DOCUMENT_ROOT__XSI_SCHEMA_LOCATION is the feature id for the DocumentRoot 'XSISchemaLocation' map.
    public static readonly DOCUMENT_ROOT__XSI_SCHEMA_LOCATION: number = 1;

    // DOCUMENT_ROOT__LIBRARY is the feature id for the DocumentRoot 'Library' containment reference.
    public static readonly DOCUMENT_ROOT__LIBRARY: number = 2;

    // DOCUMENT_ROOT_FEATURE_COUNT is the number of structural features of the class DocumentRoot.
    public static readonly DOCUMENT_ROOT_FEATURE_COUNT: number = 3;

    // DOCUMENT_ROOT_OPERATION_COUNT is the number of DOCUMENT_ROOT_OPERATION_COUNT.
    public static readonly DOCUMENT_ROOT_OPERATION_COUNT: number = 0;

    // BOOK_CATEGORY The meta object id for the enum BookCategory.
    public static readonly BOOK_CATEGORY: number = 4;
}
